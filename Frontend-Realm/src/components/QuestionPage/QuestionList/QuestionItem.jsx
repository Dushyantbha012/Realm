import React from 'react'
import {useNavigate} from "react-router-dom"
function QuestionItem({author, dislikes, likes, title, quesId}) {
  const navigateTo = useNavigate();
  const onClickHandeler = ()=>{
    localStorage.setItem("quesId",quesId);
    navigateTo("/answer")
  }
  
  return (
    <div><div onClick={onClickHandeler}>{title}</div></div>
  )
}

export default QuestionItem
