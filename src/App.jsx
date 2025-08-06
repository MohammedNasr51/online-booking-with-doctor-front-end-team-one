import "./App.css";
import Layout from "./components/layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/home/Index";
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


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Index />} />
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
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
