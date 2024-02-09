import React, { useEffect } from "react";
import axios from "axios";
function Room({ roomId, roomdbId }) {
  const addRoom = async () => {
    const res = await axios({
      url: "http://localhost:3000/api/chat/joinchat",
      method: "POST",
      data: { roomdbId: roomdbId },
      headers: { authorization: localStorage.getItem("token") },
    });
    alert(res.data.message)
  };
  useEffect(()=>{
    console.log("room created with roomId",roomId,"roomdbId",roomdbId)
  },[])
  return <div className="w-fit" onClick={addRoom}>Room: {roomId}</div>;
}

export default Room;
