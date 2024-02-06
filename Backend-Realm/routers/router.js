import express from "express"
import userRouters from "./userRouters/userRouters"
import chatRouters from "./chatRouters/chatRouters"
const router = express.Router();

router.use("/user",userRouters);


module.exports = router;