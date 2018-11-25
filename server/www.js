require('dotenv').config({ path: '.env' });
const createServer = require('./src/server');

const server = createServer();

server.express;

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL
    }
  },
  deets => {
    console.log(`our server now running on port http:/localhost:${deets.port}`);
  }
);

module.exports = server;
