import { useEffect, useRef, useState } from "react";
import MenuSection from "../../components/profile/MenuSection";
import ProfileHeader from "../../components/profile/ProfileHeader";
import Modal from "../../components/shared/Modal";
import ModalContent from "../../components/shared/ModalContent";
import { Link } from "react-router-dom";

export default function Profile() {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const logoutModalRef = useRef();
  useEffect(() => {
    if (showLogoutModal && logoutModalRef.current) {
      logoutModalRef.current.open();
    } else if (logoutModalRef.current) {
      logoutModalRef.current.close();
    }
  }, [showLogoutModal, logoutModalRef]);
  const handleShowLogout = () => {
    setShowLogoutModal(true);
  };
  const handleCloseModal = () => {
    setShowLogoutModal(false);
  };
  const handleLogout = () => {
    setShowLogoutModal(false);
    // Add your logout logic here, e.g., clearing user data, redirecting to login page, etc.
    console.log("User logged out");
  };
  return (
    <>
      {showLogoutModal && (
        <Modal ref={logoutModalRef} onClose={handleCloseModal}>
          <ModalContent
            title="Logout"
            description="Are you sure you want to log out?"
            acceptTitle="Yes, Logout"
            handleCloseModal={handleCloseModal}
            handleAction={handleLogout}
          />
        </Modal>
      )}
      <Link to={'/notifications'} >
        notifications
      </Link>
      <Link to={'/reviews'} >
        reviews
      </Link>
      <div className="mx-3 gap-7 flex flex-col">
        <ProfileHeader />
        <div className="flex">
          <MenuSection onLogout={handleShowLogout} />
        </div>
      </div>
    </>
  );
}
