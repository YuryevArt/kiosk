import React from "react";
import { ModalBackground, ModalBody } from "./Modal.style";
function Modal({ active, setActive, children }) {
  return (
    <ModalBackground
      active={active}
      onClick={() =>
        setActive((prevState) => {
          return { ...prevState, active: false };
        })
      }
    >
      <ModalBody onClick={(e) => e.stopPropagation()} >{children}</ModalBody>
    </ModalBackground>
  );
}

export default Modal;
