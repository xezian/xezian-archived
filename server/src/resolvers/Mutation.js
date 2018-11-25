const { transport } = require('../mail');

const Mutations = {
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
