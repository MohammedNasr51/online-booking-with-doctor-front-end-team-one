import { generateDatesToEndOfYear } from "../../data/Date";
import { useRef, useState } from "react";
import BookCard from "./BookCard";
import PopMessage from "../PopMessages/PopMessage";
import Footer from "../Footer/Footer";

export default function MyBooking() {
  const scrollRef = useRef(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const [selectedDate, setSelectedDate] = useState(null);
  const days = generateDatesToEndOfYear();

  const handleMouseDown = (e) => {
    isDown.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
    scrollRef.current.style.cursor = "grabbing";
  };

  const handleMouseLeave = () => {
    isDown.current = false;
    scrollRef.current.style.cursor = "grab";
  };

  const handleMouseUp = () => {
    isDown.current = false;
    scrollRef.current.style.cursor = "grab";
  };

  const handleMouseMove = (e) => {
    if (!isDown.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = x - startX.current;
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const handleClick = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="h-auto bg-white">
      <h2 className="ml-3 mt-3 font-medium text-lg">My Booking</h2>
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-3 py-2 px-2 bg-white rounded-lg scrollbar-hide select-none cursor-grab"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {days.map((day) => (
          <button
            key={day.date}
            onClick={() => handleClick(day.date)}
            className={`min-w-[60px] px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap mt-3`}
            style={{
              backgroundColor : 
              selectedDate === day.date
              ? "#145DB8"
              : "rgba(245, 246, 247, 1)",
              color:
              selectedDate === day.date
              ? "white"
              : "#6D7379"
              }}
          >
            <div>{day.label}</div>
            <div className="text-xs">{day.date.slice(8)}</div>
          </button>
        ))}
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-4 mt-3">
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        </div>
      <PopMessage />
      <Footer />
    </div>
  );
}
