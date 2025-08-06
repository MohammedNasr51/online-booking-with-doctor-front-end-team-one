import { useState } from "react";
import calenderIcon from "../../assets/icons/calendar-02.png";
import locationIcon from "../../assets/icons/Icon.png";
import doctorIcon from "../../assets/images/644acebb39b684127cacceef34d2234b0b1622c9.jpg";
import PopMessage from "../PopMessages/PopMessage";

export default function BookCard(){
    const [show , setShow] = useState(false);
    function handleCancel(){
        setShow(true);
    }
    return(
        <>
        <div className="border-2 border-gray-200 rounded-2xl ml-2 mr-2">
           <div className="flex items-center justify-between ml-2 mt-2">
            <div className="flex gap-2 items-center">
                <img src={calenderIcon} alt="calenderICon" />
                <p className="text-gray-800 text-xs">Monday,July 21 - 11:00 Am</p>
            </div>
            <h3 className="text-blue-500 text-bold text-sm mr-4">Upcoming</h3>
           </div>
           <hr className="w-11/12 bg-gray-200 m-auto mt-1"/>
           <div className="flex gap-1 ml-2 mt-4">
                <div className="flex justify-start gap-1">
                    <img src={doctorIcon} alt="doctor photot" className="rounded-full w-12 h-12 "/>
                    <div className="flex flex-col ml-2">
                        <h2 className="text-bold text-lg">Jennifer Miller</h2>
                        <p className="text-gray-400">Psychiartist</p>
                    </div>
                </div>
           </div>
                <div className="flex ml-2 mt-2 gap-1 items-center">
                    <img src={locationIcon} alt="locationIcon" className="w-3 h-4"/>
                    <p className="text-sm text-gray-400 font-sans">129,ElNasr Street, Cairo, Egypt</p>
                </div>
            <div className="flex items-center justify-around mt-3 mb-5">
                <button className="border-gray-400 border-2  rounded-xl text-sm border-none flex items-center justify-center  w-5/12 h-10  text-gray-100 bg-blue-600" onClick={handleCancel}>Cancel</button>
                 Reshedule
            </div>    
        </div>
        {show && <PopMessage shown={show} onClose={()=>setShow(false)} />}
        </>
    );
} 