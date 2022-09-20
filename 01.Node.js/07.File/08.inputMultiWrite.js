/*입력 으로 받은 내용 --> 새로운 파일에 쓰기
node 08.inputMultiWrite.js	filename
데이터 여러줄 입력
Ctrl + D를 입력하면 입력을 종료 */

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
r1.setPrompt('> ');     // 세팅

r1.prompt();            // 세팅한것 그대로 화면에 나옴
let input = '';
r1.on('line', buffer => {   // Enter 키 입력
    input += buffer + '\n'; 
    r1.prompt();
}).on('close', () => {      // Ctrl + D 키 입력
    fs.writeFile(filename, input, err => {
        if (err)
            console.log(err);
    });
    r1.close();
})
