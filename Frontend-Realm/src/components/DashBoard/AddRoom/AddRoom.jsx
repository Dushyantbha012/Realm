import React, { useState } from "react";
import axios from "axios";

function AddRoom() {
  const [roomId, setRoomId] = useState("");
  const addRoom = async () => {
    if (roomId != "") {
      const res = await axios({
        method: "POST",
        url: "http://localhost:3000/api/chat/addroom",
        headers: { authorization: localStorage.getItem("token") },
        data: { roomId: roomId }
      });
      alert(res.data.message)

    }
    else {
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
      <button onClick={addRoom} style={addRoomBtnStyle}>Add Room</button>
    </div>
  );
}

const addRoomBtnStyle = {
  padding: '10px 20px',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default AddRoom;
