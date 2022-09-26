const mysql = require('mysql');
const config = require('./mysql.json')

const conn = mysql.createConnection(config);
conn.connect();
const sql = `SELECT g.gid, g.name, DATE_FORMAT(g.debut, '%Y-%m-%d') AS debut, s.title 
FROM song AS s
JOIN girl_group AS g
ON s.sid = g.hit_song_id;
`;
conn.query(sql, (err, rows, fields) => {
    if (err)
        throw err;
    for (let row of rows) {
    console.log(`${row.gid}\t${row.name}\t${row.debut}\t${row.title}`)
    }
});
conn.end();