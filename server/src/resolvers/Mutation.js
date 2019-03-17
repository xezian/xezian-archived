const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { transport } = require('../mail');

const Mutation = {
  async createProject(parent, args, ctx, info) {
    if (!ctx.request.userId) {
      throw new Error('You need to be logged in for such actions');
    }
    // who is highest?
    const highest = await ctx.db.query.projects({
      orderBy: 'sortorder_ASC',
      last: 1
    });
    // let's take it one step higher
    const sortorder = highest[0].sortorder + 1;
    // mutation!
    const project = await ctx.db.mutation.createProject(
      {
        data: {
          ...args,
          sortorder
        }
      },
      info
    );
    return project;
  },
  async signup(parent, args, ctx, info) {
    if (args.secret !== process.env.ADMIN_SECRET) {
      throw new Error('Invalid Password!');
    }
    const secret = await bcrypt.hash(args.secret, 10);
    const password = await bcrypt.hash(args.password, 10);
    const user = await ctx.db.mutation.createUser(
      {
        data: {
          ...args,
          secret,
          password
        }
      },
      info
    );
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
    ctx.response.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24
    });
    return user;
  },
  async signin(parent, { name, password }, ctx, info) {
    // check if there's a user with email
    const user = await ctx.db.query.user({ where: { name } });
    if (!user) {
      throw new Error(`No such user found for name ${name}`);
    }
    // check if the password is good
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      throw new Error('Invalid Password!');
    }
    // generate jwt
    const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
    // set cookie with item
    ctx.response.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24
    });
    // return the user
    return user;
  },
  signout(parent, args, ctx, info) {
    ctx.response.clearCookie('token');
    return { message: 'Goodbye!' };
  },
  async emailMe(parent, args, ctx, info) {
    await transport.sendMail({
      from: process.env.MAIL_USER,
      to: 'jasonarnoldleo@gmail.com',
      replyTo: args.email,
      subject: `xezian.xyz contact form submission - ${args.subject}`,
      html: args.body
    });
    return { message: 'Thanks!' };
  },
  async sortOrder(parent, args, ctx, info) {
    // are you logged in?
    if (!ctx.request.userId) {
      throw new Error('You need to be logged in for such actions');
    }
    // who is highest?
    const highest = await ctx.db.query.projects({
      orderBy: 'sortorder_ASC',
      last: 1
    });
    const highestSO = highest[0].sortorder;
    // don't let 1 or highestSO through this
    if (
      // can't get higher than highest
      (args.sortorder >= highestSO && args.amount > 0) ||
      // can't get any lower than lowest
      (args.sortorder <= 1 && args.amount < 0)
    ) {
      return { message: 'THE EDGE' };
    } else {
      // set sortorder target determined by amount arg
      const sortorder = args.sortorder + args.amount;
      // set this project to 0
      await ctx.db.mutation.updateProject({
        data: {
          sortorder: 0
        },
        where: {
          sortorder: args.sortorder
        }
      });
      // set that project to what this project was
      await ctx.db.mutation.updateProject({
        data: {
          sortorder: args.sortorder
        },
        where: {
          sortorder
        }
      });
      // set this project (the 0) to the target
      await ctx.db.mutation.updateProject(
        {
          data: {
            sortorder
          },
          where: {
            sortorder: 0
          }
        },
        info
      );
      return { message: 'Sorted' };
    }
  },
  // mutations for jasonandariel.com to trigger emails and store rsvp information
  // to store all rsvp responses for reference
  async rsvp(parent, args, ctx, info) {
    await ctx.db.mutation.createGuest(
      {
        data: {
          ...args
        }
      },
      info
    );
    return { message: '♡' };
  },
  // email mutation for rsvp and gift fund emails
  async emailUsBoth(parent, args, ctx, info) {
    await transport.sendMail({
      from: process.env.MAIL_USER,
      to: args.email,
      replyTo: 'jasonarnoldleo@gmail.com;ariel.f.and@gmail.com',
      subject: args.subjectThanks,
      html: args.bodyThanks
    });
    await transport.sendMail({
      from: process.env.MAIL_USER,
      to: 'jasonarnoldleo@gmail.com;ariel.f.and@gmail.com',
      subject: args.subjectNotif,
      html: args.bodyNotif
    });
    return { message: 'emails sent' };
  }
};

module.exports = Mutation;
