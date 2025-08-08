import { Link } from "react-router";
import GoogleImg from "../../assets/icons/GoogleImg.png";
import FacebookImg from "../../assets/icons/FacebookImg.png";
import AppleImg from "../../assets/icons/AppleImg.png";
import ArrowLeft from "../../assets/icons/ArrowLeft.png";
import UndrawWelcome from "../../assets/images/undraw_welcome.png";
function SignInWithSocial() {
  return (
    <div className="relative flex flex-col h-screen">
      <Link to="/onboarding2">
        <img
          className="block md:hidden absolute top-6 left-4"
          src={ArrowLeft}
          alt="Back"
        />
      </Link>
      <img className="mt-20 w-1/2 mx-auto" src={UndrawWelcome} alt="HeartImg" />
      <h2 className="text-center my-10 md:mb-4 text-3xl font-[400]">
        Let’s You In
      </h2>
      <button className="w-[calc(100%-10px)] mx-auto mb-3 border border-[#BBC1C7] text-[#000000] font-[400] text-base py-3 px-4 rounded-lg flex items-center justify-center gap-2">
        <img src={FacebookImg} alt="Facebook Icon" />
        Sign in with Facebook
      </button>
      <button className="w-[calc(100%-10px)] mx-auto mb-3 border border-[#BBC1C7] text-[#000000] font-[400] text-base py-3 px-4 rounded-lg flex items-center justify-center gap-2">
        <img src={GoogleImg} alt="Google Icon" />
        Sign in with Google
      </button>
      <button className="w-[calc(100%-10px)] mx-auto mb-3 border border-[#BBC1C7] text-[#000000] font-[400] text-base py-3 px-4 rounded-lg flex items-center justify-center gap-2">
        <img src={AppleImg} alt="Apple Icon" />
        Sign in with Apple
      </button>
      <div className="flex items-center justify-between mb-6">
        <hr className="flex-grow border-t border-gray-300" />
        <span className="mx-4 text-[#99A2AB]">or</span>
        <hr className="flex-grow border-t border-gray-300" />
      </div>
      <Link
        to="/SignInWithPhone"
        className=" w-[calc(100%-10px)] mx-auto py-3 mb-3 bg-[#145DB8] text-white rounded-md text-base font-[400] flex items-center justify-center gap-2"
      >
        Sign in with your Phone Number
      </Link>
      <div className="flex items-center justify-center gap-2">
        <p className="text-[#99A2AB]">Already have an account!</p>
        <Link to="/register" className="text-[#145DB8]">
          Sign up
        </Link>
      </div>
    </div>
  );
}

export default SignInWithSocial;
