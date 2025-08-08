import { useRef } from "react";
import { Link } from "react-router";
import ArrowLeft from "../../assets/icons/ArrowLeft.png";
function OtpPhone() {
  const inputs = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^\d$/.test(value)) {
      // Move to next input
      if (index < 3) {
        inputs.current[index + 1].focus();
      }
    } else {
      // Clear invalid input
      e.target.value = "";
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputs.current[index - 1].focus();
    }
  };
  return (
    <div className="relative flex flex-col h-screen justify-center">
      <Link
        className="md:hidden absolute top-6 left-4 flex items-center gap-4"
        to="/login"
      >
        <img src={ArrowLeft} alt="Back" />
      </Link>
      <p className="md:hidden absolute top-5 left-1/2 -translate-x-1/2 text:md font-medium">
        OTP Code Verification
      </p>
      <p className="text-center mb-14 text-[#404448]">
        Code has been send to +02 010 *** **88
      </p>
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
      <Link to="/home">
        <button
          className="w-[calc(100%-10px)] mx-auto bg-[#145DB8] text-white rounded-md py-3 text-center text-base font-medium block"
        >
          Verify Code
        </button>
      </Link>
    </div>
  );
}

export default OtpPhone;
