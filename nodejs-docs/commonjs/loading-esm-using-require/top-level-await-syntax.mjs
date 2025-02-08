// this only works with ESM

const data = await fetch('https://swapi.dev/api/people')
const json = await data.json()

console.log(JSON.stringify(json, null, 2))