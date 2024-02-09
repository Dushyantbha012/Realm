import { React, useEffect, useState } from "react";
import axios from "axios";
function Profile() {
  const [profile, setProfile] = useState({
    name:"",username:"",graduationYear:"",email:"",SID:"",college:"",branch:""
  });
  useEffect(() => {
    const fetchingProfile = async () => {
      const res = await axios({
        url: "http://localhost:3000/api/user/profile",
        method: "GET",
        headers: { authorization: localStorage.getItem("token") },
      });
      console.log(res);
      setProfile(res.data);
    };
    fetchingProfile();
  }, []);
  return (
    <div>
      <div>Profile</div>
      <div>name : {profile.name}   username:{profile.username}   graduationYear: {profile.graduationYear}</div>
    </div>
  );
}

export default Profile;
