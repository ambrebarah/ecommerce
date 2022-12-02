import App from "./App";
import React, { useEffect } from "react";
import { StrictMode } from "react";
import reportWebVitals from "./reportWebVitals";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Auth from "./Auth";
// import Panier from "./Panier";
import Cart from "./Cart";
import Profile from "./Profile";
import Result from "./Result";

const Routing = () => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [userId, setUserId] = useState(localStorage.getItem('userId'));
  // console.log(JSON.parse(userId))
  // console.log(JSON.parse(token))

  return (
    <Router>
      <Routes>
        <Route path="/" element={<App token={token} />} />
        <Route path="/Auth/" element={<Auth setToken={setToken} setUserId={setUserId} />} />
        <Route path="/Panier/" element={<Cart />} />
        <Route path="/Profile/" element={<Profile token={token} userId={userId} setToken={setToken} setUserId={setUserId} />} />
        <Route path="/Result/:keyword" element={<Result />} />
      </Routes>
    </Router>
  );
};

export default Routing;