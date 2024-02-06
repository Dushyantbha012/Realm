import express from "express"
import cors from "cors"
import {PORT} from "./config"
import router from "./routers/router"
import http from "http"
import initializeSocketIO from "./Socket/socket"

const app = express();
const server = http.createServer(app); //creating server to use in Socket.IO
app.use(cors());
app.use(express.json()); //may create error for chatserver
app.use("/api",router);
initializeSocketIO(server,"/chatserver");

app.listen(PORT,()=>{
    console.log("Server Running on ", PORT)
});