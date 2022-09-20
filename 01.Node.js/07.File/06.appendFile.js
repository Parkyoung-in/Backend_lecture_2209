const fs = require('fs');

let buffer = '\n어펜드 모드로 동작합니다.\n';

fs.writeFile('tmp/async.txt', buffer, {flag: 'a'}, err => {         // flag(option) : a는 append 모드
    if (err)
        console.log(err);
});