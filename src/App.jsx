
import { Route, Routes } from "react-router"
import MyBooking from "./components/Booking/MyBooking"
import BookAppoinment from "./components/Booking/BookAppoinment"
import PayStripe from "./components/Booking/PayStripe"
import DoctorDetailes from "./components/Booking/DoctorDetailes"
import Profile from "./pages/profile/Profile";
import "./App.css";
import EditProfile from "./pages/profile/EditProfile";
import Settings from "./pages/profile/Settings";
import PasswordManagement from "./pages/profile/PasswordManagement";
import Privacy from "./pages/profile/Privacy";
import FAQS from "./pages/profile/FAQS";
import PaymentMethods from "./pages/profile/PaymentMethods";
import PaymentCards from "./pages/profile/PaymentCards";
import AddNewCard from "./pages/profile/AddNewCard";
import Notifications from "./pages/Notifications/Notifications";
import Favourites from "./pages/favourites/Favourites";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<MyBooking />}/>
      <Route path="/doctorDetailes" element={<DoctorDetailes />}/>
      <Route path="/bookApp" element={<BookAppoinment />}/>
      <Route path="/pay" element={<PayStripe />}/>
      
        <Route path="/profile">
          <Route index element={<Profile />} />
          <Route path="edit" element={<EditProfile />} />
          <Route path="settings" element={<Settings />} />
          <Route
            path="settings/password-management"
            element={<PasswordManagement />}
          />
          <Route path="privacy" element={<Privacy />} />
          <Route path="faq" element={<FAQS />} />
          <Route path="payment">
            <Route index element={<PaymentMethods />} />
            <Route path="method" element={<PaymentCards />} />
            <Route path="add-new-card" element={<AddNewCard />} />
          </Route>
        </Route>
          <Route path="/favourites" element={<Favourites />} />
        <Route path="/notifications" element={<Notifications />} />
      </Routes>
      </>
  );
}

export default App;
