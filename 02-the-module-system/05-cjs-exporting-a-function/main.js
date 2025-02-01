const logger = require('./logger')

console.log(typeof logger)
logger('This is an informational message')
logger.verbose('This is a verbose message')
