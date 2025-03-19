const asyncHandler = require("express-async-handler");

const getAllContacts = asyncHandler(async (req, res) => {
    res.status(200).send("Contact Page");
});

module.exports = getAllContacts;