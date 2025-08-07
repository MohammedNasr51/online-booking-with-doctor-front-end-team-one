import { Link } from "react-router-dom";
import Specialties from "../doctor/Specialties";
import MobileDoctorList from "./MobileDoctorList";

const MobileHome = () => {
  return (
    <div className="md:hidden">
      <div className="flex lg:hidden justify-around items-center mt-8 gap-2 ">
        <img src="src\assets\images\Ellipse 1538.png" alt="profile" />
        <div className="flex flex-col justify-center items-start ml-[-30px]">
          <h1>Welcome back, Seif</h1>
          <p className="text-[#6D7379] text-[12px]">
            129,El-Nasr Street, Cairo
          </p>
        </div>
        <div className="flex justify-center items-center gap-2">
          <Link to="/favourites">
            <img
              src="src\assets\icons\like.svg"
              alt="like"
              className="shadow-lg p-2 rounded-[11px]"
            />
          </Link>
          <Link to="/notifications">
            <img
              src="src\assets\icons\Bell.png"
              alt="notification"
              className="shadow-lg p-2 rounded-[11px]"
            />
          </Link>
        </div>
      </div>
      <div className="flex  items-center bg-[#F5F6F7] w-[90%] h-[40px] rounded-[10px] px-[16px] py-[8px] gap-4 mt-8 ml-[5%] ">
        <img
          src="src\assets\icons\Magnifer.png"
          alt="search icon"
          className="w-[20px]"
        />
        <Link to="/search" className="w-full">
          <input
            className="bg-transparent outline-none text-gray-600 w-full text-[13px]"
            type="text"
            placeholder="Search for specialty, doctor"
          />
        </Link>
      </div>
      <div className="flex justify-between items-center mt-8 w-[90%] ml-[5%]">
        <h1 className="text-[18px] font-medium">Specialties</h1>
        <Link to="/specialties" className="text-[#145DB8]">
          View all
        </Link>
      </div>
      <div className="w-[90%] m-[5%]">
        <Specialties />
      </div>
      <img
        src="src\assets\images\Banner.svg"
        alt="banner"
        className="w-[96%] ml-[2%]"
      />
      <div className="flex justify-between items-center my-4 w-[90%] ml-[5%]">
        <h1 className="text-[18px] font-medium">Doctors near you</h1>
        <Link to="/all-doctors" className="text-[#145DB8]">
          View all
        </Link>
      </div>
      <div>

      <MobileDoctorList />
      </div>

    </div>
  );
};
export default MobileHome;
