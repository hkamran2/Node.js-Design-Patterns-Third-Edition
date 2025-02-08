const SUPPORTED_LANGUAGES = ['el', 'en', 'es', 'it', 'ur']

const arg = process.argv[2]

if (!SUPPORTED_LANGUAGES.includes(arg)) {
  console.error(`The language option ${arg} is unsupported`)
  process.exit(1)
}

const translationModule = `./strings-${arg}.js`

import(translationModule).then(strings => {
  if (strings.HELLO) {
    console.log(strings.HELLO)
    process.exit(0)
  }

  // if there's a default export then we
  // the key of exports object becomes default.
  if (strings.default) {
    console.log(strings.default)
    process.exit(0)
  }

  throw new Error('Hello must be a default or HELLO import.')
}).catch(err => {
  console.err(err)
  process.exit(1)
})
