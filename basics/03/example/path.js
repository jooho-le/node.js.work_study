// path 모듈 연습하기 ( 결과 비교 파일 : 03\results\path.js)

const path = require("path");

// 경로 연결 
const fullPath = path.join('some', 'work', 'ex.txt'); // some\work\ex.txt
console.log(fullPath);

// 경로만 추출
const dir = path.dirname(__filename);
console.log(dir);

// 파일 이름 추출 
const fn = path.basename(__filename);
const fn2 = path.basename(__filename, '.js');
console.log(fn);
console.log(fn2);

// 확장자 추출 
const ext = path.extname(__filename);
console.log(ext);

// 경로를 객체로 반환 
const parsePath = path.parse(__filename);
console.log(parsePath);