import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
      const res = await axios.post("http://localhost:3000/api/user/signin", formData);
      if (res.status === 200) {
        localStorage.setItem("token", res.data.token);
        navigateTo("/profile");
      }
    } catch (error) {
      console.error("Login unsuccessful:", error);
      alert("Login Unsuccessful!");
    }
  };

  return (
    <div style={{ backgroundImage: "url('https://media.sproutsocial.com/uploads/2023/09/12-ways-to-use-social-media-for-education-V2-FINAL.svg')", 
                 backgroundSize: "cover", backgroundPosition: "center", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div style={{ maxWidth: "400px", margin: "100px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "5px", backgroundColor: "rgba(255, 255, 255, 0.8)" }}>
        <form onSubmit={formSubmit}>
          <h2 style={{ marginBottom: "20px", textAlign: "center" }}>Sign In</h2>
          <div style={{ marginBottom: "20px" }}>
            <label htmlFor="username">User Name:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={onFormChange}
              style={{ width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }}
            />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={onFormChange}
              style={{ width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "5px" }}
            />
          </div>
          <button type="submit" style={{ width: "100%", padding: "10px", border: "none", borderRadius: "5px", backgroundColor: "#0077b5", color: "#fff", fontSize: "16px", cursor: "pointer" }}>Sign In</button>
        </form>
      </div>
    </div>
  );
}

export default Signin;
