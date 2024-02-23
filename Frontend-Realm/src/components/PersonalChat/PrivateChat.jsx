import React, { useEffect } from 'react'
import {privateRoomIdState} from "../../atoms/atoms"
import { useRecoilValue } from 'recoil'
import ChatBox from "./ChatBox"
function PrivateChat() {
  const privateRoomId = useRecoilValue(privateRoomIdState);
  return (
    <div>
      <ChatBox roomId={privateRoomId} username ={localStorage.getItem("username")} />
    </div>
  )
}

export default PrivateChat