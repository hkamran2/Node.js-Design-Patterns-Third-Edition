// make sure we get the cache updated
require('./logger')

class PinoLogger {
  constructor (name) {
    this.name = name
    this.logger = require('pino')()
    this.count = 0
  }

  log (message) {
    this.count++
    this.logger.info(`${this.name}: ${message}`)
  }
}

const logger = new PinoLogger(process.title)
// use the cache to update
require.cache[require.resolve('./logger')].exports = logger
