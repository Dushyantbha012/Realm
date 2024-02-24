import React, { useEffect, useState } from "react";
import UserButton from "./UserButton";
import axios from "axios"
import './UserSearch.css'
function UserSearch() {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios({
        url: "http://localhost:3000/api/user/allusers?filter=" + filter,
        method: "GET",
        headers: { authorization: localStorage.getItem("token") },
      });
      console.log("recieved :", res.data.users);
      setUsers(res.data.users);
    };
    fetchUsers();
  }, [filter]);

  return (
    <div className="users-container">
      <div className="users-header">Users</div>
        <input
        className="users-input"
          onChange={(e) => {
            setFilter(e.target.value);
          }}
          type="text"
          value={filter}
          placeholder="Search Users..."
        />
      <div>
        
          {users.map((user) => (
            <div className="user-card">
            <UserButton
              name={user.name}
              college={user.college}
              branch={user.branch}
              graduationYear={user.graduationYear}
              SID={user.SID}
              email={user.email}
            />
            </div>
          ))}
  
      </div>
    </div>
  );
}

export default UserSearch;
