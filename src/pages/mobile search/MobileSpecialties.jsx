import { Link } from "react-router-dom";
import { specialt } from "../../data/data";

const MobileSpecialties = () => {
  return (
    <>
      <div className="flex   gap-2 items-center mt-8 w-[90%] px-8 ">
        <Link to="/">
          <img src="src\assets\icons\arrow left.svg" alt="arrow left" />
        </Link>
        <h1 className="font-medium ml-[40%] text-[18px]">Specialties</h1>
      </div>
      <div className="flex flex-wrap gap-2  p-2 ml-[2%] mt-8 ">
        {specialt.map((specialty) => (
          <div
            key={specialty.id}
            className="flex items-center bg-[#F5F6F7] flex-col rounded-[14px] w-fit-content gap-[4px] px-[16px] py-[6px]  border-2 "
          >
            <img
              src={specialty.image}
              alt={specialty.name}
              className="w-[16px] h-[16px] mb-2"
            />
            <h2 className="text-[#404448] text-[13px]  mb-2 w-fit-content">
              {specialty.name}
            </h2>
          </div>
        ))}
      </div>
     
    </>
  );
};
export default MobileSpecialties;
