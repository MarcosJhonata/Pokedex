import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter, Routes , Route} from "react-router-dom";
import Home from "./pages/Home.jsx"
import Search from "./pages/Search.jsx"


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route element={<App />}>
      <Route path="/" element={<Home />}/>
      <Route path="search" element={<Search />}/>
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
