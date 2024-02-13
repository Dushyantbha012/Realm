import React from 'react'
import ChatBox from "./ChatBox/ChatBox"
function Chat() {
  return (
    <div>
      <ChatBox roomId={localStorage.getItem("roomId")} username ={localStorage.getItem("username")} />
    </div>
  )
}

export default Chat