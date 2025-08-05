import React from "react";
import "./App.css";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import { Route, Routes } from "react-router";
import SplashScreen from "./pages/SplashScreenPage";
import Onboarding1Page from "./pages/Onboarding1Page";
import Onboarding2Page from "./pages/Onboarding2Page";


function App() {
  return (
    <Routes>
      <Route path="register" element={<Register />} />
      <Route path="login" element={<Login />} />
      <Route path="/" element={<SplashScreen />} />
      <Route path="/onboarding1" element={<Onboarding1Page />} />
      <Route path="/onboarding2" element={<Onboarding2Page />} />
    </Routes>
  );
}

export default App;
