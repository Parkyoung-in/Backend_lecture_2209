const http = require('http');
const fs = require('fs');
const url = require('url');

const server = http.createServer((req, res) => {
    let pathname = url.parse(req.url).pathname;
    if (pathname ==='/') {
        fs.readFile('view/03.helloWorld.html', 'utf8', (err, html) => {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(html);
        });
    } else if (pathname === '/image') {
        fs.readFile('media/강아지.jpg', (err, image) => {
            res.writeHead(200, {'Content-Type': 'image/jpeg'});
            res.end(image);
        });
    } else if (pathname === '/audio') {
        fs.readFile('media/sample_MP3.mp3', (err, audio) => {
            res.writeHead(200, {'Content-Type': 'audio/mp3'});
            res.end(audio);
        });
    }else if (pathname === '/video') {
        fs.readFile('media/sample_MP4.mp4', (err, video) => {
            res.writeHead(200, {'Content-Type': 'video/mp4'});
            res.end(video);
        });
    }else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end();
    }
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});