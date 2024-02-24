import React, { useEffect, useState } from "react";
import axios from "axios";
import AnswerItem from "./AnswerItem";
import './AnswerList.css'

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
    if (inputAnswer !== "") {
      const res = await axios({
        method: "POST",
        url: "http://localhost:3000/api/question/addanswer",
        data: {
          content: inputAnswer,
          author: localStorage.getItem("username"),
          quesId: localStorage.getItem("quesId"),
        },
        headers: { Authorization: localStorage.getItem("token") },
      });
      if (res.status === 200) {
        window.location.reload(false);
      }
    }
  };

  const likeQues = async () => {
    const res = await axios({
      method: "POST",
      url: "http://localhost:3000/api/question/likeques",
      data: { quesId: localStorage.getItem("quesId") },
      headers: { Authorization: localStorage.getItem("token") },
    });
    if (res.status === 200) {
      window.location.reload(false);
    }
  };

  const dislikeQues = async () => {
    const res = await axios({
      method: "POST",
      url: "http://localhost:3000/api/question/dislikeques",
      data: { quesId: localStorage.getItem("quesId") },
      headers: { Authorization: localStorage.getItem("token") },
    });
    if (res.status === 200) {
      window.location.reload(false);
    }
  };

  return (
    <div className="answer-page">
    <div className="ans-container">
      <div className="ans-header">
        <h2 className="title">Question : {data.title}</h2>
        <p className="author">Author: {data.author}</p>
        <div className="like-dislike">
          <button onClick={likeQues}>Like ({data.likes})</button>
          <button onClick={dislikeQues}>Dislike ({data.dislikes})</button>
        </div>
      </div>
      <div className="answer-list">
        {data.answers.map((answer) => (
          <div>
          <AnswerItem
            key={answer.ansdbId} 
            content={answer.content}
            author={answer.author}
            likes={answer.likes}
            dislikes={answer.dislikes}
            ansdbId={answer.ansdbId}
          />
          </div>
        ))}
      </div>
      <div className="submit-answer">
        <input
          onChange={(e) => setInputAnswer(e.target.value)}
          type="text"
          value={inputAnswer}
          placeholder="Answer..."
        />
        <button onClick={submitAnswer}>Submit Answer</button>
      </div>
    </div>
    </div>
  );
}

export default AnswerList;
