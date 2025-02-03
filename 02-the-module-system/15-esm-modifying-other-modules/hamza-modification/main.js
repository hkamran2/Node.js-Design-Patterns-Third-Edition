import './decorate-file-access.js'
import { readFile } from 'fs'

readFile('./test.txt', 'utf-8', (err, data) => {
  if (err) {
    throw err
  }

  console.log(data)
})
