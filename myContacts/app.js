require("dotenv").config(); // ✅ 환경 변수 로드 (가장 위에 추가)
const express = require("express");
const dbConnect = require("./config/dbConnect");

const app = express();
const port = 3000;

dbConnect(); // ✅ MongoDB 연결

// /로 요청했을 때 라우트 코드 
app.get("/", (req, res) => {
    res.status(200).send("hello node");
});

// /contacts로 요청했을 때 라우트 코드 
app.use("/contacts", require("./routes/contactRoute"));

app.listen(port, () => {
  console.log(`${port}번 포트에서 서버 실행 중`);
});
