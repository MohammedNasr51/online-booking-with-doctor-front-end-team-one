import React from "react";
import { Link } from "react-router";
import GoogleImg from "../../assets/icons/GoogleImg.png";
import FacebookImg from "../../assets/icons/FacebookImg.png";
import AppleImg from "../../assets/icons/AppleImg.png";
import ArrowLeft from "../../assets/icons/ArrowLeft.png";
import HeartImg from "../../assets/icons/BsHeartPulse.png";
import TelInput from "../profile/TelInput";

function SignInWithPhone() {
  return (
    <div className="relative flex flex-col h-screen items-center md:justify-center justify-end">
      <div className="">
        <Link to="/SignInWithSocial">
          <img
            className="block md:hidden absolute top-6 left-4"
            src={ArrowLeft}
            alt="Back"
          />
        </Link>

        <h2 className="text-center mb-10 md:mb-4 text-3xl font-[400]">
          Login to your Account
        </h2>
        <form className="w-full flex flex-col">
          <TelInput />
          <div className="mb-6 md:hidden flex items-center justify-center">
            <label className="flex items-center" htmlFor="terms-mobile">
              <input
                type="checkbox"
                id="terms-mobile"
                className="mr-2 w-[19px] h-[19px] border-[1.5px] border-[#99A2AB] rounded-xl"
              />
              Remember me
            </label>
          </div>
          <Link
            to="/OtpPhone"
            className="w-full bg-[#145DB8] py-3 text-center text-white rounded-md mt-4"
          >
            Sign in
          </Link>
        </form>
        <div className="flex items-center gap-4 my-6 w-full">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="text-[#99A2AB] text-[18px]">or</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

        <ul className="flex items-center justify-around mb-6 w-full">
          <li>
            <a className="border border-[#99A2AB] rounded-lg p-4 block hover:shadow-md transition">
              <img
                className="w-[20px] h-[20px]"
                src={FacebookImg}
                alt="FacebookImg"
              />
            </a>
            <a className="border border-[#99A2AB] rounded-lg p-5 mr-24">
              <img
                className="text-lg w-[20px]"
                src={GoogleImg}
                alt="GoogleImg"
              />
            </a>
            <a className="border border-[#99A2AB] rounded-lg p-5">
              <img className="text-lg w-[20px]" src={AppleImg} alt="AppleImg" />
            </a>
          </li>
        </ul>
        <div className="flex items-center justify-center gap-2 text-sm">
          <p className="text-[#99A2AB]">Already have an account?</p>
          <Link to="/register" className="text-[#145DB8] font-medium">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignInWithPhone;
