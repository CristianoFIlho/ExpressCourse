/*console.log(__dirname);
setInterval(() => {
    console.log('Hello world');
}, 1000);*/

const names = require('./4-names');
const sayHi = require('./5-sayHi');
const date = require('./6-alternative');
console.log(date);

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)