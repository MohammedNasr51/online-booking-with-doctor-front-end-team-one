import { useState } from "react";
import { Link, Links } from "react-router-dom";

const Header = () => {
  const [close,setClose]=useState(false);
  return (
    <>
      <div className="hidden md:flex justify-evenly items-center p-2   lg:mx-[100px] mt-[52px] ">
        <img src="src\assets\icons\logo.svg" alt="logo" />
        <div className="flex items-center bg-[#F5F6F7] w-[50%] h-[40px] rounded-[10px] px-[16px] py-[8px] gap-4">
          <img src="src\assets\icons\Magnifer.png" alt="search icon" />
          <Link to="/doctors" className="w-full">
            <input
              className="bg-transparent outline-none text-gray-600 w-full"
              type="text"
              placeholder="Search about specialty,doctor"
            />
          </Link>
        </div>
        <div className="flex items-center gap-4 ">
        <div className={ close ? "flex gap-4"
          : "hidden"
        } >
          <Link to="/" className="w-[75%] rounded-[10px] py-[6px] px-[16px] bg-[#F5F6F7]">
          Home
          </Link>
          <Link to="/myBooking" className="w-[75%] rounded-[10px] py-[6px] px-[16px] bg-[#F5F6F7]">
          Booking
          </Link>
        </div>
         {
          !close?
           <img
             className="cursor-pointer"
             src="src\assets\icons\Vector.png"
             alt="list icon"
             onClick={()=>setClose(!close)}
           />
          : <img
             className="cursor-pointer"
             src="src\assets\icons\close-list.svg"
             alt="list icon"
             onClick={()=>setClose(!close)}
           />

         }
         <Link to="/">
          <img
            className="cursor-pointer"
            src="src\assets\icons\Bell.png"
            alt="notification icon"
          />
         </Link>
          <Link to="/profile">
          <img
            className="ml-2 cursor-pointer"
            src="src\assets\images\Ellipse 1538.png"
            alt="profile icon"
          />
          </Link>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 w-full flex justify-evenly items-center bg-white shadow-lg z-50 md:hidden py-3 text-[12px]">
        <div className="flex flex-col items-center">
          <img src="src\assets\icons\home.svg" alt="header image" />
          <Link to="/" className="text-[#145DB8]">
            Home
          </Link>
        </div>
        <div className="flex flex-col items-center">
          <img src="src\assets\icons\booking.svg" alt="header image" />
          <Link to="/bookApp" className="text-[#99A2AB]">
            Booking
          </Link>
        </div>
        <div className="flex flex-col items-center">
          <img src="src\assets\icons\Profile (1).svg" alt="header image" />
          <Link to="/profile" className="text-[#99A2AB]">
            Profile
          </Link>
        </div>
      </div>
    </>
  );
};
export default Header;
