import React from "react";
import "./App.css";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import { Route, Routes } from "react-router";

function App() {
  return (
    <Routes>
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
    </Routes>
  );
}

export default App;
