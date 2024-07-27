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

const downloadsBaseFilePath = path.resolve('downloaded')

const getFile = (url, cb) => {
  Logger.info(`Downloading ${url}`)
  superagent.get(url, (err, res) => {
    if (err) {
      return cb(err)
    }
    Logger.info(`Download of ${url} is completed.`)
    cb(null, res.text)
  })
}

const saveFile = (filePath, text, cb) => {
  mkdir(downloadsBaseFilePath, { recursive: true }, (err) => {
    if (err) {
      return cb(err)
    }
    writeFile(filePath, text, cb)
  })
}

const download = ({ url, filePath, fileName }, cb) => {
  getFile(url, (err, text) => {
    if (err) {
      return cb(err)
    }
    saveFile(filePath, text, (err) => {
      if (err) {
        return cb(err)
      }
      cb(null, fileName, true)
    })
  })
}

export function spider (url, cb) {
  if (!url) {
    return cb(new Error('Url not provided'))
  }

  getFileNameFromURL(url, (err, fileName) => {
    if (err) {
      return cb(err)
    }

    const filePath = path.resolve(downloadsBaseFilePath, fileName)

    access(filePath, err => {
      if (!err || err.code !== 'ENOENT') {
        return cb(null, fileName, false)
      }

      if (err && err.code !== 'ENOENT') {
        return cb(err)
      }

      download({ url, fileName, filePath }, cb)
    })
  })
}
