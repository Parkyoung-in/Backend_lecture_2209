/* 입력으로 받은 내용 --> 새로운 파일에 쓰기
node 07.inputWrite.js	filename
데이터 입력
엔터를 치면 파일에 쓰기 */

// 사용법 : node thisfile.js filename

const fs = require('fs');
const readline =require('readline');

// filename 파라메터로 받기
if (process.argv.length < 3) {
    console.log('사용법 : node thisfile.js filename');
    process.exit();
}
const filename = process.argv[2];

const r1 = readline.createInterface({
    input : process.stdin,          // standard input, terminal(keyboard)
    output : process.stdout         // standard output, terminal(monitor)
});
r1.prompt('> ');

r1.on('line', buffer => {
    fs.writeFile(filename, buffer, err => {
        if (err)
            console.log(err);
    });
    r1.close();
})