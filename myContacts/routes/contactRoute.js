const express = require('express');
const router = express.Router();

// 모든 연락처 가져오기, 새 연락처 추가하기 
router
    .route("/")
    
    .post((req, res) => {
        res.status(200).send("Create Contacts");
    });

// 개별 연락처 가져오기, 수정하기, 삭제하기
router
    .route("/:id")
    .get((req, res) => {
        res.status(200).send(`View Contacts for ID :${req.params.id}`);
    })
    .put((req, res) => {
        res.status(200).send(`Update Contacts for ID :${req.params.id}`);
    })
    .delete((req, res) => {
        res.status(200).send(`Delete Contacts for ID :${req.params.id}`);
    });

module.exports = router;