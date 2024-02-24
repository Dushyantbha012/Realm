import React from "react";
import axios from "axios"
import './AnswerList.css'
function AnswerItem({
  content = "",
  author = "",
  likes = 0,
  dislikes = 0,
  ansdbId = "",
}){
  const likeAnswer = async () => {
    const res = await axios({
      method: "POST",
      url: "http://localhost:3000/api/question/likeanswer",
      data: {ansId:ansdbId},
      headers: { Authorization: localStorage.getItem("token") },
    });
    if(res.status===200){
      window.location.reload(false);
    }
  };
  const dislikeAnswer = async () => {
    const res = await axios({
      method: "POST",
      url: "http://localhost:3000/api/question/dislikeanswer",
      data: {ansId:ansdbId},
      headers: { Authorization: localStorage.getItem("token") },
    });
    if(res.status===200){
      window.location.reload(false);
    }
  };
  return (
    <div>
      <div>{content}</div>
      <div className="author">Answered By : {author}</div>
    </div>
  );
}

export default AnswerItem;
