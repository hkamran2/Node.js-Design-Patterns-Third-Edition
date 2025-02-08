console.log('Running first module.')

// eslint-disable-next-line no-global-assign
// module = {
//   exports: {
//     run: () => console.log('Hello World')
//   },
//   id: module.id
// }

module.exports.run = () => {
  console.log('Running first module.')
}
