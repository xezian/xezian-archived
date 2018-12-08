const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
require('dotenv').config({ path: '.env' });
const createServer = require('./src/server');

const server = createServer();

server.express.use(cookieParser());

// decode the jwt so we can get the user id on each request
server.express.use((req, res, next) => {
  const { token } = req.cookies;
  if (token) {
    const { userId } = jwt.verify(token, process.env.APP_SECRET);
    req.userId = userId;
  }
  next();
});

server.start(
  {
    cors: {
      credentials: true,
      origin: [
        process.env.FRONTEND_URL,
        'https://www.xezian.xyz',
        'https://www.xezian.com'
      ]
    }
  },
  deets => {
    console.log(`our server now running on port http:/localhost:${deets.port}`);
  }
);

module.exports = server;
