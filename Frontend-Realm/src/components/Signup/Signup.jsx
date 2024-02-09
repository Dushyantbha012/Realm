import { React, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigateTo = useNavigate();
  const [formData, setFormData] = useState({
    name:"",
    username:"",
    branch:"",
    college:"",
    SID:"",
    email:"",
    graduationYear:'',
    password:""
  });
  const onFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.name === "graduationYear" ? parseInt(e.target.value, 10) : e.target.value })
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    try {
      //to be completed
      const res = await axios({ url: "http://localhost:3000/api/user/signup", method: "POST", data: formData , headers: {
        'Content-Type': 'application/json',
      },});
      if (res.status === 200) {
        localStorage.setItem("token", res.data.token);
        navigateTo("/dashboard"); //to be completed
      }
    } catch {
      alert("Registration Unsuccessful !!!!!!");
    }
  };
  return (
    <div>
      <form onSubmit={formSubmit}>
        <label>Register</label>
        <label>
          Name:{" "}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={onFormChange}
          />
        </label>
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
          E Mail:{" "}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={onFormChange}
          />
        </label>
        <label>
          College:{" "}
          <input
            type="text"
            name="college"
            value={formData.college}
            onChange={onFormChange}
          />
        </label>
        <label>
          Branch:{" "}
          <input
            type="text"
            name="branch"
            value={formData.branch}
            onChange={onFormChange}
          />
        </label>
        <label>
          Graduation Year:
          <input
            type="number"
            name="graduationYear"
            value={formData.graduationYear}
            onChange={onFormChange}
          />
        </label>
        <label>
          SID:{" "}
          <input
            type="text"
            name="SID"
            value={formData.SID}
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Signup;
