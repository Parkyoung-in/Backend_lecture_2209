const mysql = require('mysql');
const config = require('./mysql.json')

const conn = mysql.createConnection(config);
conn.connect();
const sql = `SELECT * FROM tigers where position=? and isDeleted=0;`;       // 검색이므로 파람값을 준다.
conn.query(sql, ['투수'], (err, rows, fields) => {
    if (err)
        throw err;
    for (let row of rows) {
    console.log(`${row.id}\t${row.player}\t${row.backNo}\t${row.position}\t${row.isDeleted}`)
    }
});
conn.end();