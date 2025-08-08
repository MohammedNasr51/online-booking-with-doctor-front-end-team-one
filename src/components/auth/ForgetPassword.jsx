import { Link } from "react-router-dom";
import ArrowLeft from "../../assets/icons/ArrowLeft.png";
import EmailIcon from "../../assets/icons/EmailIcon.png";

function ForgetPassword() {
  return (
    <div className="relative flex flex-col h-screen items-center justify-start pt-36 md:justify-center px-4">
      <Link
        className="md:hidden absolute top-6 left-4 flex items-center gap-4"
        to="/login"
      >
        <img src={ArrowLeft} alt="Back" className="w-5 h-5" />
      </Link>
      <p className="md:hidden absolute top-5 left-1/2 -translate-x-1/2 text-lg font-medium">
        Forget your password
      </p>
      <div className="w-full max-w-sm">
        <p className="mb-5 font-normal text-[#404448]">
          Please enter your email to reset the password
        </p>

        <form className="flex flex-col mb-8">
          <div className="relative">
            <img
              src={EmailIcon}
              alt="email icon"
              loading="lazy"
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 w-5 h-4 opacity-80"
            />
            <input
              className="border border-[#99A2AB] p-3 pl-11 rounded-lg w-full"
              type="email"
              id="email"
              placeholder="Email"
            />
          </div>
        </form>

        <Link
          to="/CodeVerification"
          className="w-full bg-[#145DB8] text-white rounded-md py-3 text-center text-base font-medium block"
        >
          Reset Password
        </Link>
      </div>
    </div>
  );
}

export default ForgetPassword;
