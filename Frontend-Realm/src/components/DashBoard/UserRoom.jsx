import React, { useEffect } from "react";
import {useNavigate} from "react-router-dom"


function UserRoom({ roomId, roomdbId }) {

  const navigateTo = useNavigate();

  useEffect(()=>{
    console.log("room created with roomId",roomId,"roomdbId",roomdbId)
  },[])
  
  const openRoom = ()=>{
    localStorage.setItem("roomId",roomId);
    localStorage.setItem("roomdbId",roomdbId);
    navigateTo("/chat")
  }

  return <div className="w-fit" onClick={openRoom}>Room: {roomId}</div>;
}

export default UserRoom;
