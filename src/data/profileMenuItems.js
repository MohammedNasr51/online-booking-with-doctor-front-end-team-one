import paymentIcon from "../assets/icons/payment-icon.svg";
import settingsIcon from "../assets/icons/settings-icon.svg";
import favouriteIcon from "../assets/icons/favourite-icon.svg";
import faqIcon from "../assets/icons/faq-icon.svg";
import lockIcon from "../assets/icons/lock-icon.svg";
import logoutIcon from "../assets/icons/logout-icon.svg";

const PROFILE_MENU_ITEMS = [
  {
    id: 1,
    path: "/profile/payment",
    icon: paymentIcon,
    title: "Payment Method",
  },

  {
    id: 3,
    path: "/favourites",
    icon: favouriteIcon,
    title: "Favourites",
  },
  {
    id: 2,
    path: "/profile/settings",
    icon: settingsIcon,
    title: "Settings",
  },
  {
    id: 4,
    path: "/profile/faq",
    icon: faqIcon,
    title: "FAQ",
  },
  {
    id: 5,
    path: "/profile/privacy",
    icon: lockIcon,
    title: "Privacy Policy",
  },
  {
    id: 6,
    icon: logoutIcon,
    title: "Logout",
  },
];

export default PROFILE_MENU_ITEMS;
