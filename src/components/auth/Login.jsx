import React from "react";
import HeartImg from "../../assets/icons/BsHeartPulse.png";
import GoogleImg from "../../assets/icons/GoogleImg.png";
import FacebookImg from "../../assets/icons/FacebookImg.png";
import AppleImg from "../../assets/icons/AppleImg.png";
import CurveRight from "../../assets/images/CurveRight.png";
import LineCurve from "../../assets/images/LineCurve.png";
import { Link } from "react-router";
function Login() {
  return (
    <div className="relative flex flex-col h-screen items-center justify-center">
      <div className="absolute left-[20%] z-10">
        <img
          className="absolute -left-32 -top-16 w-[32px] h-[32px]"
          src={HeartImg}
          alt="HeartImg"
        />
        <h2 className="text-center mb-4 text-3xl font-[400]">Sign in</h2>
        <p className="text-[#6D7379] mb-7 text-sm">
          Please provide all information required to access your account{" "}
        </p>
        <form action="" className="flex flex-col gap-2 w-[420px] ">
          <label className="text-base" htmlFor="email">
            Email
          </label>
          <input
            className="border border-[#99A2AB] p-3 rounded-lg"
            type="email"
            id="email"
            placeholder="Email"
          />
          <label className="text-base" htmlFor="password">
            Password
          </label>
          <input
            className="border border-[#99A2AB] p-3 rounded-lg"
            type="password"
            id="password"
            placeholder="Password"
          />
          <Link className="text-[#145DB8] mt-2 mb-7 -ml-2 text-md">
            Forget the password?
          </Link>
         
          <button className="bg-[#145DB8] py-3 px-3 text-white rounded-md">
            Create an account
          </button>
          <div className="flex items-center gap-4 my-6">
            <hr className="flex-grow border-t border-gray-300" />
            <div className="text-[#99A2AB] text-[20px]">or</div>
            <hr className="flex-grow border-t border-gray-300" />
          </div>
          <ul className="flex items-center justify-center gap-4 mb-6">
            <a className="border  border-[#99A2AB] rounded-lg p-5 mr-24">
              <img className="w-[20px]" src={FacebookImg} alt="FacebookImg" />
            </a>
            <a className="border  border-[#99A2AB] rounded-lg p-5 mr-24">
              <img className="w-[20px]" src={GoogleImg} alt="GoogleImg" />
            </a>
            <a className="border  border-[#99A2AB] rounded-lg p-5">
              <img className="w-[20px]" src={AppleImg} alt="AppleImg" />
            </a>
          </ul>
          <div className="flex items-center justify-center gap-2">
            <p className="text-[#99A2AB]">Don’t have an account?</p>
            <Link to="/register" className="text-[#145DB8]">
              Sign up
            </Link>
          </div>
        </form>
      </div>
      <img
        src={CurveRight}
        alt="Background Curve"
        className="absolute opacity-100 h-screen hidden 2xl:block"
        style={{
          width: "1254px",
          top: 0,
          right: 0,
        }}
      />
      <img
        src={LineCurve}
        alt="Background Curve"
        className="absolute opacity-100 h-screen hidden 2xl:block"
        style={{
          width: "1254px",
          top: 0,
          right: "7px",
        }}
      />
    </div>
  );
}

export default Login;
