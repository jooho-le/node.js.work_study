// 콜백 함수를 사용해 비동기 처리하기  (결과 비교 파일 : 05\results\async-3.js)

const fs = require('fs');

let files = fs.readdir("./", (err, file) => {
    if (err) {
        console.error(err); 
    }
    console.log(files);
});

console.log("코드 끝");

// 비동기로 처리했기 떄문에 디렉터리 가져오는데 시간 걸리는 readdir함수 나중에 실행 됨 
