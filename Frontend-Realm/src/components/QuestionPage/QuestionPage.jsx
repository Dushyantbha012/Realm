import React, { useState } from "react";
import QuestionList from "./QuestionList/QuestionList";
import axios from "axios";
import './QuestionPage.css'

function QuestionPage() {
  const [ques, setQues] = useState("");

  const onClickHandler = async () => {
    if (ques.trim() !== "") {
      try {
        const res = await axios.post(
          "http://localhost:3000/api/question/addques",
          { title: ques, author: localStorage.getItem("username") },
          {
            headers: { Authorization: localStorage.getItem("token") },
          }
        );
        if (res.status === 200) window.location.reload(false);
      } catch (error) {
        console.error("Error adding question:", error);
      }
    }
  };

  return (
    <div className="question-page">
      <h2>Question Page</h2>
      <div className="question-input">
        <input
          onChange={(e) => setQues(e.target.value)}
          type="text"
          value={ques}
          placeholder="Enter your question here..."
        />
        <button onClick={onClickHandler}>Add Question</button>
      </div>
      <QuestionList />
    </div>
  );
}

export default QuestionPage;
