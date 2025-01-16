// 작업 순서 조절하기 - 비동기 처리 (결과 비교 : 02\results\asyn-2.js)
function displayA() {
    console.log("A");
}

function displayB(callback) {
    setTimeout(() => {
    console.log("B");
    callback(); // 콜백함수 사용 
    }, 2000);
}

function displayC() {
    console.log("C");
}

displayA();
displayB(displayC); // displayB 실행 후 displayC실행 