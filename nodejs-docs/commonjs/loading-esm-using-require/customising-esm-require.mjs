export default class Point {
  constructor (x, y) {
    this.x = x
    this.y = y
  }
  
  // when the module.exports export name is used, named exports will be lost to CommonJS consumers. To allow CommonJS consumers to continue accessing named exports, the module can make sure that the default export is an object with the named exports attached to it as properties. 
  // For example with the example above, 
  // distance can be attached to the default export, the Point class, as a static method.
  static distance = distance
}

export function distance (a, b) {
  return (b.x - a.x) ** 2 + (b.y - a.y) ** 2
}

// to customize what should be returned require(esm)
// directly, the ESM
export { Point as 'module.exports' }
