

import React, { useState } from "react";
import { IoDownloadOutline } from "react-icons/io5";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { Link } from "react-scroll";
import CV from "../assets/Azlan_Jamshed.pdf";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { to: "home", label: "Home" },
    { to: "about", label: "About" },
    { to: "skill", label: "Skills" },
    { to: "project", label: "Projects" },
    { to: "certificates", label: "Certificates" },
    { to: "contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-[#0e162a]/90 border-b border-slate-700">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-4 text-white">
        {/* Logo */}
        {/* <h1 className="text-lg md:text-xl font-semibold tracking-wide">
          <Link
            to="home"
            smooth
            duration={300}
            offset={-70}
            className="cursor-pointer hover:text-blue-400 transition "
            onClick={() => setOpen(false)}
          >
            Azlan Jamshed
          </Link>
        </h1> */}
        <h1 className="text-lg md:text-xl font-semibold tracking-wide">
          <Link
            to="home"
            smooth
            duration={300}
            offset={-70}
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 cursor-pointer group"
          >
            {/* AJ Logo */}
            <span className="flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-sm group-hover:scale-110 transition">
              AJ
            </span>

            {/* Full Name */}
            <span className="bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent font-semibold tracking-wide">
              Azlan Jamshed
            </span>
          </Link>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-sm md:text-base">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth
                duration={300}
                offset={-70}
                spy
                activeClass="text-blue-400 underline "
                className="cursor-pointer hover:text-blue-400 transition"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CV Button */}
        <a
          href={CV}
          download
          className="hidden md:flex items-center gap-2 bg-blue-500 px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 hover:scale-105 transition"
        >
          <IoDownloadOutline className="w-5 h-5" />
          CV
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl text-white"
        >
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-[#0e162a] text-white px-6 overflow-hidden transition-all duration-300 ${
          open ? "max-h-[400px] py-6" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth
              duration={300}
              offset={-70}
              className="cursor-pointer text-lg hover:text-blue-400 transition"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          {/* Mobile CV */}
          <a
            href={CV}
            download
            className="inline-flex items-center gap-2 bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition w-fit"
            onClick={() => setOpen(false)}
          >
            <IoDownloadOutline className="w-5 h-5" />
            Download CV
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
