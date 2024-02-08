const express = require("express")
const userRouters = require("./userRouters/userRouters")
const chatRouters = require("./chatRouters/chatRouters")
const router = express.Router();

router.use("/user",userRouters);
router.use("/chat",chatRouters);

module.exports = router;