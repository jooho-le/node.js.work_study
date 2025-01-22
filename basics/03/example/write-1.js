// 동기로 파일 기록하기 - writeFileSync 함수 (결과 비교 파일은 03\results\write-1.js)

const fs = require("fs");

const data = fs.readFileSync("./example.txt", "utf8"); // 읽어온 내용 data변수에 저장  
fs.writeFileSync("./text-1.txt", data); // 저장된 내용 text-1.txt에 기록 