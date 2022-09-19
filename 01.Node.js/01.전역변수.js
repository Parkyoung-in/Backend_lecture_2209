//const fs = require('fs');   // fs라는 외부의 모듈을 링크로드    // python의 import numpy 같은 개념
const path = require('path');

console.log(__dirname);     // 이 프로그램이 있는 디렉토리
console.log(__filename);    // 이 프로그램의 파일 이름

// 상대 경로(relative path)
const relPath = 'tmp/textfile.txt';

// 절대 경로(absolute path)
const absPath = path.join(__dirname, 'tmp', 'textfile.txt');
console.log(absPath);