console.log('running index');

const http = require('http');
const app = require('./app');
const logger = require('./utils/logger');
const config = require('./utils/config');

const server = http.createServer(app);

server.listen(config.PORT, () => {
  logger.info(`Server Running on port ${config.PORT}`);
});