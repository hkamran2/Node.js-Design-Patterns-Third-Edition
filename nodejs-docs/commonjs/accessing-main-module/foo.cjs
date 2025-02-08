function main () {
  console.log('Hello World from main')
}

module.exports.main = main

// we execute the module if node foo.cjs is run.
// Node.js sets require.main to module object
// when node <file.js> is executed.
if (require.main === module) {
  main()
}
