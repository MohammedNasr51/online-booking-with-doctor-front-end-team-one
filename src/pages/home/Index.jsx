import { Link } from "react-router-dom";
import { topRatedDoctors } from "../../data/data";
import MobileHome from "../mobile home/MobileHome";
import Reviews from "../../components/Reviews/Reviews";
import FAQSection from "../../components/profile/FAQSection";
const Index = () => {
  console.log(topRatedDoctors);
  const work = [
    {
      id: 1,
      title: "Search for doctors",
      description:
        "Easily browse by specialty, location, or doctor name to find the right healthcare provider for your needs.",
      image: "src/assets/images/Frame 1000001224.svg",
    },
    {
      id: 2,
      title: "Choose a Date & Time",
      description:
        "View real-time availability and pick a slot that works best for your schedule.",
      image: "src/assets/images/Frame 1000001226.svg",
    },
    {
      id: 3,
      title: "Book & Pay Online",
      description:
        "Confirm your appointment and pay securely using various payment options—credit card, mobile wallet.",
      image: "src/assets/images/Frame 1000001232.svg",
    },
  ];
  return (
    <>
      <div className="hidden md:flex flex-col justify-center items-center p-4  m-auto mt-12 gap-[24px] w-[50%]">
        <div className="bg-[#E8EFF8] text-[13px] flex justify-between items-center gap-[8px]  px-3 py-1 rounded-[28px]">
          <img src="src\assets\icons\Vector (1).png" alt="star" />
          <p>Upgrade your account</p>
        </div>
        <h1 className="text-[#05162c] font-400 text-[20px] lg:text-[40px]">
          Find and book top doctors near yor
        </h1>
        <p className="text-[#6D7379] text-[16px] lg:text-[26px] w-[100%] lg:w-[80%] text-center">
          Easily find top-rated specialists near you and book appointments in
          just a few clicks. Whether you need an in-person visit consultation,
          we're here to connect you with the right care—fast, simple, and
          secure.
        </p>
        <div className="bg-[#E8EFF8] text-[13px] flex justify-between items-center gap-[8px]  px-3 py-1 rounded-[28px]">
          <img src="src\assets\images\Frame 1000001198.png" alt="star" />
          <p>10k+ happy patients </p>
        </div>
        <div className="flex justify-between flex-col lg:flex-row items-center gap-[32px] text-[14px]">
          <button className="bg-[#145DB8] lg:w-[196px] text-white px-[16px] py-[10px] rounded-[10px]">
            <Link to="/doctors">Get started</Link>
          </button>
          <Link to="/doctorFull">
            <div className="flex justify-center items-center gap-[8px]  border border-[#145DB8] rounded-[10px] px-[4px] lg:px-[16px] py-[8px]">
              <img src="src\assets\icons\calendar-02.png" alt="calender" />
              <p className="text-[#145DB8] ">Book Appointment</p>
            </div>
          </Link>
        </div>
        <h1 className="text-[#05162c] font-400 text-[20px] lg:text-[40px] lg:m-12">
          How it works
        </h1>
        <div className="flex  justify-between flex-col gap-4 lg:flex-row items-center  lg:w-[200%]">
          {work.map((item) => (
            <div
              key={item.id}
              className="flex flex-row w-fit-content items-center lg:flex-col  gap-[16px]  flex-wrap lg:w-[30%]  border border-gray-300 p-4 rounded-[30px]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-[50%] lg:w-[400px] hidden lg:flex lg:h-[200px] mt-[-10px] "
              />
              <div className="bg-white w-[100%] lg:w-full pl-2 ">
                <h1 className="text-[#05162c] text-[18px] lg:text-[22px]">
                  {item.title}
                </h1>
                <p className="text-[#6D7379] text-[14px]lg:text-[16px]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-evenly flex-col lg:flex-row  items-center gap-[32px]  mt-32 mb-16 w-[190%] ">
          <div className="w-[400px]">
            <h1 className="text-[#05162c] font-400 text-[20px] lg:text-[30px]">
              Find Care Near You <br></br>in Seconds
            </h1>
            <p className="text-[#6D7379] text-[16px] lg:text-[20px] text-center">
              Allow location access or choose your city to instantly discover
              trusted doctors and clinics around you—quick, easy, and local.
            </p>
            <div className="flex justify-center items-center gap-[8px] w-fit-content lg:w-[200px]  border border-[#145DB8] rounded-[10px] m-4 py-[8px]">
              <img src="src\assets\icons\Vector.svg" alt="calender" />
              <Link to="/doctors">
                <p className="text-[#145DB8] ">Search by location</p>
              </Link>
            </div>
          </div>

          <img
            src="src\assets\images\Frame 1000001255.svg"
            alt="map"
            className=" w-[80%] lg:w-[30%]"
          />
        </div>
        <div className="w-[190%] flex justify-between flex-col lg:flex-row items-center gap-[32px] ">
          <div className="w-[70%]">
            <h1 className="text-[#05162c] font-400 text-[20px] lg:text-[30px]">
              Top-Rated Doctors Chosen by Patients
            </h1>
            <p className="text-[#6D7379] text-[16px] lg:text-[20px]">
              Explore our highest-rated doctors, trusted by real patients for
              their expertise, care, and service. Book with confidence today.
            </p>
          </div>
          <div className="flex justify-center items-center gap-[8px] w-fit-content px-2 lg:w-[200px]  border border-[#145DB8] rounded-[10px] m-4 py-[8px]">
            <p className="text-[#145DB8] ">View All</p>
          </div>
        </div>
        <div className="w-[200%] overflow-x-auto pb-8 ">
          <div className="flex items-center flex-row  w-max  gap-8">
            {topRatedDoctors.map((doctor) => (
              <div
                key={doctor.id}
                className=" rounded-[30px] shadow-lg w-[350px]  p-4"
              >
                <div className="flex justify-between gap-[12px]">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-[90px] h-[90px]"
                  />
                  <div>
                    <h1 className="text-[#05162c] text-[16px]">
                      {doctor.name}
                    </h1>
                    <p className="text-[#6D7379] text-[13px]">
                      {doctor.specialty}
                    </p>
                    <div className="flex justify-between items-center gap-[10px] my-2">
                      <div className="flex items-center gap-2">
                        <img src="src\assets\icons\Star.svg" alt="rating" />
                        <span>{doctor.rating}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <img
                          src="src\assets\icons\Clock Circle.svg"
                          alt="rating"
                        />
                        <span>{doctor.date}</span>
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
                <Link to="/doctorFull">
                  <button className="bg-[#145DB8] text-[14px] w-full mt-2 text-white px-[16px] py-[10px] rounded-[10px]">
                    Book appointment
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="hidden lg:flex flex-col justify-center items-center mb-12">
        <Reviews />
        <div className="bg-[#E8EFF8] text-[#145DB8] text-[13px] flex justify-between items-center gap-[8px]  px-3 py-1 rounded-[28px]">
          <p>Frequently Asked Questions</p>
        </div>

        <h1 className="text-[#05162c] font-400 text-[20px] lg:text-[30px] mt-2">
          Got Questions ? We’ve got Answers!
        </h1>

        <FAQSection className="w-[70%]" />
      </div>
      <MobileHome />
    </>
  );
};
export default Index;
