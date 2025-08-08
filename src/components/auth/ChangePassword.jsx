import { Link } from "react-router";
import ArrowLeft from "../../assets/icons/ArrowLeft.png";
import LockIcon from "../../assets/icons/Key Square 3.png";
function ChangePassword() {
  return (
    <div className="relative flex flex-col h-screen items-center justify-start pt-40 md:justify-center">
      <div className="px-3 md:px-0">
        <Link
          className="md:hidden absolute top-6 left-4 flex items-center gap-4"
          to="/login"
        >
          <img src={ArrowLeft} alt="Back" className="w-5 h-5" />
        </Link>
        <p className="md:hidden absolute top-5 left-1/2 -translate-x-1/2 text-lg font-medium">
          Set new password
        </p>
        <p className="text-start mb-5 font-[400]  text-[#404448]">
          Create a new password, ensure it different form your previous ones for
          security.
        </p>
        <form className="flex flex-col mb-14">
          {/* EMAIL */}
          <div className="relative mb-6">
            <img
              loading="lazy"
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
          <div className="relative">
            <img
              src={LockIcon}
              loading="lazy"
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
        </form>
        <Link
          to="/login"
          className="w-full bg-[#145DB8] text-white rounded-md py-3 text-center text-base font-medium block"
        >
          Reset Password
        </Link>
      </div>
    </div>
  );
}

export default ChangePassword;
