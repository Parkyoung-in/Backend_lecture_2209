const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');           // 결과적으로 multer도 middleware => setting 필요
const fs = require('fs');

const app = express();      
app.use(express.static(__dirname + '/public')); 
app.use(bodyParser.urlencoded({extended: false}));

// multer setting
const upload = multer({        // 옵션 추가
    storage: multer.diskStorage({       // 옵션추가
        destination: __dirname + '/public/upload/',         // 저장위치 설정
        filename: (req, file, next) => {                     // next callback 함수
            next(null, file.originalname)
        }
    })
});

app.get('/', (req, res) => {
    res.send('<h1>File Upload</h1>');
});

app.get('/file', (req, res) => {
    fs.readFile('views/08.file.html', 'utf8', (err, html) => {
        res.send(html);
    });
});

app.post('/file', upload.single('image'), (req, res) => {
    const comment = req.body.comment;
    res.send(`<h1>Comment: ${comment}</h1>
                <h1>Filename: ${req.file.filename}</h1>`);
});

app.get('*', (req, res) => {
    res.status(404).send('Path not found.');
});
app.listen(3000, () => {
    console.log('Server is running at http://127.0.0.1:3000');
});