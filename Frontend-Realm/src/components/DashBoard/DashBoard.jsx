import React from 'react';
import Rooms from "./Rooms";
import UserRooms from "./UserRooms";
import AddRoom from './AddRoom/AddRoom';

function Dashboard() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-around',
      padding: '20px',
    }}>
      <div style={{
        backgroundColor: '#f3f4f6',
        borderRadius: '8px',
        padding: '20px',
        width: '30%',
      }}>
        <h2 style={{
          fontSize: '1.5rem',
          marginBottom: '15px',
          color: '#333',
        }}>All Rooms</h2>
        <Rooms />
      </div>
      <div style={{
        backgroundColor: '#f3f4f6',
        borderRadius: '8px',
        padding: '20px',
        width: '30%',
      }}>
        <h2 style={{
          fontSize: '1.5rem',
          marginBottom: '15px',
          color: '#333',
        }}>Add Room</h2>
        <AddRoom />
      </div>
      <div style={{
        backgroundColor: '#f3f4f6',
        borderRadius: '8px',
        padding: '20px',
        width: '30%',
      }}>
        <h2 style={{
          fontSize: '1.5rem',
          marginBottom: '15px',
          color: '#333',
        }}>User Rooms</h2>
        <UserRooms />
      </div>
    </div>
  );
}

export default Dashboard;
