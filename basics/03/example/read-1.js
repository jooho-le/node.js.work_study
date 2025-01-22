// fs 모듈의 readFileSync 함수 연습하기 ( 결과 비교 파일 : 03\results\read-1.js)

const fs = require("fs");

const data = fs.readFileSync("./example.txt", "utf8"); // 우리가 읽을 수 있도록 문자열 형태로 가져고익 위해 utf8옵션 붙여 줌 
console.log(data);
