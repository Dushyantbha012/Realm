import React from 'react'
import ChatBox from "../Chat/ChatBox/ChatBox";

function CollegeChat() {
  return (
    <div>
   
      <ChatBox roomId={localStorage.getItem("college")+"@"} username={localStorage.getItem("username")}/>
    </div>
  )
}

export default CollegeChat