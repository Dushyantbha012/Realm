import {React, useState, useEffect} from 'react';
import io from "socket.io-client"
import './chat.css'

function ChatBox({roomId, username}) {
  console.log("room id recieved is ", roomId)
  const socket = io.connect("http://localhost:5000")
  const [currentMessage, setCurrentMessage] = useState("");
  const [chats, setChats]=useState([]);
  useEffect(()=>{
    if(username!==""&&roomId!==""){
      socket.emit("joinRoom",{roomId : roomId});
      socket.on("initialChats",(initialChats)=>{
        setChats(initialChats);
      })
    }
  },[roomId, username]);
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
        roomId:roomId,
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
    <div className="chatbox">
      <div className="chat-container">
        <div className="header">
          <p>Live Chat : {username} : {roomId}</p>
        </div>
        <div className="chat-messages">
          {chats.map((messageContent, index) => (
            <div className="message" key={index}>
              <span className="author">{messageContent.author}</span>
              <span className="content">{messageContent.message}</span>
              <span className="timestamp">{messageContent.timeStamp}</span>
            </div>
          ))}
        </div>
        <div className="footer">
          <input
            className="input-field"
            type="text"
            value={currentMessage}
            placeholder="Type your message..."
            onChange={(event) => setCurrentMessage(event.target.value)}
            onKeyDown={handelEnterPress}
          />
          <button className="send-button" onClick={sendMessage}>
            Send
          </button>
        </div>
      </div>
    </div>
  )
  
}

export default ChatBox
