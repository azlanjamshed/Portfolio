

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiLoader, FiSend } from "react-icons/fi";
import { useForm } from "react-hook-form";

const Contact = () => {
  const [isSending, setIsSending] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setIsSending(true);

    const subject = encodeURIComponent(`Portfolio Contact from ${data.name}`);
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`,
    );

    const mailtoLink = `mailto:azlanjamsh@gmail.com?subject=${subject}&body=${body}`;

    toast.info("Opening your email app...", {
      position: "top-center",
      autoClose: 1500,
      theme: "dark",
    });

    setTimeout(() => {
      window.location.href = mailtoLink;
      reset();
      setIsSending(false);
    }, 800);
  };

  return (
    <section
      id="contact"
      className="bg-slate-800 py-16 px-6 flex justify-center"
    >
      <div className="max-w-2xl w-full text-white">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-semibold mb-3">
            Contact Me
          </h2>
          <p className="text-gray-400 text-sm">
            Have a project or opportunity? Feel free to reach out.
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-[#0e162a] rounded-2xl p-8 flex flex-col gap-6 shadow-lg"
        >
          {/* Name */}
          <div>
            <label className="text-sm font-medium">Name</label>
            <input
              type="text"
              className="w-full mt-2 p-3 rounded-md border border-slate-700 bg-slate-800 focus:outline-none focus:border-blue-500"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-medium">Email</label>
            <input
              type="email"
              className="w-full mt-2 p-3 rounded-md border border-slate-700 bg-slate-800 focus:outline-none focus:border-blue-500"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Enter a valid email",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-400 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="text-sm font-medium">Message</label>
            <textarea
              rows="5"
              className="w-full mt-2 p-3 rounded-md border border-slate-700 bg-slate-800 focus:outline-none focus:border-blue-500"
              {...register("message", { required: "Message is required" })}
            />
            {errors.message && (
              <p className="text-red-400 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSending}
            className="w-full flex items-center justify-center gap-3 bg-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-60"
          >
            {isSending ? (
              <>
                Opening Email
                <FiLoader className="animate-spin w-5 h-5" />
              </>
            ) : (
              <>
                Send Message
                <FiSend className="w-5 h-5" />
              </>
            )}
          </button>
        </form>

        <ToastContainer />
      </div>
    </section>
  );
};

export default Contact;
