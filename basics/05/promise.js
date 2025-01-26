// Node.js에서 프로미스로 비동기 처리하기  (결과 비교 파일 : 05\results\promise.js)

const fs = require('fs').promises; // FS모듈 가져올 때 promises를 붙여 FS모듈의 프라미스 반환 함수 사용 

fs.readdir("./")
    .then((results) => console.log(results))
    .catch((err) => console.error(err));