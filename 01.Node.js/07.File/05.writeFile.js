const fs = require('fs');

const buffer = '비동기적으로 파일 쓰기'

fs.writeFile('tmp/async.txt', buffer, error => {        // async 파일을 만들고 buffer 내용을 작성
    if (error)
        console.log(error);
});