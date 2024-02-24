import React, { useEffect, useState } from "react";
import axios from "axios";
import UserRoom from "./UserRoom";
import './UserRooms.css'

function UserRooms() {
  const [rooms, setRooms] = useState([]);
  const [filter, setFilter] = useState("");
  useEffect(() => {
    console.log("request sent from filter")
    const fetchRooms = async () => {
      const res = await axios({
        url: "http://localhost:3000/api/chat/userrooms?filter=" + filter,
        method: "GET",
        headers: { authorization: localStorage.getItem("token") },
      });
      console.log("USER Rooms are", res.data.room)
      setRooms(res.data.room);
    };
    fetchRooms();
  }, [filter]);
  return (
    <div>
    <div className="userroom-container">
      <div className="userrooms-header">Click on the room to join</div>
      <div>
        <input
          className="userrooms-input"
          onChange={(e) => {
            setFilter(e.target.value);
          }}
          type="text"
          value={filter}
          placeholder="Search rooms..."
        />
      </div>
      <div>

        {rooms.map((room) => (
          <div key={room.roomId} className="userroom-card">
            <UserRoom roomId={room.roomId} />
          </div>
        ))}

      </div>
    </div>
    </div>
  );
}

export default UserRooms;
