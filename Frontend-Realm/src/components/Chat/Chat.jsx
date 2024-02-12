import React from 'react'
import ChatBox from "./ChatBox/ChatBox"
function Chat() {
  return (
    <div>
      <ChatBox roomId="room 1" username ={localStorage.getItem("username")} />
    </div>
  )
}

export default Chat