const express = require("express")
const userRouters = require("./userRouters/userRouters")
const chatRouters = require("./chatRouters/chatRouters")
const questionRouters = require("./questionRouters/questionRouters")

const router = express.Router();

router.use("/user",userRouters);
router.use("/chat",chatRouters);
router.use("/question",questionRouters);

module.exports = router;