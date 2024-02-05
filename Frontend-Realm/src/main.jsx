import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {recoilRoot} from "recoil"

ReactDOM.createRoot(document.getElementById('root')).render(
  <recoilRoot>
  <App />
  </recoilRoot>
)
