import { forwardRef, useImperativeHandle, useRef } from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal({ className = "", children }, ref) {
  const dialogRef = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialogRef.current.showModal();
      },
      close() {
        dialogRef.current.close();
      },
    };
  });
  return createPortal(
    <dialog
      aria-modal="true"
      ref={dialogRef}
      className={`w-[80%] max-w-xl md:max-w-2xl lg:max-w-3xl rounded-b-[54px] rounded-t-[34px]  h-fit bg-white 
      shadow-lg p-6 md:p-8 relative overflow-hidden backdrop:bg-black/50 backdrop:w-full backdrop:h-full backdrop:backdrop-blur-sm ${className}`}
    >
      {children}
    </dialog>,
    document.getElementById("modal-root")
  );
});
Modal.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Modal;
