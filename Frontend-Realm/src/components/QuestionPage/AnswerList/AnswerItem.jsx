import React from "react";
import axios from "axios";
import "./AnswerList.css";
function AnswerItem({
  content = "",
  author = "",
  likes = 0,
  dislikes = 0,
  ansdbId = "",
}) {
  const likeAnswer = async () => {
    const res = await axios({
      method: "POST",
      url: "http://localhost:3000/api/question/likeanswer",
      data: { ansId: ansdbId },
      headers: { Authorization: localStorage.getItem("token") },
    });
    if (res.status === 200) {
      window.location.reload(false);
    }
  };
  const dislikeAnswer = async () => {
    const res = await axios({
      method: "POST",
      url: "http://localhost:3000/api/question/dislikeanswer",
      data: { ansId: ansdbId },
      headers: { Authorization: localStorage.getItem("token") },
    });
    if (res.status === 200) {
      window.location.reload(false);
    }
  };
  return (
    <div className="flex  flex-row flex-wrap align-top rounded-lg bg-green-200 p-2 my-2">
      <div className="w-full">{content}</div>
      <div className="flex flex-row flex-nowrap align-middle items-center ">
        <div className="author mx-2">{author}</div>
        <div onClick={likeAnswer} className="mx-2 min-w-[100px] bg-blue-500 rounded-lg text-white text-center">
          Likes  {likes}
        </div>
        <div onClick={dislikeAnswer} className="mx-2 min-w-[100px]  bg-blue-500 rounded-lg text-white text-center">Dislikes  {dislikes}</div>
      </div>
    </div>
  );
}

export default AnswerItem;
