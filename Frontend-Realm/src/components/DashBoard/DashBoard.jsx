import React from 'react'
import Rooms from "./Rooms"
import UserRooms from "./UserRooms"
import AddRoom from './AddRoom/AddRoom'
function DashBoard() {
  return (
    <div>
      <div>all rooms</div>
      <Rooms />
      <br/>
      <br />
      <div>add room</div>
      <AddRoom />
      <br /><br />
      <div>user rooms</div>
      <UserRooms />
    </div>
  )
}

export default DashBoard