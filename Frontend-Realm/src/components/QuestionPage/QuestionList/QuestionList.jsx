import React, { useEffect, useState } from "react";
import axios from "axios";
import QuestionItem from "./QuestionItem";

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
    <div>
      <div>QuestionList</div>
      <input
        onChange={(e) => {
          setFilter(e.target.value);
        }}
        type="text"
        value={filter}
      />
      <div>
        {quesList.map((ques) => (
          <QuestionItem
            title={ques.title}
            author={ques.author}
            likes={ques.likes}
            dislikes={ques.dislikes}
            quesId={ques.quesId}
          />
        ))}
      </div>
    </div>
  );
}

export default QuestionList;
