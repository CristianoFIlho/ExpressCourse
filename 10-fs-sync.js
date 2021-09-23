const {
    readFileSync,
    writeFileSync
} = require('fs')
console.log('start')
const first = readFileSync('/home/cristianofilho/Desktop/GIT/GitHub/ExpressCourse/content/fist.txt', 'utf8')
const second = readFileSync('/home/cristianofilho/Desktop/GIT/GitHub/ExpressCourse/content/subfolder/secundary.txt', 'utf8')

writeFileSync(
    '/home/cristianofilho/Desktop/GIT/GitHub/ExpressCourse/content/result-sync.txt',
    `Here is the result : ${first}, ${second}`, {
        flag: 'a'
    }
)
console.log('done with this task')
console.log('starting the next one')