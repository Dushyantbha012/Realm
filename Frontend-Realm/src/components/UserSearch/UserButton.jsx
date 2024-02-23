import {React, useEffect, useState} from 'react'
import {useNavigate} from "react-router-dom"
import {useRecoilState} from "recoil"

import {otherBranchState,otherCollegeState,otherEmailState,otherGraduationYearState,otherNameState,otherSIDState} from "../..//atoms/atoms"

function UserButton({
    name = "Error",
    college = "Error",
    branch = "Error",
    graduationYear = "Error",
    SID = "Error",
    email = "Error",
  }) {
    const [otherName, setOtherName] = useRecoilState(otherNameState);
    const [otherCollege, setOtherCollege] = useRecoilState(otherCollegeState);
    const [otherSID, setOtherSID] = useRecoilState(otherSIDState);
    const [otherBranch, setOtherBranch] = useRecoilState(otherBranchState);
    const [otherEmail, setOtherEmail] = useRecoilState(otherEmailState);
    const [otherGraduationYear, setOtherGraduationYear] = useRecoilState(otherGraduationYearState)

    const navigateTo = useNavigate();

    const onClickHandeler = ()=>{
      console.log("recieved name is",name," branch is", branch, " college is ", college, " sid is ", SID, " grad year is ", graduationYear, " email is ", email)
        setOtherBranch(branch);
        setOtherCollege(college);
        setOtherEmail(email);
        setOtherSID(SID);
        setOtherGraduationYear(graduationYear);
        setOtherName(name);
        navigateTo("/usersprofile")
    }
  return (
    <div onClick={onClickHandeler}>User : {name}</div>
  )
}

export default UserButton