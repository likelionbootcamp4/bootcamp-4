import { useState } from "react";
import Modal from "./Modal";
import Offcanvas from "./Offcanvas";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  function handleModalOpen() {
    setOpen(true);
  }

  function handleModalClose() {
    setOpen(false);
  }

  function handleOffcanvasOpen() {
    setShow(true);
  }
  function handleOffcanvasClose() {
    setShow(false);
  }

  return (
    <div>
      <button onClick={handleModalOpen}>Click</button>
      <Modal open={open} onModalClose={handleModalClose} />

      <button onMouseOver={handleOffcanvasOpen}>Click Offcanvas</button>
      <Offcanvas open={show} onOffcanvasClose={handleOffcanvasClose} />
    </div>
  );
}
