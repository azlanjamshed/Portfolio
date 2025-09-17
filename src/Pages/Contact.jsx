import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiLoader } from "react-icons/fi";

import { useForm } from "react-hook-form";
import { FiSend } from "react-icons/fi";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [isSending, setIsSending] = useState(false);
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    setIsSending(true);
    emailjs
      .send(
        "service_m293owo", // replace with your service ID
        "template_obcjbra", // replace with your template ID
        data,
        "AtQ6phyvkVydr7e_N" // replace with your public key
      )
      .then(
        (result) => {
          toast.success("Message sent successfully! 🚀", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
          reset(); // clear the form
        },
        (error) => {
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            theme: "colored",
          });
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };
  return (
    <div id="contact" className="bg-[#0e162a] p-5  flex justify-center ">
      <div className="px-4 sm:px-10 md:px-10 lg:px-40 py-10 text-white md:w-1/2 mb-40">
        <h1 className="text-center text-4xl md:text-5xl font-semibold text-white mb-8">
          Contact
        </h1>
        {isSending ? (
          <div className="text-center text-white p-6">
            <h2 className="text-2xl font-bold mb-2">
              Thanks for contacting me!
            </h2>
            <p>I'll get back to you shortly.</p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-slate-800  rounded-2xl p-6 sm:p-8 flex flex-col gap-6 sm:gap-8 hover:shadow-xl transition-shadow duration-300"
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
                //   placeholder="Your Name"
                className="w-full p-3 rounded-md border border-slate-700 bg-slate-900 text-white focus:outline-none focus:border-blue-500"
                {...register("name", { required: true })}
              />
            </div>

            {/* Email Field */}
            <div className="flex flex-col gap-2">
              <label
                className="text-sm sm:text-base font-medium"
                htmlFor="mobile"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                //   placeholder="123@abc"
                className="w-full p-3 rounded-md border border-slate-700 bg-slate-900 text-white focus:outline-none focus:border-blue-500"
                {...register("email", { required: true })}
              />
            </div>

            {/* Email Field
          <div className="flex flex-col gap-2">
            <label className="text-sm sm:text-base font-medium" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Your Email"
              className="w-full p-3 rounded-md border border-slate-700 bg-slate-900 text-white focus:outline-none focus:border-blue-500"
              {...register("email", { required: true })}
            />
          </div> */}

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
                className="w-1/2 p-3  bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300 font-semibold flex justify-center items-center gap-3"
                disabled={isSending}
              >
                {isSending ? (
                  <>
                    <span>Sending...</span>
                    <FiLoader className="animate-spin w-5 h-5" />
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
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
