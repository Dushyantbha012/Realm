import { React, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import signupbg from "../../../public/signupbg.png";
import formbg from "../../../public/formbg.png";
import formtextbg from "../../../public/formtextbg.png";
function Signup() {
  const navigateTo = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    branch: "",
    college: "",
    SID: "",
    email: "",
    graduationYear: "",
    password: "",
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
        url: "http://localhost:3000/api/user/signup",
        method: "POST",
        data: formData,
        headers: {
          "Content-Type": "application/json",
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
    <div
      className="w-screen flex flex-row flex-nowrap items-center justify-center align middle pt-[50px] pb-[50px]"
      style={{
        backgroundImage: `url(${signupbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <form
        onSubmit={formSubmit}
        className="grid grid-cols-4 rounded-xl w-[50%] bg-white shadow-xl text-yellow-500"
        
      >
        <label className="col-span-4 text-center text-3xl my-2">Register</label>
        <label className="col-span-4 grid grid-cols-4 my-2">
          <div
            className="col-span-2 text-xl text-center px-3"
            
          >
            Name:{" "}
          </div>
          <input
            className="col-span-2 rounded-md border border-black w-[300px] "
            type="text"
            name="name"
            value={formData.name}
            onChange={onFormChange}
          />
        </label>
        <label className="col-span-4 grid grid-cols-4 my-2">
          <div className="col-span-2 text-xl text-center px-3">Username: </div>
          <input
            className="col-span-2 rounded-md border border-black w-[300px] "
            type="text"
            name="username"
            value={formData.username}
            onChange={onFormChange}
          />
        </label>
        <label className="col-span-4 grid grid-cols-4 my-2">
          <div className="col-span-2 text-xl text-center px-3">Email: </div>
          <input
            className="col-span-2 rounded-md border border-black w-[300px] "
            type="email"
            name="email"
            value={formData.email}
            onChange={onFormChange}
          />
        </label>
        <label className="col-span-4 grid grid-cols-4 my-2">
          <div className="col-span-2 text-xl text-center px-3">College: </div>
          <input
            className="col-span-2 rounded-md border border-black w-[300px] "
            type="text"
            name="college"
            value={formData.college}
            onChange={onFormChange}
          />
        </label>
        <label className="col-span-4 grid grid-cols-4 my-2">
          <div className="col-span-2 text-xl text-center px-3">Branch: </div>
          <input
            className="col-span-2 rounded-md border border-black w-[300px] "
            type="text"
            name="branch"
            value={formData.branch}
            onChange={onFormChange}
          />
        </label>
        <label className="col-span-4 grid grid-cols-4 my-2">
          <div className="col-span-2 text-xl text-center px-3">
            Graduation Year:{" "}
          </div>
          <input
            className="col-span-2 rounded-md border border-black w-[300px] "
            type="number"
            name="graduationYear"
            value={formData.graduationYear}
            onChange={onFormChange}
          />
        </label>
        <label className="col-span-4 grid grid-cols-4 my-2">
          <div className="col-span-2 text-xl text-center px-3">SID: </div>
          <input
            className="col-span-2 rounded-md border border-black w-[300px] "
            type="text"
            name="SID"
            value={formData.SID}
            onChange={onFormChange}
          />
        </label>
        <label className="col-span-4 grid grid-cols-4 my-2">
          <div className="col-span-2 text-xl text-center px-3">Password: </div>
          <input
            className="col-span-2 rounded-md border border-black w-[300px] "
            type="password"
            name="password"
            value={formData.password}
            onChange={onFormChange}
          />
        </label>
        <div className="flex flex-row flex-nowrap justify-center align-middle items-center col-span-4 my-2">
          <button
            type="submit"
            className="px-2 py-1 border text-lg border-black rounded-md"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
