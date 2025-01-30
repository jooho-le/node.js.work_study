const mongoose = require("mongoose");
require("dotenv").config();

// db 접속 코드 
const dbConnect = async () => {
    try {
        const conncet = await mongoose.connect(process.env.DB_CONNECT); // db연결에 시간이 걸려 await
        console.log("db connected");
    } catch (err) {
        console.log(err);
    }    
};

// db 접속 함수 내보냄 
module.exports = dbConnect;