"use client";

import Image from "next/image";
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

          {/* close button */}
          <button
            className="absolute top-4 right-4 w-[20px] h-[20px]"
            onClick={closeModal}
          >
            <Image src="/img/close.svg" alt="close" fill />
          </button>
        </div>
      </dialog>
    </>
  );
};

export default DialogContactForm;
