// Promise
// Producer(함수)
function delayP(ms) {
    return new Promise((resolve, reject) => {       // resolve : 성공했을때 실행되는 함수  // reject : 실패했을때 실행되는 함수
        try {
            setTimeout(() => {
                resolve('성공');        // resolve : 성공했을때 실행되는 callback 함수
            }, ms);
        } catch(e) {
            reject('실패');             // reject : 실패했을때 실행되는 callback 함수
        }
    });
}

// Consumer(함수 불러 쓰는 법)
delayP(1000)
    /* .then((val) => {
        console.log(val);   // resolve에 해당됨
    })
    .catch(err => {console.log(err);}); */
    .then(console.log)          // 이렇게 써도 실행됨
    .catch(console.log);        // 이렇게 써도 실행됨