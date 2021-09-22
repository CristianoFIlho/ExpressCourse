const {
    readFileSync,
    writeFileSync
} = require('fs');

const first = readFileScync('first.txt', 'utf8');
const second = readFileScync('second.txt', 'utf8');

writeFileSync(
    './content/result-sync.txt',
    `Here is the result:  ${fist}, ${second}`, (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(result);
    })