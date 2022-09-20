const axios = require('axios');
const cheerio = require('cheerio');         // cheerio : python의 beautifulsoup이랑 같음

const url = 'https://www.hanbit.co.kr/academy/books/new_book_list.html';
axios.get(url)      // axios 데이터를 가져오는 역할         // promise
    .then(response => {
        //console.log(response.data);
        const $ = cheerio.load(response.data);

        $('.view_box').each((index, element) => {
            let title = $(element).find('.book_tit').text().trim(); //trim : 여백 지우기
            let author = $(element).find('.book_writer').text().trim();
            author = author.split(',').map(x => x.trim()).join(', ');
            console.log(index+1, '===============================================');
            console.log(title);
            console.log(author);
        });
    })
    .catch(err => {
        console.log(err);
    });
