import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue, useRecoilState } from "recoil";
import axios from "axios";
import {
  otherBranchState,
  otherCollegeState,
  otherEmailState,
  otherGraduationYearState,
  otherNameState,
  otherSIDState,
  privateRoomIdState,
} from "../..//atoms/atoms";
import './UserProfile.css';

function UserProfile() {
  const navigateTo = useNavigate();
  const otherBranch = useRecoilValue(otherBranchState);
  const otherCollege = useRecoilValue(otherCollegeState);
  const otherEmail = useRecoilValue(otherEmailState);
  const otherGraduationYear = useRecoilValue(otherGraduationYearState);
  const otherName = useRecoilValue(otherNameState);
  const otherSID = useRecoilValue(otherSIDState);
  const [privateRoomId, setPrivateRoomId] = useRecoilState(privateRoomIdState);

  const onClickHandler = async () => {
    const res = await axios({
      method: "POST",
      url: "http://localhost:3000/api/chat/createprivate",
      headers: { authorization: localStorage.getItem("token") },
      data: { senderMail: localStorage.getItem("email"), recMail: otherEmail },
    });
    console.log("room id set is ", res.data.id);
    setPrivateRoomId(res.data.id);
    navigateTo("/privatechat");
  };

  return (
    <div className="userprofile-component">
    <div className="user-profile-container">
      <div className="user-profile-header">User Profile</div>
      <div className="user-profile-details">Name: <span>{otherName}</span></div>
      <div className="user-profile-details">College: <span>{otherCollege}</span></div>
      <div className="user-profile-details">Branch: <span>{otherBranch}</span></div>
      <div className="user-profile-details">Graduation Year: <span>{otherGraduationYear}</span></div>
      <div className="user-profile-details">SID: <span>{otherSID}</span></div>
      <div className="user-profile-details">E-mail: <span>{otherEmail}</span></div>
      <button className="user-profile-button" onClick={onClickHandler}>Chat</button>
    </div>
    </div>
  );
}

export default UserProfile;
