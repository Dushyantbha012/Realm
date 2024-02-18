import { React, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import './signup.css';

function Signup() {
  const navigateTo = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    branch: "",
    college: "",
    SID: "",
    email: "",

    graduationYear: '',
    password: ""

  });
  const onFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.name === "graduationYear"
          ? parseInt(e.target.value, 10)
          : e.target.value,
    });
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    try {
      //to be completed
      const res = await axios({

        url: "http://localhost:3000/api/user/signup", method: "POST", data: formData, headers: {
          'Content-Type': 'application/json',

        },
      });
      if (res.status === 200) {
        localStorage.setItem("token", res.data.token);
        navigateTo("/profile"); //to be completed
      }
    } catch {
      alert("Registration Unsuccessful !!!!!!");
    }
  };
  return (

    <div className="signup-page"> 
    <div className="signup-container">
      <form className="signup-form" onSubmit={formSubmit}>
        <h2 className="signup-heading">Register</h2>
        <div className="form-group">
          <label htmlFor="name">Name:</label>

          <input
            className="col-span-2 rounded-md border border-black w-[300px] "
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={onFormChange}
            className="form-control"
          />

        </div>
        <div className="form-group">
          <label htmlFor="username">User Name:</label>

          <input
            className="col-span-2 rounded-md border border-black w-[300px] "
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={onFormChange}
            className="form-control"
          />

        </div>
        <div className="form-group">
          <label htmlFor="email">E Mail:</label>

          <input
            className="col-span-2 rounded-md border border-black w-[300px] "
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={onFormChange}
            className="form-control"
          />

        </div>
        <div className="form-group">
          <label htmlFor="college">College:</label>

          <input
            className="col-span-2 rounded-md border border-black w-[300px] "
            type="text"
            id="college"
            name="college"
            value={formData.college}
            onChange={onFormChange}
            className="form-control"
          />

        </div>
        <div className="form-group">
          <label htmlFor="branch">Branch:</label>

          <input
            className="col-span-2 rounded-md border border-black w-[300px] "
            type="text"
            id="branch"
            name="branch"
            value={formData.branch}
            onChange={onFormChange}
            className="form-control"
          />

        </div>
        <div className="form-group">
          <label htmlFor="graduationYear">Graduation Year:</label>

          <input
            className="col-span-2 rounded-md border border-black w-[300px] "
            type="number"
            id="graduationYear"
            name="graduationYear"
            value={formData.graduationYear}
            onChange={onFormChange}
            className="form-control"
          />

        </div>
        <div className="form-group">
          <label htmlFor="SID">SID:</label>

          <input
            className="col-span-2 rounded-md border border-black w-[300px] "
            type="text"
            id="SID"
            name="SID"
            value={formData.SID}
            onChange={onFormChange}
            className="form-control"
          />

        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>

          <input
            className="col-span-2 rounded-md border border-black w-[300px] "
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={onFormChange}
            className="form-control"
          />

        </div>
        <button type="submit" className="signup-button">Register</button>

      </form>
    </div>
    </div>

  );
}

export default Signup;
