const dm = require('./Q.db-module');

/* dm.getGlist(rows => {
    for (let row of rows) {
        console.log(row.gid, row.name, row.debut, row.title);
    }
}); */
/* dm.getSlist(rows => {
    for (let row of rows) {
        console.log(row.sid, row.title, row.lyrics, row.name)
    }
}); */
/* dm.getgirlgroup(6, rows => {
    for (let row of rows) {
        console.log(row.gid, row.name, row.debut, row.title);
    }
}) */
/* dm.getsong(6, rows => {
    for (let row of rows) {
        console.log(row.sid, row.title, row.lyrics, row.name);
    }
}) */
/* dm.insertgirlgroup(['여자(아이들)','2022-06-10',855], () => {
    dm.getgg(rows => {
        for (let row of rows) {
            console.log(row.name, row.debut, row.hit_song_id);
        }
    });
}); */
/* dm.updategirlgroup(['여자(아이들)23','2032-06-10',5555, 18], () => {
    dm.getgg(rows => {
        for (let row of rows) {
            console.log(row.name, row.debut, row.hit_song_id);
        }
    });
}); */
/* dm.deletegirlgroup(18, () => {
    dm.getgg(rows => {
        for (let row of rows) {
            console.log(row.name, row.debut, row.hit_song_id);
        }
    });
}); */
/* dm.insertsong(['test2','가사abcdefg2'], () => {
    dm.getss(rows => {
        for (let row of rows) {
            console.log(row.title, row.lyrics);
        }
    });
}); */
/* dm.updatesong(['test1','가사qwe', 117], () => {
    dm.getss(rows => {
        for (let row of rows) {
            console.log(row.title, row.lyrics);
        }
    });
}); */
dm.deletesong(118, () => {
    dm.getss(rows => {
        for (let row of rows) {
            console.log(row.title, row.lyrics);
        }
    });
});