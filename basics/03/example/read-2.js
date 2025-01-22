// fs 모듈 readFileSync 함수의 인코딩 옵션 연습하기 ( 결과 비교 파일 : 03\results\read-2.js)

const fs = require("fs");

fs.readFile("./example.txt", "utf8", (err, data) => { // err, data인자로 콜백함수 형태로 만듬 
    if (err) {
        console.log(err);
    } 
    console.log(data);
})