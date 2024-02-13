import React, { useState } from "react";
import axios from "axios";

function AddRoom() {
  const [roomId, setRoomId] = useState("");
  const addRoom = async () => {
    if(roomId!=""){
        const res = await axios({
            method: "POST",
            url: "http://localhost:3000/api/chat/addroom",
            headers : {authorization: localStorage.getItem("token") },
            data : {roomId:roomId}
          });
          alert(res.data.message)
          
    }
    else{
        alert("Give a name to the Room")
    }
  };
  return (
    <div>
      <input
        type="text"
        value={roomId}
        onChange={(e) => setRoomId(e.target.value)}
      ></input>
      <button onClick={addRoom}>Add Room</button>
    </div>
  );
}

export default AddRoom;
