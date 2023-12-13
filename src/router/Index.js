import React, { useState } from "react";
import Home from "../container/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../components/login";
import Registration from "../components/registration";

export default function Index() {
  const [isLogin, setIsLogin] = useState(true);
  console.log("isLogin", isLogin);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={isLogin ? <Home /> : <Registration />} />

        {/* <Route
          path="/login"
          element={<Login isLogin={isLogin} setIsLogin={setIsLogin} />}
        /> */}
      </Routes>
    </BrowserRouter>
  );
}
