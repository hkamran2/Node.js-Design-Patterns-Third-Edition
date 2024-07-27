import { URL } from 'node:url'
import { access, mkdir, writeFile } from 'node:fs'
import superagent from 'superagent'
import path from 'node:path'
import { Logger } from './logger.js'

const getFileNameFromURL = (url, cb) => {
  try {
    const fileUrl = new URL(url)
    const fileName = `${fileUrl.host}.html`
    return cb(null, fileName)
  } catch (error) {
    return cb(error)
  }
}

const baseFilePath = path.resolve('downloaded')

export function spider (url, cb) {
  if (!url) {
    return cb(new Error('Url not provided'))
  }

  getFileNameFromURL(url, (err, fileName) => {
    if (err) {
      return cb(err)
    }
    const filePath = path.resolve(baseFilePath, fileName)

    access(filePath, err => {
      if (err && err.code === 'ENOENT') {
        superagent.get(url, (err, res) => {
          if (err) {
            return cb(err)
          }

          Logger.info(`Downloading ${url}`)

          mkdir(baseFilePath, { recursive: true }, (err) => {
            if (err) {
              return cb(err)
            }
            writeFile(filePath, res.text, (err) => {
              if (err) {
                return cb(err)
              }
              cb(null, fileName, true)
            })
          })
        })
      } else {
        cb(null, fileName, false)
      }
    })
  })
}
