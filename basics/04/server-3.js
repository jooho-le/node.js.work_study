// 응답 객체 확인하기 - 응답 헤더, 응답 본문, 응답 종료  (결과 비교 파일 : 04\results\server-3.js)

const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.method); // 요청 메서드 확인

    res.setHeader("Content-Type", "text/plain"); // 서버에서 텍스트 자료를 가져와서 처리 
    res.write("Hello Node");
    res.end();
});

server.listen(3000, () => {
    console.log("3000포트에서 서버 실행 중")
})

// URL요청을 하면 크롬 브라우저에서 파비콘을 함께 가져오기 때문에 GET메서드가 2번 나타남 