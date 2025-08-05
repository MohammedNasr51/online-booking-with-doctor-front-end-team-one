import React from "react";
import HeartImg from "../../assets/icons/BsHeartPulse.png";
import GoogleImg from "../../assets/icons/GoogleImg.png";
import FacebookImg from "../../assets/icons/FacebookImg.png";
import AppleImg from "../../assets/icons/AppleImg.png";
import ArrowLeft from "../../assets/icons/ArrowLeft.png";
import CurveRight from "../../assets/images/CurveRight.png";
import LineCurve from "../../assets/images/LineCurve.png";
import { Link } from "react-router";
function Register() {
  return (
    <div className="relative flex flex-col h-screen items-center justify-center">
      <div className="md:absolute left-[20%] z-10">
        <Link to="/onboarding2">
          <img
            className="block md:hidden"
            src={ArrowLeft}
            alt="SmallHeartImg"
          />
        </Link>
        <img
          className=" absolute md:-left-32 md:-top-16 left-auto w-[32px] h-[32px]"
          src={HeartImg}
          alt="HeartImg"
        />
        <h2 className="text-center mb-4 text-3xl font-[400]">
          Create an account
        </h2>
        <p className="text-[#6D7379] mb-7 text-sm">
          Please provide all information required to create your account
        </p>
        <form action="" className="flex flex-col gap-2 w-[420px] ">
          <label className="text-base" htmlFor="name">
            Name
          </label>
          <input
            className="border border-[#99A2AB] p-3 rounded-lg"
            type="text"
            id="name"
            placeholder="Name"
          />
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
          <p className="text-[#6D7379] mb-2 text-sm">
            Must be at least eight characters
          </p>
          <div className="mb-7">
            <label className="flex items-center" htmlFor="terms">
              <input
                type="checkbox"
                id="terms"
                className="mr-2 w-[19px] h-[19px] border-[1.5px] border-[#99A2AB] rounded rounded-md"
              />
              I agree to the
              <span className="text-[#145DB8] cursor-pointer mx-1">
                Terms of Service
              </span>
              and
              <span className="text-[#145DB8] cursor-pointer mx-1">
                Privacy Policy
              </span>
            </label>
          </div>
          <Link
            to="/register"
            className="bg-[#145DB8] py-3 px-3 text-white rounded-md"
          >
            Create an account
          </Link>
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
            <p className="text-[#99A2AB]">Already have an account!</p>
            <Link to="/login" className="text-[#145DB8]">
              Sign in
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

export default Register;
