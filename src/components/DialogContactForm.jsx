"use client";

import ContactForm from "./ContactForm";

const DialogContactForm = () => {
  function openModal() {
    const modal = document.querySelector("#dialog-contactform");
    modal.showModal();
  }

  function closeModal() {
    const modal = document.querySelector("#dialog-contactform");
    modal.close();
  }

  return (
    <>
      <span
        className="text-slate-600 dark:text-white/80 underline cursor-pointer
          "
        onClick={openModal}
      >
        stephane@tougard.com
      </span>
      {/* popup for contact form */}
      <dialog id="dialog-contactform">
        <div className="relative">
          <ContactForm />
          <button className="absolute top-2 right-2" onClick={closeModal}>
            X
          </button>
        </div>
      </dialog>
    </>
  );
};

export default DialogContactForm;
