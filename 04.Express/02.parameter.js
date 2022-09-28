const express = require('express');
const app = express();      // 객체 생성   // express는 node js에서 웹서버를 개발하기 위한 framework   // python의 flask와 비슷한 개념

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>');
});

// http://localhost:3000/query?id=123
app.get('/query', (req, res) => {
    const id = req.query.id;        // ?id=123
    res.send(`<h1>/query: id - ${id}</h1>`);
});

// http://localhost:3000/params/id/:id
app.get('/params/id/:id', (req, res) => {
    const id = req.params.id;       // /:id
    res.send(`<h1>/params/id: id - ${id}</h1>`);
});

app.get('*', (req, res) => {  // *이 모든 경로를 다 포함하므로 경로 지정시 제일 마지막에 해준다
    res.status(404).send('Path not found.');
});
app.listen(3000, () => {
    console.log('Server is running at http://127.0.0.1:3000');
});