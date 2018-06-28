const logger = require('./logger');
const add = require('./lib/add');

logger.info('hello');

const { a, b } = { a: 1, b: 2 };
const sum = add(a, b);

logger.info('Adding %d, %d to get %d', a, b, sum);
logger.info('Logging an object: %o', { a, b });
