
import { ListDoctor } from "../../data/data";

const DoctorList=()=>{
    return(
   <div className="flex  items-center justify-center flex-wrap gap-8 mt-4 lg:ml-8 w-full lg:w-[100%] ">
        {ListDoctor.map((doctor) => (
          <div key={doctor.id} className="rounded-[30px] shadow-lg  md:w-80 lg:w-100 p-4">
            <div className="flex justify-between gap-[12px]">
              <img
                src={doctor.image}
                alt={doctor.name}
                className="w-[90px] h-[90px]"
              />
              <div>
                <h1 className="text-[#05162c] text-[16px]">{doctor.name}</h1>
                <p className="text-[#6D7379] text-[13px]">{doctor.specialty}</p>
                <div className="flex justify-between items-center gap-[10px] my-2">
                  <div className="flex items-center gap-2">
                    <img src="src\assets\icons\Star.svg" alt="rating" />
                    <span>{doctor.rating}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <img src="src\assets\icons\Clock Circle.svg" alt="rating" />
                    <span className="text-[12px]">{doctor.date}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center mt-2">
              <p className="text-[20px] ">
                Price<span className="text-[16px] text-[#999]">/hour</span>
              </p>
              <p className="text-red-500 text-[18px]">{doctor.price}</p>
            </div>
            <button className="bg-[#145DB8] text-[14px] w-full mt-2 text-white px-[16px] py-[10px] rounded-[10px]">
              Book appointment
            </button>
          </div>
        ))}
      </div>
    )
}
export default DoctorList;