import "./App.css";
import Layout from "./components/layout/Layout";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/home/Home";
import Doctors from "./pages/doctor/Doctors";
import Map from "./pages/map/Map";
import MobileSearch from "./pages/mobile search/MobileSearch";
import MobileSpecialties from "./pages/mobile search/MobileSpecialties";
import AllDoctors from "./pages/mobile search/AllDoctors";
import MobileMap from "./pages/mobile map/MobileMap";
import MapSearch from "./pages/mobile map/MapSearch";
import LoadingLocation from "./pages/mobile map/LoadingLocation";
import LocationSearch from "./pages/mobile map/LocationSearch";
import CurrentLocation from "./pages/mobile map/CurrentLocation";

import MyBooking from "./pages/Booking/MyBooking";
import BookAppoinment from "./pages/Booking/BookAppoinment";
import PayStripe from "./pages/Booking/PayStripe";
import DoctorDetailes from "./pages/Booking/DoctorDetailes";
import Profile from "./pages/profile/Profile";
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
import Reviews from "./components/Reviews/Reviews";
import AddReview from "./components/Reviews/AddReview";
import DoctorFullPage from "./pages/Booking/DoctorFullPage";
import Register from "./components/auth/Register";
import SignInWithEmail from "./components/auth/SignInWithEmail";
import SplashScreen from "./pages/Auth/SplashScreenPage";
import Onboarding1Page from "./pages/Auth/Onboarding1Page";
import Onboarding2Page from "./pages/Auth/Onboarding2Page";
import SignInWithSocial from "./components/auth/SignInWithSocial";
import SignInWithPhone from "./components/auth/SignInWithPhone";
import OtpPhone from "./components/auth/OtpPhone";
import ForgetPassword from "./components/auth/ForgetPassword";
import CodeVerification from "./components/auth/CodeVerification";
import ChangePassword from "./components/auth/ChangePassword";
import { useEffect, useState } from "react";
function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/home" element={<Index />} />
        <Route path="/doctors" element={<Doctors />} />
      </Route>
      <Route path="/map" element={<Map />} />
      <Route path="/search" element={<MobileSearch />} />
      <Route path="/specialties" element={<MobileSpecialties />} />
      <Route path="/all-doctors" element={<AllDoctors />} />
      <Route path="/maps" element={<MobileMap />} />
      <Route path="/map-search" element={<MapSearch />} />
      <Route path="/loading-location" element={<LoadingLocation />} />
      <Route path="/location-search" element={<LocationSearch />} />
      <Route path="/current-location" element={<CurrentLocation />} />

      <Route path="/myBooking" element={<MyBooking />} />
      {isMobile ? (
        <>
          <Route path="/doctorDetailes" element={<DoctorDetailes />} />
          <Route path="/bookApp" element={<BookAppoinment />} />
          <Route path="/pay" element={<PayStripe />} />
        </>
      ) : (
        <Route path="/doctorFull" element={<DoctorFullPage />} />
      )}

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

      <Route path="/">
        {
          isMobile ? 
          <Route index element={<SplashScreen />} />
          :
          <Route index element={<Register />} />
        }
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<SignInWithEmail />} />
        <Route path="/SignInWithSocial" element={<SignInWithSocial />} />
        <Route path="/SignInWithPhone" element={<SignInWithPhone />} />
        <Route path="/OtpPhone" element={<OtpPhone />} />
        <Route path="/ForgetPassword" element={<ForgetPassword />} />
        <Route path="/CodeVerification" element={<CodeVerification />} />
        <Route path="/ChangePassword" element={<ChangePassword />} />
        <Route path="/onboarding1" element={<Onboarding1Page />} />
        <Route path="/onboarding2" element={<Onboarding2Page />} />
      </Route>

      <Route path="/favourites" element={<Favourites />} />
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/add-review" element={<AddReview />} />
    </Routes>
  );
}

export default App;
