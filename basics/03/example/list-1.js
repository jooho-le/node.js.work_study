// fs 모듈의 readdirSync 함수 연습하기 ( 결과 비교 파일 : 03\results\list-1.js)

const fs = require('fs');

// 동기 처리로 디렉터리 읽기 
let files = fs.readdirSync("./");
console.log(files);

// 비동기 처리로 디렉터리 읽기 
fs.readdir("./", (err, files) => {
    if (err) {
        console.error(err);
    }
    console.log(files);
});


