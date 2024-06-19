const { transports, format } = require("winston");
const expressWinston = require("express-winston");
const myFormat = format.printf(({ level, message, timestamp, meta }) => {
    // Ensure meta is defined and extract the message if available
    const logMessage = meta && meta.message ? meta.message : message;
    return `${timestamp} ${level} : ${logMessage}`;
  });

  const logger = expressWinston.logger({
    transports: [
      new transports.Console(),
      new transports.File({
        level: "warn",
        filename: "logsWarnings.log",
      }),
      new transports.File({
        level: "error",
        filename: "logsErrors.log",
      }),
    ],
    format: format.combine(format.json(), format.timestamp(), myFormat),
    statusLevels: true,
    metaField: null, 
    msg: "HTTP {{req.method}} {{req.url}}", 
    expressFormat: true, 
    colorize: false,
    ignoreRoute: function (req, res) { return false; },
  });
const errorLogger = expressWinston.errorLogger({
  transports: [
    new transports.File({
      filename: "logsInternalErrors.log",
    }),
  ],
  format: format.combine(
    format.json(),
    format.timestamp(),
    format.prettyPrint()
  ),
});

module.exports = { logger, errorLogger };
