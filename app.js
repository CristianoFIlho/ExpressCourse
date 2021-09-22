const {
    readFileSync,
    writeFileSync,
} = require('fs');
const fs = require('fs');

const first = readFileSync('./content/first.txt', 'utf8');

const second = readFileSync('./content/subfolder/secundary.txt', 'utf8');

console.log(first, second);