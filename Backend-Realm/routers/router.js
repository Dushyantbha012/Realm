import express from "express"
import userRouters from "./userRouters/userRouters"

const router = express.Router();

router.use("/user",userRouters);


module.exports = router;