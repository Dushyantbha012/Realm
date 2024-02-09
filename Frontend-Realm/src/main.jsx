import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Layout from "./components/Layout/Layout.jsx";
import Home from "./components/Home/Home.jsx";
import Signup from "./components/Signup/Signup.jsx"
import Signin from "./components/Signin/Signin.jsx"
import Chat from "./components/Chat/Chat.jsx"
import DashBoard from "./components/DashBoard/DashBoard.jsx" 
import { RecoilRoot } from "recoil";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="signup" element={<Signup />} />
      <Route path="signin" element={<Signin />} />
      <Route path="chat" element={<Chat />} />
      <Route path="dashboard" element={<DashBoard />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  
  <RecoilRoot>
    <RouterProvider router={router} />
    </RecoilRoot>
    
);
