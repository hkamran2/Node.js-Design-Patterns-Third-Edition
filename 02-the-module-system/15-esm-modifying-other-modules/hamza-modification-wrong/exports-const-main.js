import { count, increment } from './exports-const-test.js'

console.log(count)
increment()
console.log(count)
increment = () => { console.log('1') }
