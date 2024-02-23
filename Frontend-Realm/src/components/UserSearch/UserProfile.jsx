import React from "react";

import {useRecoilValue} from "recoil"

import {otherBranchState,otherCollegeState,otherEmailState,otherGraduationYearState,otherNameState,otherSIDState} from "../..//atoms/atoms"



function UserProfile({
}) {
  const otherBranch = useRecoilValue(otherBranchState);
  const otherCollege = useRecoilValue(otherCollegeState);
  const otherEmail = useRecoilValue(otherEmailState);
  const otherGraduationYear = useRecoilValue(otherGraduationYearState);
  const otherName = useRecoilValue(otherNameState);
  const otherSID = useRecoilValue(otherSIDState)
  return (
    <div>
      <div>UserProfile</div>
      <div>Name: {otherName}</div>
      <div>College : {otherCollege}</div>
      <div>Branch : {otherBranch}</div>
      <div>Graduation Year : {otherGraduationYear}</div>
      <div>SID : {otherSID}</div>
      <div>email : {otherEmail}</div>
    </div>
  );
}

export default UserProfile;
