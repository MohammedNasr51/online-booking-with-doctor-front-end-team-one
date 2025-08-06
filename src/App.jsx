import React from "react";
import "./App.css";
import Register from "./components/auth/Register";
import SignInWithEmail from "./components/auth/SignInWithEmail";
import { Route, Routes } from "react-router";
import SplashScreen from "./pages/SplashScreenPage";
import Onboarding1Page from "./pages/Onboarding1Page";
import Onboarding2Page from "./pages/Onboarding2Page";
import SignInWithSocial from "./components/auth/SignInWithSocial";
import SignInWithPhone from "./components/auth/SignInWithPhone";
import OtpPhone from "./components/auth/OtpPhone";
import ForgetPassword from "./components/auth/ForgetPassword";
import CodeVerification from "./components/auth/CodeVerification";
import ChangePassword from "./components/auth/ChangePassword";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SplashScreen />} />
      <Route path="login" element={<SignInWithEmail />} />
      <Route path="register" element={<Register />} />
      <Route path="/SignInWithSocial" element={<SignInWithSocial />} />
      <Route path="/SignInWithPhone" element={<SignInWithPhone />} />
      <Route path="/OtpPhone" element={<OtpPhone />} />
      <Route path="/ForgetPassword" element={<ForgetPassword />} />
      <Route path="/CodeVerification" element={<CodeVerification />} />
      <Route path="/ChangePassword" element={<ChangePassword />} />
      <Route path="/onboarding1" element={<Onboarding1Page />} />
      <Route path="/onboarding2" element={<Onboarding2Page />} />
    </Routes>
  );
}

export default App;
