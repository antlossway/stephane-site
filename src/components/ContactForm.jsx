"use client";

import React, { useState } from "react";
import FormInput from "./FormInput";
import Loader from "./Loader";

const inputs = [
  {
    id: 1,
    name: "name",
    label: "Name",
    type: "text",
    placeholder: "How to address you?",
  },
  {
    id: 2,
    name: "email",
    label: "Email",
    type: "email",
    placehoder: "john@mail.com",
    errorMessage: "Please use a valid email address",
    required: true,
  },
  {
    id: 3,
    name: "message",
    label: "Message",
    type: "textarea",
    placehoder: "Hi",
    // pattern does not work for textarea
    // pattern: "\w{3,16}",
    errorMessage: "Please type your message",
    required: true,
  },
];

export default function ContactForm() {
  const [formStatus, setformStatus] = useState("");
  const [sent, setSent] = useState(false);
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const reset = () => {
    //reset form
    setValues({
      name: "",
      email: "",
      message: "",
    });

    setformStatus("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setformStatus("loading");
    const res = await fetch("/api/sendmail", {
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        //client component can not read .env
        subject: `${values.name} from ${values.email} send you a message`,
        message: values.message,
        type: "newMessage",
      }),
    });

    if (res.ok) {
      setSent(true);
      setformStatus("sent");
      reset();
    } else {
      setformStatus("error");
    }

    // simulate delay
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    // setSent(true)
    // reset()
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-md mx-auto px-4 pt-4 border rounded-lg border-gray-300 shadow-md ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-stretch gap-4"
      >
        <h1 className="text-lg font-semibold mb-2">Send me a message</h1>
        <div className="flex flex-col items-stretch gap-2">
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
        </div>

        <button
          className=" px-4 py-3 w-full bg-gray-700 text-white font-semibold hover:bg-gray-500 active:translate-y-1 transition-all
            disabled:bg-gray-400 disabled:cursor-not-allowed"
          type="submit"
          disabled={formStatus === "loading"}
        >
          Send
        </button>

        {formStatus === "error" && (
          <div className="text-red-500">
            Oops, there was an error sending your email. Please try again.
          </div>
        )}

        {/* If the form was submitted successfully, notify the user */}
        {sent && (
          <p className="mt-4 mb-2 text-center">
            Thank you, I will come back to you soon!
          </p>
        )}

        {formStatus === "loading" && (
          <div className="self-center">
            <Loader />
          </div>
        )}
      </form>
    </div>
  );
}
