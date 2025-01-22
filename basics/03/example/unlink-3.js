// 비동기로 파일 삭제하기 - unlink 함수 (결과 비교 파일 : 03\results\unlink-3.js)

const fs = require('fs');

if (!fs.existsSync("./text-1.txt")) {
    console.log("file dose not exist");
} else {
    fs.unlink("./text-1.txt", () => { // 비동기 처리로 파일삭제지만 인자가 없음 
        console.log("file deleted");
    });
}