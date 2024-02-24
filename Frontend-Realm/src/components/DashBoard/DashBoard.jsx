import React from 'react';
import Rooms from "./Rooms";
import UserRooms from "./UserRooms";
import AddRoom from './AddRoom/AddRoom';
import './dashboard.css'; 

function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="section">
        <h2 className="section-heading">All Rooms</h2>
      </div>
        <Rooms />
      <div className="section">
        <h2 className="section-heading">Add Room</h2>
        <AddRoom />
      </div>
      <div className="section">
        <h2 className="section-heading">User Rooms</h2>
      </div>
        <UserRooms />
    </div>
  );
}

export default Dashboard;
