const {
  createLogger,
  format,
  transports,
} = require('winston');
require('winston-daily-rotate-file');


const logger = createLogger({
  level: 'info',
  //   format: format.json(),
  format: format.combine(
    format.splat(),
    format.simple(),
    format.json(),
  ),
  transports: [
    new (transports.DailyRotateFile)({
      filename: './logs/error-%DATE%.log',
      datePattern: 'YYYY-MM-DD-HH',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '10d',
      level: 'error',
    }),
    new (transports.DailyRotateFile)({
      filename: './logs/combined-%DATE%.log',
      datePattern: 'YYYY-MM-DD-HH',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '10d',
    }),
  ],
});

module.exports = logger;
