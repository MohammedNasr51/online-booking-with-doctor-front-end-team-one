import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <Router>
      <Routes>
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
      </Routes>
    </Router>
  );
}

export default App;
