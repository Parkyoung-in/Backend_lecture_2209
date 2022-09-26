const mysql = require('mysql');
const config = require('./mysql.json');

const connection = mysql.createConnection(config);      // DB와 프로그램 연결, 접속

connection.connect();       // MYSQL DB에 접속
const sql = `SELECT * FROM city WHERE population > 9000000;`;
connection.query(sql, (err, rows, fields) => {     //sql이라는 쿼리를 날린다. // 조회할게 있으면 3개의 콜백함수 // 조회할게 없으면 2개의 콜백함수
    if (err)
        throw err;
    //console.log(rows);      // rows : 배열 타입 
    for (let row of rows) {
        const str = `${row.ID}\t${row.Name}\t${row.CountryCode}\t${row.District}\t${row.Population}`
        console.log(str);
    }
    //console.log(fields);
}); 
connection.end();           // MYSQL DB 접속 해제 
