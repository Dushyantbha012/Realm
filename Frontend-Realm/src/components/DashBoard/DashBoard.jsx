import React from 'react'
import Rooms from "./Rooms"
import UserRooms from "./UserRooms"
function DashBoard() {
  return (
    <div>
      <div>all rooms</div>
      <Rooms />
      <div>user rooms</div>
      <UserRooms />
    </div>
  )
}

export default DashBoard