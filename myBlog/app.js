require("dotenv").config();
const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("hello word");
});

app.listen(port, () =>{
    console.log(`App listening on port ${port}`);
});