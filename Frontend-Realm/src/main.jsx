import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Layout from "./components/Layout/Layout.jsx";
import Home from "./components/Home/Home.jsx";
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
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </RouterProvider>
);
