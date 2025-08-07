import { useNavigate } from "react-router-dom";
import MenuItem from "../../components/profile/MenuItem";
import passwordManageIcon from "../../assets/icons/password-management-icon.svg";
import deleteAccountIcon from "../../assets/icons/delete-account-icon.svg";
import Modal from "../../components/shared/Modal";
import ModalContent from "../../components/shared/ModalContent";
import { useEffect, useRef, useState } from "react";
import CommonSettingsHeader from "../../components/shared/CommonSettingsHeader";
// Define the menu item for password management
const passManageItem = {
  id: 1,
  title: "Password Management",
  icon: passwordManageIcon,
  path: "/profile/settings/password-management",
};

const deleteAccountItem = {
  id: 2,
  title: "Delete Account",
  icon: deleteAccountIcon,
};

export default function Settings() {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef();
  const navigate = useNavigate();
  useEffect(() => {
    if (showModal && modalRef.current) {
      modalRef.current.open();
    } else if (modalRef.current) {
      modalRef.current.close();
    }
  }, [showModal, modalRef]);
  const handleShowModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleDeleteAccount = () => {
    setShowModal(false);
    navigate("/register");
  };
  return (
    <>
      {showModal && (
        <Modal ref={modalRef} onClose={handleCloseModal}>
          <ModalContent
            title="Delete account"
            description="Are you sure you want to delete your account?"
            acceptTitle="Yes, Delete"
            handleCloseModal={handleCloseModal}
            handleAction={handleDeleteAccount}
          />
        </Modal>
      )}
      <div className="mx-3 my-5">
        <CommonSettingsHeader title="Settings" />
        <div className="flex flex-col gap-4 mt-12">
          <MenuItem key={passManageItem.id} item={passManageItem} />
          <MenuItem
            key={deleteAccountItem.id}
            item={deleteAccountItem}
            onClick={handleShowModal}
          />
        </div>
      </div>
    </>
  );
}
