const logger = require('./logger')

logger.info('This is an informational message')
logger.verbose('This is a verbose message')
logger.error(new Error(), 'This is a error message')
