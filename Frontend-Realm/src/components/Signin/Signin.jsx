import { React, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './signin.css';

function Signin() {
  const navigateTo = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });
  const onFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    try {
      //to be completed
      const res = await axios({ url: "http://localhost:3000/api/user/signin", method: "POST", data: formData });
      if (res.status === 200) {
        localStorage.setItem("token", res.data.token);
        console.log(localStorage.getItem("token"))
        navigateTo("/profile"); //to be completed
      }
    } catch {
      alert("Log In Unsuccessful !!!!!!");
    }
  };
  return (
    <div className="signin">
    <div className="signin-page">
      <div class="signin-container">
        <form class="signin-form" onSubmit={formSubmit}>
          <h2 class="signin-heading">Sign In</h2>
          <div class="form-group">
            <label for="username">User Name:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={onFormChange}
              class="form-control"
            />
          </div>
          <div class="form-group">
            <label for="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={onFormChange}
              class="form-control"
            />
          </div>
          <button type="submit" class="signin-button">Sign In</button>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Signin
