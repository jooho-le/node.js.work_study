async function init() { // init함수 안에서 비동기 처리 할 예정 
  const response = await fetch("https://jsonplaceholder.typicode.com/users");  // 서버에서 가져오기
  const users = await response.json();  // 가져온 결과를 users에 저장
  console.log(users);  // users 표시
}

init();

