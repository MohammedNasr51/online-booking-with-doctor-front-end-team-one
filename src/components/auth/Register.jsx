import React from "react";
import { Link } from "react-router";
import HeartImg from "../../assets/icons/BsHeartPulse.png";
import GoogleImg from "../../assets/icons/GoogleImg.png";
import FacebookImg from "../../assets/icons/FacebookImg.png";
import AppleImg from "../../assets/icons/AppleImg.png";
import ArrowLeft from "../../assets/icons/ArrowLeft.png";
import CurveRight from "../../assets/images/CurveRight.png";
import LineCurve from "../../assets/images/LineCurve.png";
import UserIcon from "../../assets/icons/AccountIcon.png";
import EmailIcon from "../../assets/icons/EmailIcon.png";
import LockIcon from "../../assets/icons/Key Square 3.png";

function Register() {
  return (
    <div className="relative flex flex-col h-screen items-center md:justify-center justify-end">
      <div className="md:absolute left-[20%] z-10">
        <Link to="/onboarding2">
          <img
            className="block md:hidden absolute top-6 left-4"
            src={ArrowLeft}
            alt="Back"
          />
        </Link>

        <img
          className="absolute md:-left-32 md:-top-16 left-[44%] top-24 w-[50px] h-[50px] md:w-[32px] md:h-[32px]"
          src={HeartImg}
          alt="HeartImg"
        />

        <h2 className="text-center mb-10 md:mb-4 text-3xl font-[400]">
          Create New Account
        </h2>
        <p className="text-[#6D7379] md:block hidden mb-7 text-sm">
          Please provide all information required to create your account
        </p>

        <form
          action=""
          className="flex flex-col mb-14 md:mb-0 md:gap-2 gap-[1.2rem] w-[374px] md:w-[420px]"
        >
          {/* NAME */}
          <label className="text-base md:block hidden" htmlFor="name">
            Name
          </label>
          <div className="relative">
            <img
              src={UserIcon}
              alt="user icon"
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 opacity-80"
            />
            <input
              className="border border-[#99A2AB] p-3 pl-11 rounded-lg w-full"
              type="text"
              id="name"
              placeholder="Name"
            />
          </div>

          {/* EMAIL */}
          <label className="text-base md:block hidden" htmlFor="email">
            Email
          </label>
          <div className="relative">
            <img
              src={EmailIcon}
              alt="email icon"
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 w-5 h-4 opacity-80"
            />
            <input
              className="border border-[#99A2AB] p-3 pl-11 rounded-lg w-full"
              type="email"
              id="email"
              placeholder="Email"
            />
          </div>

          {/* PASSWORD */}
          <label className="text-base md:block hidden" htmlFor="password">
            Password
          </label>
          <div className="relative">
            <img
              src={LockIcon}
              alt="lock icon"
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 opacity-80"
            />
            <input
              className="border border-[#99A2AB] p-3 pl-11 rounded-lg w-full"
              type="password"
              id="password"
              placeholder="Password"
            />
          </div>

          <p className="text-[#6D7379] mb-2 text-sm md:block hidden">
            Must be at least eight characters
          </p>

          <div className="mb-7 md:hidden flex items-center justify-around">
            <label className="flex items-center" htmlFor="terms-mobile">
              <input
                type="checkbox"
                id="terms-mobile"
                className="mr-2 w-[19px] h-[19px] border-[1.5px] border-[#99A2AB] rounded-md"
              />
              Remember me
            </label>
          </div>

          <div className="mb-7 md:block hidden">
            <label className="flex items-center" htmlFor="terms">
              <input
                type="checkbox"
                id="terms"
                className="mr-2 w-[19px] h-[19px] border-[1.5px] border-[#99A2AB] rounded-md"
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
            className="bg-[#145DB8] py-3 px-3 text-center text-white rounded-md"
          >
            Create an account
          </Link>

          <div className="flex items-center gap-4 my-6">
            <hr className="flex-grow border-t border-gray-300" />
            <div className="text-[#99A2AB] text-[20px]">or</div>
            <hr className="flex-grow border-t border-gray-300" />
          </div>

          <ul className="flex items-center justify-center md:gap-4 mb-6">
            <a className="border border-[#99A2AB] rounded-lg p-5 mr-24">
              <img className="text-lg w-[20px]" src={FacebookImg} alt="FacebookImg" />
            </a>
            <a className="border border-[#99A2AB] rounded-lg p-5 mr-24">
              <img className="text-lg w-[20px]" src={GoogleImg} alt="GoogleImg" />
            </a>
            <a className="border border-[#99A2AB] rounded-lg p-5">
              <img className="text-lg w-[20px]" src={AppleImg} alt="AppleImg" />
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
