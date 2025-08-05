import { Route, Routes } from "react-router"
import MyBooking from "./Component/Booking/MyBooking"
import BookAppoinment from "./Component/Booking/BookAppoinment"
import PayStripe from "./Component/Booking/PayStripe"
import DoctorDetailes from "./Component/Booking/DoctorDetailes"

function App() {


  return (
    <>
    <Routes>
      <Route path="/" element={<MyBooking />}/>
      <Route path="/doctorDetailes" element={<DoctorDetailes />}/>
      <Route path="/bookApp" element={<BookAppoinment />}/>
      <Route path="/pay" element={<PayStripe />}/>
    </Routes>
    </>
  )
}

export default App
