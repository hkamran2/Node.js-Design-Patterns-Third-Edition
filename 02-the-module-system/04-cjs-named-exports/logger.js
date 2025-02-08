exports.info = (message) => {
  console.log(`info: ${message}`)
}

exports.verbose = (message) => {
  console.log(`verbose: ${message}`)
}

// what's the named exports pattern
exports.error = (error, message = '') => {
  console.error(error.message, message)
}
