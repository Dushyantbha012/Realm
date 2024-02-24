import React, { useEffect, useState } from "react";
import axios from "axios";
import AnswerItem from "./AnswerItem"
function AnswerList() {
  const [data, setData] = useState({
    title: "",
    author: "",
    likes: 0,
    dislikes: 0,
    answers: [],
  });
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios({
        method: "POST",
        url: "http://localhost:3000/api/question/question",
        data: { quesId: localStorage.getItem("quesId") },
        headers: { Authorization: localStorage.getItem("token") },
      });
      setData({
        title: res.data.title,
        author: res.data.author,
        likes: res.data.likes,
        dislikes: res.data.dislikes,
        answers: res.data.answers,
      });
    };
    fetchData();
  }, []);
  return (
    <div>
      <div>
        <div>{data.title}</div>
        <div>{data.author}</div>
        <div>{data.likes}</div>
        <div>{data.dislikes}</div>
      </div>
      <div>
        {data.answers.map(answer=>(<AnswerItem content={answer.content} author={answer.author} likes={answer.likes} dislikes={answer.dislikes} ansdbId={answer.ansdbId} />))}
      </div>
    </div>
  );
}

export default AnswerList;
