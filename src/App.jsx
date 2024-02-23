import React, { useRef, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ReactDOM from "react-dom/client";
import gsap from 'gsap';
import './App.css';
import 'boxicons';
// 
import Home from './pages/Home'
import RHub from './pages/rHub'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/r-hub" element={<RHub />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
