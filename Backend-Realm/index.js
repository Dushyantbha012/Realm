const express = require("express")
const cors = require("cors")
const {PORT} = require("./config")
const router = require("./routers/router")
const http = require("http")
const initializeSocketIO = require("./Socket/socket"
)
const app = express();
app.use(cors());
app.use(express.json()); //may create error for chatserver
app.use("/api",router);
const server = http.createServer(app); //creating server to use in Socket.IO
initializeSocketIO(server,"/chatserver",{
    cors: {
      origin: "http://localhost:5173"
    }
  });

app.listen(PORT,()=>{
    console.log("Server Running on ", PORT)
});