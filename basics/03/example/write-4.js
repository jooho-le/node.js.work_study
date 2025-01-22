// fs 모듈 writeFile 함수의 flag 옵션 연습하기 (결과 비교 파일은 03\results\write-4.js)

const fs = require('fs');

let content = `
================================================
내용 추가 
================================================
`;

fs.writeFileSync(".text-1.txt", content, { flag: "a"}); // flag값 a -> 내용을 추가하기 위해 파일을 열고 없으면 만드는 값 