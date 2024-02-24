import React, { useEffect, useState } from "react";
import axios from "axios";
import QuestionItem from "./QuestionItem";
import './QuestionList.css'

function QuestionList() {
  const [filter, setFilter] = useState("");
  const [quesList, setQuesList] = useState([]);

  useEffect(() => {
    const fetchList = async () => {
      const res = await axios({
        method: "GET",
        url: "http://localhost:3000/api/question/allques?filter=" + filter,
        headers: { Authorization: localStorage.getItem("token") },
      });
      setQuesList(res.data.allQues);
    };
    fetchList();
  }, [filter]);

  return (
    <div className="qlist-container">
      <div className="qlist-header">QuestionList</div>
      <input
        className="qlist-input"
        onChange={(e) => {
          setFilter(e.target.value);
        }}
        type="text"
        value={filter}
        placeholder="Search question..."
      />
      <div className="qlistcont1">
        {quesList.map((ques) => (
          <div className="qlist-card">
          <QuestionItem
            title={ques.title}
            author={ques.author}
            likes={ques.likes}
            dislikes={ques.dislikes}
            quesId={ques.quesId}
          />
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuestionList;
