const { forwardTo } = require('prisma-binding');

const Query = {
  projects: forwardTo('db'),
  project: forwardTo('db'),
  me(parent, args, ctx, info) {
    // check if there is a current userid
    if (!ctx.request.userId) {
      // allows not logged in people to still do stuff
      return null;
    }
    return ctx.db.query.user(
      {
        where: { id: ctx.request.userId }
      },
      info
    );
  }
};

module.exports = Query;
