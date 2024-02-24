import React, { useEffect, useState } from "react";
import axios from "axios";
import Room from "./Room";
import "./rooms.css"; 

function Rooms() {
  const [rooms, setRooms] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const fetchRooms = async () => {
      const res = await axios({
        url: "http://localhost:3000/api/chat/allrooms?filter=" + filter,
        method: "GET",
        headers: { authorization: localStorage.getItem("token") },
      });
      console.log("received is ", res.data.room);
      setRooms(res.data.room);
    };
    fetchRooms();
  }, [filter]);

  return (
    <div className="rooms-container">
      <div className="rooms-header">Rooms</div>
      <input
        className="rooms-input"
        onChange={(e) => {
          setFilter(e.target.value);
        }}
        type="text"
        value={filter}
        placeholder="Search rooms..."
      />
      <div className="cont1">
        {rooms.map((room) => (
          <div key={room.roomId} className="room-card">
            
            <Room roomId={room.roomId} roomdbId={room.roomdbId} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Rooms;
