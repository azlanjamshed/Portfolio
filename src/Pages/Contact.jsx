import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiLoader, FiSend } from "react-icons/fi";

import { useForm } from "react-hook-form";

const Contact = () => {
  const [isSending, setIsSending] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    setIsSending(true);

    const subject = encodeURIComponent(`Portfolio Contact from ${data.name}`);
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\nMessage:\n${data.message}`
    );

    const mailtoLink = `mailto:azlanjamsh@gmail.com?subject=${subject}&body=${body}`;

    // show immediate feedback
    toast.info("Opening email composer...", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: "dark",
    });

    // small delay so user sees the toast briefly, then navigate
    setTimeout(() => {
      window.location.href = mailtoLink;
      reset();
    }, 700);

    // Fallback: if the mail composer doesn't open (no mail handler),
    // restore UI after a few seconds so the form isn't stuck.
    // If the user actually left the page, these calls won't matter.
    setTimeout(() => {
      setIsSending(false);
      // You can choose to clear the form on success/fallback:
      // reset();
      // Optionally show a helpful toast if still on page:
      toast.dismiss(); // remove any previous toasts
      toast.warn(
        "If your email client didn't open, make sure a default mail app is configured.",
        { position: "top-center", autoClose: 4000, theme: "dark" }
      );
    }, 4000);
  };

  return (
    <div id="contact" className="bg-[#0e162a] p-5 flex justify-center ">
      <div className="px-4 sm:px-10 md:px-10 lg:px-40 py-10 text-white w-full md:w-2/3 lg:w-1/2">
        <h1 className="text-center text-4xl md:text-5xl font-semibold text-white mb-8">
          Contact
        </h1>

        {isSending ? (
          <div className="text-center text-white p-6">
            <h2 className="text-2xl font-bold mb-2">
              Thanks for contacting me!
            </h2>
            <p>
              Opening your email composer — please send the message from there.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col gap-6 sm:gap-8 hover:shadow-xl transition-shadow duration-300"
          >
            {/* Name Field */}
            <div className="flex flex-col gap-2">
              <label
                className="text-sm sm:text-base font-medium"
                htmlFor="name"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                className="w-full p-3 rounded-md border border-slate-700 bg-slate-900 text-white focus:outline-none focus:border-blue-500"
                {...register("name", { required: true })}
              />
            </div>

            {/* Email Field */}
            <div className="flex flex-col gap-2">
              <label
                className="text-sm sm:text-base font-medium"
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full p-3 rounded-md border border-slate-700 bg-slate-900 text-white focus:outline-none focus:border-blue-500"
                {...register("email", { required: true })}
              />
            </div>

            {/* Message Field */}
            <div className="flex flex-col gap-2">
              <label
                className="text-sm sm:text-base font-medium"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                className="w-full p-3 rounded-md border border-slate-700 bg-slate-900 text-white focus:outline-none focus:border-blue-500 min-h-[100px] sm:min-h-[150px]"
                {...register("message", { required: true })}
              />
            </div>

            {/* Submit Button */}
            <div className="w-full flex justify-center">
              <button
                type="submit"
                disabled={isSending}
                className="w-1/2 p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300 font-semibold flex justify-center items-center gap-3 disabled:opacity-60"
              >
                {isSending ? (
                  <>
                    <span>Opening Email...</span>
                    <FiLoader className="animate-spin w-5 h-5" />
                  </>
                ) : (
                  <>
                    <span>Submit</span>
                    <FiSend className="w-6 h-6" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default Contact;
