// 프로미스를 사용해 피자 주문하기   (결과 비교: 02\results\promise.js)

let likePizza = true; // likePizza가 true니까 프라미스 안에서 resolve함수 실행 
const pizza = new Promise((resolve, reject) => {
    if (likePizza) 
        resolve("피자 주문"); // resolve함수 실행 
    else
    reject("피자 주문x");
});

pizza
.then(result => console.log(result)) // resolve 함수를 실행했으니 then실행 , result에는 프라미스에서 성공할 때 넘겨준 값 피자 주문 받아서 출력 
.catch(err => console.log(err));