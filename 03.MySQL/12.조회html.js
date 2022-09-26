const fs = require('fs');
const mysql = require('mysql');
const config = require('./mysql.json');
let html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <table>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Country Code</th>
            <th>District</th>
            <th>Population</th>
        </tr>
`;

const connection = mysql.createConnection(config);      // DB와 프로그램 연결, 접속

connection.connect();       // MYSQL DB에 접속
const sql = `SELECT * FROM city WHERE population > 9000000;`;
connection.query(sql, (err, rows, fields) => {     //sql이라는 쿼리를 날린다. // 조회할게 있으면 3개의 콜백함수 // 조회할게 없으면 2개의 콜백함수
    if (err)
        throw err;
    //console.log(rows);      // rows : 배열 타입 
    for (let row of rows) {
        let line = '<tr>';
        line += `<td>${row.ID}</td><td>${row.Name}</td><td>${row.CountryCode}</td><td>${row.District}</td><td>${row.Population}</td>`
        line += '</tr>\n';
        html += line;
    }
    html += `
    </table>
</body>
</html>
    `;
    fs.writeFile('12.table.html', html, err => {

    });
}); 
connection.end();           // MYSQL DB 접속 해제 
