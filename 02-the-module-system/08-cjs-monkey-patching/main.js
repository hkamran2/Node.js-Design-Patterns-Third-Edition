// require('./patcher')
// const logger = require('./logger')

// logger.customMessage()

require('./pino-logger-patch')
const logger = require('./logger')
const assert = require('node:assert')
logger.log('This is a monkey patched node module')

assert.equal(logger.count, 1)
