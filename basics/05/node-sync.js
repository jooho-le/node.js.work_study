// Node.js에서 동기 처리하기   (결과 비교 파일 : 05\results\node-sync.js)

const fs = require('fs');

let files = fs.readFileSync("./");
console.log(files);

console.log("코드 끝");

// 동기함수를 사용했으므로 디렉터리 내용을 화면에 보여 준 후에 코드 끝 텍스트가 터미널에 나타남 
