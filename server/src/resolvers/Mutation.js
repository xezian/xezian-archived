const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { transport } = require('../mail');

const Mutations = {
  async createProject(parent, args, ctx, info) {
    if (!ctx.request.userId) {
      throw new Error('You need to be logged in for such actions');
    }
    const project = await ctx.db.mutation.createProject(
      {
        data: {
          ...args
        }
      },
      info
    );
    console.log(project);
    return project;
  },
  async signup(parent, args, ctx, info) {
    if(args.secret!==process.env.ADMIN_SECRET){
      throw new Error('Invalid Password!');
    }
    const password = await bcrypt.hash(args.password, 10);
    const user = await ctx.db.mutation.createUser(
      {
        data: {
          ...args,
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
    const mailRes = await transport.sendMail({
      from: process.env.MAIL_USER,
      to: 'xezian@icloud.com',
      replyTo: args.email,
      subject: args.subject,
      html: args.body
    });
    return { message: 'Thanks!' };
  }
};

module.exports = Mutations;
