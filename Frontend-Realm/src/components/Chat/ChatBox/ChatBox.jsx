const {React, useState, useEffect} = require('react');
const io = require("socket.io-client")

function ChatBox({roomId, roomdbId, username}) {
  const socket = io.connect("http://localhost:3000/chatserver")
  const [currentMessage, setCurrentMessage] = useState("");
  const [chats, setChats]=useState([]);
  useEffect(()=>{
    if(username!==""&&room!==""){
      socket.emit("joinRoom",{roomId : roomId, roomdbId:roomdbId});
      socket.on("initialChats",(initialChats)=>{
        setChats(initialChats);
      })
    }
  },[roomId, roomdbId, username]);
  const handelEnterPress = (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };
  useEffect(()=>{
    socket.on("receiveMessage",(receivedChat)=>{
      setChats((prevChats)=>[...prevChats,receivedChat]);
    })
  },[socket])
  const sendMessage = async()=>{
    if(currentMessage!=""){
      const messageData = {
        roomdbId:roomdbId,
        chat:{
          author:username,
          message:currentMessage,
          timeStamp: new Date(Date.now()).getHours() +
          ":" +
          new Date(Date.now()).getMinutes(),
        }
      }
      await socket.emit("sendMessage",messageData);
      setCurrentMessage("");
    }
  }
  return (
    <div>
        
    </div> 
  )
}

export default ChatBox