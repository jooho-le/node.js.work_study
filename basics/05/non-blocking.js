// 논블로킹 I/O   (결과 비교 파일 : 05\results\nonblocking.js)

const fs = require('fs');

const data = fs.readFile("example.txt", "utf8", (err, data) => {
    if (err) {
        console.error(err);
    }
    console.log(data);
});

console.log("코드 끝");

// readFile은 비동기 함수이므로 어디간에 example.txt파일 읽는 작업 대기 시키고 다음 문장인 코드 끝 실행 후 console.log(data); 처리리