import { React, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Signin() {
  const navigateTo = useNavigate();
  const [formData, setFormData] = useState({
    username:"",
    password:""
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
        navigateTo("/dashboard"); //to be completed
      }
    } catch {
      alert("Log In Unsuccessful !!!!!!");
    }
  };
  return (
    <div>
      <form onSubmit={formSubmit}>
        <label>Sign In</label>
        <label>
          User Name:{" "}
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={onFormChange}
          />
        </label>
        <label>
          password:{" "}
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={onFormChange}
          />
        </label>
        <button type="submit">SIGN IN</button>
      </form>
    </div>
  );
}

export default Signin