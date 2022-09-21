/*
인터파크  베스트 셀러 목록
제목, 저자, 출판사, 가격
*/
const axios = require('axios');
const cheerio = require('cheerio');         // cheerio : python의 beautifulsoup이랑 같음
const iconv = require('iconv-lite');        // npm i iconv-lite

const url = 'http://book.interpark.com/display/collectlist.do?_method=BestsellerHourNew201605&bestTp=1&dispNo=028'

axios.get(url, {responseType: 'arraybuffer'})      // axios 데이터를 가져오는 역할         // promise
    .then(response => {
        let contentType = response.headers['content-type'];
        console.log(contentType);
        let charset = contentType.includes('charset=') ? contentType.split('charset=')[1] : 'UTF-8';
        let data = iconv.decode(response.data, charset);
        //console.log(response.data);
        
        const $ = cheerio.load(data);

        $('.listItem, .singleType').each((index, element) => {
            let title = $(element).find('.itemName').text().trim(); //trim : 여백 지우기
            let author = $(element).find('.author').text().trim();
            let company = $(element).find('.company').text().trim();
            let price = $(element).find('.price').text().trim();
            author = author.split(',').map(x => x.trim()).join(', ');
            console.log(index+1, '===============================================');
            console.log(title);
            console.log(author);
            console.log(company);
            console.log(price);
        });
    })
    .catch(err => {
        console.log(err);
    });
