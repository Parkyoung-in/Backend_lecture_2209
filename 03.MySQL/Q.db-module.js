const mysql = require('mysql');
const config = require('./mysql.json');

module.exports = {
    getConnection: function() {
        const conn = mysql.createConnection(config);
        conn.connect(err => {
            if (err) {
                console.log('mysql connection error');
                console.log(err);
            }
        });
        return conn;
    },
    getgg: function(callback) {
        const conn = this.getConnection();
        const sql = `SELECT gid, name, DATE_FORMAT(debut, '%Y-%m-%d') as debut, hit_song_id FROM girl_group;`;
        conn.query(sql, (err, rows, fields) => {
            if (err)
                throw err;
            callback(rows);
        });
        conn.end();
    },
    getss: function(callback) {
        const conn = this.getConnection();
        const sql = `SELECT * from song;`;
        conn.query(sql, (err, rows, fields) => {
            if (err)
                throw err;
            callback(rows);
        });
        conn.end();
    },
    getGlist: function(callback) {
        const conn = this.getConnection();
        const sql = `SELECT g.gid, g.name, DATE_FORMAT(g.debut, '%Y-%m-%d') AS debut, title
        FROM girl_group AS g
        JOIN song AS s
        ON g.hit_song_id = s.sid;`;
        conn.query(sql, (err, rows, fields) => {
            if (err)
                throw err;
            callback(rows);
        });
        conn.end();
    },
    getSlist: function(callback) {
        const conn = this.getConnection
    },
    getSlist: function(callback) {
        const conn = this.getConnection();
        const sql = `SELECT sid, title, lyrics, name
        FROM girl_group AS g
        JOIN song AS s
        ON g.hit_song_id = s.sid;`;
        conn.query(sql, (err, rows, fields) => {
            if (err)
                throw err;
            callback(rows);
        });
        conn.end();
    },
    getgirlgroup: function(params, callback) {
        const conn = this.getConnection();
        const sql = `SELECT gid, name, DATE_FORMAT(debut, '%Y-%m-%d') AS debut, title
        FROM girl_group
        JOIN song
        ON girl_group.hit_song_id = song.sid
        WHERE gid=?;`;
        conn.query(sql, params, (err, rows, fields) => {
            if (err)
                throw err;
            callback(rows);
        });
        conn.end();
    },
    getsong: function(params, callback) {
        const conn = this.getConnection();
        const sql = `SELECT sid, title, lyrics, name
        FROM girl_group
        JOIN song
        ON girl_group.hit_song_id = song.sid
        WHERE gid=?;`;
        conn.query(sql, params, (err, rows, fields) => {
            if (err)
                throw err;
            callback(rows);
        });
        conn.end();
    },
    insertgirlgroup: function(params, callback) {
        const conn = mysql.createConnection(config);
        const sql = `INSERT INTO girl_group (name, debut, hit_song_id)
                    VALUES(?, ?, ?);`;
        conn.query(sql, params, (err, fields) => {
            if (err)
                throw err;
            callback();
        });
        conn.end();
    },
    updategirlgroup: function(params, callback) {
        const conn = this.getConnection();
        const sql = `UPDATE girl_group SET name=?, debut=?, hit_song_id=? WHERE gid=?;`;
        conn.query(sql, params, (err, fields) => {
            if (err)
                throw err;
            callback();
        });
        conn.end();
    },
    deletegirlgroup: function(params, callback) {
        const conn = this.getConnection();
        const sql = `DELETE FROM girl_group WHERE gid=?;`;
        conn.query(sql, params, (err, fields) => {
            if (err)
                throw err;
            callback();
        });
        conn.end();
    },
    insertsong: function(params, callback) {
        const conn = mysql.createConnection(config);
        const sql = `INSERT INTO song (title, lyrics) VALUES(?, ?);`;
        conn.query(sql, params, (err, fields) => {
            if (err)
                throw err;
            callback();
        });
        conn.end();
    },
    updatesong: function(params, callback) {
        const conn = this.getConnection();
        const sql = `UPDATE song SET title=?, lyrics=? WHERE sid=?;`;
        conn.query(sql, params, (err, fields) => {
            if (err)
                throw err;
            callback();
        });
        conn.end();
    },
    deletesong: function(params, callback) {
        const conn = this.getConnection();
        const sql = `DELETE FROM song WHERE sid=?;`;
        conn.query(sql, params, (err, fields) => {
            if (err)
                throw err;
            callback();
        });
        conn.end();
    }
}