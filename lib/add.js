const logger = require('../logger');

module.exports = function add(a, b) {
  logger.info('Adding %s, %s', a, b);
  return a + b;
};
