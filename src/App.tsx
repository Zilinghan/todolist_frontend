import axios from 'axios';
import { BrowserRouter, Routes, Route, Link, Outlet, Navigate, useNavigate, useParams } from "react-router-dom";
import React, { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navigator from './pages/Navigator';
import Home from "./pages/Home";
import Message from './pages/Message';
import Profile from './pages/Profile';
import Daily from './pages/home/Daily';
import Monthly from './pages/home/Monthly';

/* 
3 main pages:
  1) home: show tasks
    a) show tasks in this month
    b) show tasks in this week
    c) show tasks today
  2) message: show messages
  3) profile: display user's account
*/
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigator />}>
            <Route path='/' element={<Home />}>
              <Route path='monthly' element={<Monthly />}/>
              <Route path='daily' element={<Daily />}/>
            </Route>
            <Route path='message' element={<Message />}/>
            <Route path='profile' element={<Profile />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
