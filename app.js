const {
    readFileSync,
    writeFileSync,
} = require('fs');
const fs = require('fs');

const first = readFileSync('/home/cristianofilho/Desktop/GIT/GitHub/ExpressCourse/content/fist.txt', 'utf8');

const second = readFileSync('/home/cristianofilho/Desktop/GIT/GitHub/ExpressCourse/content/subfolder/secundary.txt', 'utf8');

console.log(first, second);