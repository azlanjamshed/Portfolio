import React, { useRef, useState } from "react";
import { IoMailOutline } from "react-icons/io5";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { Link } from "react-scroll";
import CV from "../assets/Azlan_Jamshed.pdf";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  const navLinks = [
    { to: "home", label: "Home" },
    { to: "about", label: "About" },
    { to: "skill", label: "Skills" },
    { to: "project", label: "Projects" },
    { to: "certificates", label: "Certificates" },
    { to: "contact", label: "Contact Me" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#1c293c] shadow-2xl">
      <div
        ref={menuRef}
        className="flex items-center justify-between px-10 md:px-10 py-3 text-white"
      >
        {/* Logo */}
        <h1 className="text-xl font-semibold">
          <Link
            to="home"
            smooth
            duration={300}
            offset={-70}
            className="cursor-pointer"
            onClick={() => setOpen(false)}
          >
            Azlan Jamshed
          </Link>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-base">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth
                duration={300}
                offset={-70}
                spy
                activeClass="text-blue-400"
                className="cursor-pointer hover:text-blue-400"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Download CV (Desktop) */}
        <a
          href={CV}
          download
          className="hidden md:flex items-center bg-blue-500 px-3 py-2 rounded-lg hover:bg-blue-600 transition"
        >
          <IoMailOutline className="w-5 h-5" />
        </a>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden text-3xl"
        >
          {open ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          className="md:hidden bg-[#1c293c] text-white px-6 py-6 space-y-5"
          onClick={(e) => e.stopPropagation()}
        >
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth
              duration={300}
              offset={-70}
              className="block cursor-pointer text-lg hover:text-blue-400"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          {/* Mobile CV Button */}
          <a
            href={CV}
            download
            className="inline-flex items-center gap-2 bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            onClick={() => setOpen(false)}
          >
            <IoMailOutline className="w-5 h-5" />
            Download CV
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
