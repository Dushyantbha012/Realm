import express from "express"
import cors from "cors"
import {PORT} from "./config"
import router from "./routers/router"

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api",router);

app.listen(PORT,()=>{
    console.log("Server Running on ", PORT)
});