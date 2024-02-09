import React, { useEffect } from "react";
import axios from "axios";
function UserRoom({ roomId, roomdbId }) {
  useEffect(()=>{
    console.log("room created with roomId",roomId,"roomdbId",roomdbId)
  },[])
  return <div className="w-fit" >Room: {roomId}</div>;
}

export default UserRoom;
