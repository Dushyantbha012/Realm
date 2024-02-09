import React, { useEffect, useState } from "react";
import axios from "axios";
import UserRoom from "./UserRoom";

function UserRooms() {
  const [rooms, setRooms] = useState([]);
  const [filter, setFilter] = useState("");
  useEffect(() => {
    const fetchRooms = async () => {
      const res = await axios({
        url: "http://localhost:3000/api/chat/userrooms",
        method: "GET",
        headers: { authorization: localStorage.getItem("token") },
      });
      console.log("USER Rooms are",res.data.room)
      setRooms(res.data.room);
    };
    fetchRooms();
  }, [filter]);
  return (
    <div>
      <div>Rooms</div>
      <div>
        <input
          onChange={(e) => {
            setFilter(e.target.value);
          }}
          type="text"
          value={filter}
        />
      </div>
      <div>
        <div>
          {rooms.map((room) => (
            <UserRoom roomId={room.roomId} roomdbId={room.roomdbId} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserRooms;
