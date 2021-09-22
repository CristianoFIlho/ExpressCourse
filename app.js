const {
    readFile,
    writeFile,
} = require('fs');
const fs = require('fs');


readFile('/home/cristianofilho/Desktop/GIT/GitHub/ExpressCourse/content/fist.txt', (err, result) => {
    if (err) {
        console.log(err);
        return
    }
    const secoud = result;
    readFile('/home/cristianofilho/Desktop/GIT/GitHub/ExpressCourse/content/subfolder/result.txt', 'utf8', (err, result) => {

    })
})