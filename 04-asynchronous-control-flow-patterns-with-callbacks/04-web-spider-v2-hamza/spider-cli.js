import { argv } from 'node:process'
import { spider } from './spider.js'
import { Logger } from './logger.js'
const args = argv.slice(2)

spider(args[0], (err, filename, downloaded) => {
  if (err) {
    Logger.error(err)
    process.exit(1)
  }

  if (downloaded) {
    return Logger.success(`${filename} has been downloaded`)
  }

  return Logger.success(`${filename} was already downloaded`)
})
