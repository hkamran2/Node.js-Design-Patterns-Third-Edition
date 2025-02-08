const Point = require('./customising-esm-require.mjs')

console.log(Point)

const p = new Point(1, 2)

console.log(p)

const { distance } = Point

// this is a static method so we can
// destructure quite easily
console.log(distance)
