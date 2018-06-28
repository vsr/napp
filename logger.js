const winston = require('winston');
require('winston-daily-rotate-file');


const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new (winston.transports.DailyRotateFile)({
      filename: './logs/error-%DATE%.log',
      datePattern: 'YYYY-MM-DD-HH',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '10d',
      level: 'error',
    }),
    new (winston.transports.DailyRotateFile)({
      filename: './logs/combined-%DATE%.log',
      datePattern: 'YYYY-MM-DD-HH',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '10d',
    }),
  ],
});

module.exports = logger;
