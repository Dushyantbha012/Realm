import React, { useEffect, useState } from "react";
import axios from "axios";
import "./profile.css";

function Profile() {
  const [profile, setProfile] = useState({
    name: "",
    username: "",
    graduationYear: "",
    email: "",
    SID: "",
    college: "",
    branch: ""
  });

  useEffect(() => {
    const fetchingProfile = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/user/profile", {
          headers: { Authorization: localStorage.getItem("token") }
        });
        setProfile(res.data);
        localStorage.setItem("username", res.data.username);
        localStorage.setItem("college",res.data.college)
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };
    fetchingProfile();
  }, []);
  const profilePictureUrl = "https://i0.wp.com/vssmn.org/wp-content/uploads/2018/12/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png?w=860&ssl=1"
  return (
   <div className="profile-page border">
     <div className="profile-container">
      <div className="profile-sidebar">
        <div className="photo">
          <img src={profilePictureUrl} alt="Profile" />
        </div>
        
      </div>
      <div className="profile-content">
        <div className="profile-header">
          <h1>Name : {profile.name} </h1>
          
        </div>
        <div className="profile-text">
          <h2>Username : {profile.username}</h2>
         
        </div>
        <div className="profile-text">
          <h2>Graduation Year : {profile.graduationYear}</h2>
        
        </div>
        <div className="profile-text">
          <h2>Email : {profile.email}</h2>
          
        </div>
        <div className="profile-text">
          <h2>SID : {profile.SID}</h2>
          
        </div>
        <div className="profile-text">
          <h2>College : {profile.college}</h2>
          
        </div>
        <div className="profile-text">
          <h2>Branch : {profile.branch}</h2>
         
        </div>
      </div>
    </div>
   </div>
  );
}

export default Profile;
