import {React, useState, useEffect} from 'react';
import io from "socket.io-client"

function ChatBox({roomId, username}) {
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
    <div className="w-screen h-screen flex flex-nowrap items-center align-middle justify-center">
      <div className="w-3/5 h-4/5 flex flex-wrap border-blue-700 min-w-3/5 min-h-4/5 border-4 rounded-xl">
        <div className="w-full text-center text-white text-4xl bg-blue-400">
          <p>Live Chat : {username} : {roomId}</p>
        </div>
        <div className="flex w-[100%] flex-wrap overflow-y-scroll h-[85%] bg-green-400 border">
            {chats.map((messageContent) => {
              return (
                <div className={`flex flex-row flex-wrap px-3 py-1 m-0 text-2xl}`}
                style={{color:messageContent.author===username?"green":"red"
                }}  >
                  <div className="text-2xl">
                    <div>
                      <p>{messageContent.message}</p>
                    </div>
                    <div>
                      <p>{messageContent.timeStamp}</p>
                      <p>{messageContent.author}</p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div >
        <div className="flex flex-nowrap justify-center items-center align-baseline ">
        <input
          className="border border-black h-10 rounded-2xl w-96 mx-4"
          type="text"
          value={currentMessage}
          placeholder=""
          onChange={(event) => {
            setCurrentMessage(event.target.value);
          }}
          onKeyDown={handelEnterPress}
        />
        <button className="h-10 border border-blue-900 text-blue-900 px-3 rounded-2xl" onClick={sendMessage}>
          &#9658;
        </button>
        </div>
      </div>
    </div>
  )
}

export default ChatBox