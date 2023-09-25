
// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect, Navigate, Routes, BrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import Profile from './components/Profile';

function App() {
  // const [token, setToken] = useState(null);

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login/>}
      // Login setToken={setToken} 
      />
      <Route path="/profile" element={<Profile/>}
      // Profile setToken={setToken} 
      />
      <Route path="/profile/:id" element={<Profile/>} />
      <Route path="/login/:id" element={<Login />} />
    </Routes>
    </BrowserRouter>
  );
}
export default App;
