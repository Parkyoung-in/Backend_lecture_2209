const express = require('express');
const app = express();      // 객체 생성   // express는 node js에서 웹서버를 개발하기 위한 framework   // python의 flask와 비슷한 개념

// app.get() = app.put() = app.use() 
// use - 무엇인가를 사용하겠다. Middleware
// http method - get, post, put, delete, all
// listen - 대기
app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>')
});

// routing path별 처리해 주는 함수
app.get('/aaa', (req, res) => {
    res.send('<h1>Hello World</h1>')
});
app.get('/bbb', (req, res) => {
    res.send('<h1>Hello World</h1>')
});

// Status code 404
app.get('*', (req, res) => {  // *이 모든 경로를 다 포함하므로 경로 지정시 제일 마지막에 해준다
    res.status(404).send('Path not found.');
});
app.listen(3000, () => {
    console.log('Server is running at http://127.0.0.1:3000');
});