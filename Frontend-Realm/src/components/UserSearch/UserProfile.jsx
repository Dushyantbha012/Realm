import React, { useEffect } from "react";
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

function UserProfile({}) {
  const navigateTo = useNavigate();
  const otherBranch = useRecoilValue(otherBranchState);
  const otherCollege = useRecoilValue(otherCollegeState);
  const otherEmail = useRecoilValue(otherEmailState);
  const otherGraduationYear = useRecoilValue(otherGraduationYearState);
  const otherName = useRecoilValue(otherNameState);
  const otherSID = useRecoilValue(otherSIDState);
  const [privateRoomId, setPrivateRoomId] =
      useRecoilState(privateRoomIdState);

    
    const onClickHandeler=async()=>{
      const res = await axios({
        method: "POST",
        url: "http://localhost:3000/api/chat/createprivate",
        headers: { authorization: localStorage.getItem("token") },
        data:{senderMail:localStorage.getItem("email"),recMail:otherEmail}
      });
      console.log("room id set is ", res.data.id)
      setPrivateRoomId(res.data.id)
      navigateTo("/privatechat")
    }

  
  return (
    <div>
      <div>UserProfile</div>
      <div>Name: {otherName}</div>
      <div>College : {otherCollege}</div>
      <div>Branch : {otherBranch}</div>
      <div>Graduation Year : {otherGraduationYear}</div>
      <div>SID : {otherSID}</div>
      <div>E-mail : {otherEmail}</div>
      <button onClick={onClickHandeler}>Chat</button>
    </div>
  );
}

export default UserProfile;
