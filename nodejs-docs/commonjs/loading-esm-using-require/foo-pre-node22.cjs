// Run this in Node.js versions less than 22

// To import a ESM module in CJS we need to use await import

async function main () {
  const distance = await import('./distance.mjs')
  console.log(distance)

  const point = await import('./point.mjs')
  console.log(point)
}

main()
