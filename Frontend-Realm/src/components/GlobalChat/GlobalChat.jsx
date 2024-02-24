import React from "react";
import ChatBox from "../Chat/ChatBox/ChatBox";

function GlobalChat() {
  return (
    <div>
      <div>GlobalChat</div>
      <ChatBox roomId="Global" username={localStorage.getItem("username")}/>
    </div>
  );
}

export default GlobalChat;
