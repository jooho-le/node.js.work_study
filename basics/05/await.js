// async ... awiat 연습하기  (결과 비교 파일 : 05\results\await.js)

const fs = require('fs').promises;

async function readDirAsync() {
    try {
        const files = await fs.readdir("./"); // 프라미스를 반환하는 readdir함수 
        console.log(files);
    } catch {
        console.error(err);
    }
}

readDirAsync();

// 비동기로 처리할 함수가 있다면 그것을 감싸는 함수를 만들고 async를 붙임 
// 그리고 비동기로 처리할 함수 앞에 await 키워드를 사용 
// 주의할 점은 await를 붙일 수 있는 함수는 프라미스를 반환하는 메서드여야 한다는 것 