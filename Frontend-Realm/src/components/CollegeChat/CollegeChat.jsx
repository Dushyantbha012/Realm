import React from 'react'
import ChatBox from "../Chat/ChatBox/ChatBox";

function CollegeChat() {
  return (
    <div>
      <div>College Chat</div>
      <ChatBox roomId={localStorage.getItem("college")+"@"} username={localStorage.getItem("username")}/>
    </div>
  )
}

export default CollegeChat