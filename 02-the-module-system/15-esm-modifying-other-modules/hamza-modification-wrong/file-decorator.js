import pino from 'pino'
import { readFile } from 'node:fs'
import { userInfo } from 'node:os'
import { syncBuiltinESMExports } from 'node:module'
const logger = pino()

const originalReadFile = readFile

function readFileWithLogger (path, options, cb) {
  const user = userInfo()

  logger.info(`${user.username} accessed file at ${path}`)

  originalReadFile(path, options, (err, data) => {
    if (err) {
      logger.error(`Error reading file ${path}. ${err}`)
      return cb(err, null)
    }

    setImmediate(() => {
      cb(null, data)
    })
  })
}

readFile = readFileWithLogger
syncBuiltinESMExports()
