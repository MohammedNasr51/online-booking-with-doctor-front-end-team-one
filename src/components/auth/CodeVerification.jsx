import React, { useRef } from "react";
import { Link } from "react-router";
import ArrowLeft from "../../assets/icons/ArrowLeft.png";
function CodeVerification() {
  const inputs = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^\d$/.test(value)) {
      if (index < 3) {
        inputs.current[index + 1].focus();
      }
    } else {
      e.target.value = "";
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputs.current[index - 1].focus();
    }
  };
  return (
    <div className="relative flex flex-col justify-center items-center h-screen">
        <Link
          className="md:hidden absolute top-6 left-4 flex items-center gap-4"
          to="/login"
        >
          <img src={ArrowLeft} alt="Back" className="w-5 h-5" />
        </Link>
        <p className="md:hidden absolute top-5 left-1/2 -translate-x-1/2 text-lg font-medium">
          Code Verification
        </p>
        <p className="text-center mb-2 text-[#404448]">
          Code has been send to your email
        </p>
        <p className="text-center mb-14 text-[#404448]">Check your Email</p>
        <div className="flex justify-center items-center gap-4 my-6">
          {[0, 1, 2, 3].map((i) => (
            <input
              key={i}
              type="text"
              maxLength="1"
              className="w-14 h-14 text-center text-xl border border-[#99A2AB] rounded-md focus:outline-none focus:ring-2 focus:ring-[#145DB8]"
              onChange={(e) => handleChange(e, i)}
              onKeyDown={(e) => handleKeyDown(e, i)}
              ref={(el) => (inputs.current[i] = el)}
            />
          ))}
        </div>
        <p className="text-[#99A2AB] text-center mb-20">
          Resend code in <span className="text-[#145DB8]">55</span> s
        </p>
        <Link
          to="/ChangePassword"
          className="w-[calc(100%-10px)] bg-[#145DB8] text-white rounded-md py-3 text-center text-base font-medium"
        >
          Verify Code
        </Link>
      </div>
  );
}

export default CodeVerification;
