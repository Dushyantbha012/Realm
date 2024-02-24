import React, { useEffect, useState } from "react";
import axios from "axios";
import AnswerItem from "./AnswerItem";
function AnswerList() {
  const [data, setData] = useState({
    title: "",
    author: "",
    likes: 0,
    dislikes: 0,
    answers: [],
  });
  const [inputAnswer, setInputAnswer] = useState("");
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

  const submitAnswer = async () => {
    if(inputAnswer!=""){
      const res = await axios({
        method: "POST",
        url: "http://localhost:3000/api/question/addanswer",
        data: {content:inputAnswer, author:localStorage.getItem("username"),quesId:localStorage.getItem("quesId")},
        headers: { Authorization: localStorage.getItem("token") },
      });
      if(res.status===200){
        window.location.reload(false);
      }
    }
  };
  return (
    <div>
      <div>
        <div>{data.title}</div>
        <div>{data.author}</div>
        <div>{data.likes}</div>
        <div>{data.dislikes}</div>
      </div>
      <div>
        {data.answers.map((answer) => (
          <AnswerItem
            content={answer.content}
            author={answer.author}
            likes={answer.likes}
            dislikes={answer.dislikes}
            ansdbId={answer.ansdbId}
          />
        ))}
      </div>
      <div>
        <input
          onChange={(e) => {
            setInputAnswer(e.target.value);
          }}
          type="text"
          value={inputAnswer}
          placeholder="Answer......"
        />{" "}
        <div onClick={submitAnswer}>Submit Answer</div>
      </div>
    </div>
  );
}

export default AnswerList;
