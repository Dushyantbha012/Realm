import React, { useState } from "react";
import QuestionList from "./QuestionList/QuestionList";
import axios from "axios";

function QuestionPage() {
  const [ques, setQues] = useState("");
  const onClickHandeler = async () => {
    if (ques != "") {
      const res = await axios({
        method: "POST",
        url: "http://localhost:3000/api/question/addques",
        data:{title:ques,author:localStorage.getItem("username")},
        headers: { Authorization: localStorage.getItem("token") },
      });
      if(res.status===200) window.location.reload(false);
    }
  };
  return (
    <div>
      <div>QuestionPage</div>
      <div><input onChange={(e) => {
          setQues(e.target.value);
        }}
        type="text"
        value={ques}/><button onClick={onClickHandeler}>Add Question</button></div>
      <QuestionList />
    </div>
  );
}

export default QuestionPage;
