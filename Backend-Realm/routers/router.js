const express = require("express")
const userRouters = require("./userRouters/userRouters")

const router = express.Router();

router.use("/user",userRouters);


module.exports = router;