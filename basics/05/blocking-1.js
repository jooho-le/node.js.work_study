// 블로킹 I/O  (결과 비교 파일 : 05\results\blocking-1.js)

const fs = require('fs');

const data = fs.readFileSync("example.txt") // readFileSync라는 동기 함수로 파일 다 읽어 오기 전까지 다음 줄 실행 불가
console.log(data);
console.log("코드 끝");