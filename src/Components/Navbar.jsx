// import React from "react";
// import { IoMailOutline } from "react-icons/io5";
// import { Link } from "react-scroll";
// import CV from "../assets/Azlan_Jamshed.pdf";

// const Navbar = () => {
//   return (
//     <>
//       <header>
//         <div className="text-white flex  justify-evenly items-center bg-[#1c293c] p-2   shadow-2xl text-xl  fixed top-0 left-0 w-full z-50">
//           <div>
//             <h1>
//               <Link
//                 to="home"
//                 smooth={true}
//                 duration={300}
//                 spy={true}
//                 offset={-70}
//                 className="cursor-pointer"
//               >
//                 Azlan Jamshed{" "}
//               </Link>
//             </h1>
//           </div>
//           <div className="hidden md:block">
//             <ul className="flex gap-10 text-base">
//               <l1>
//                 {/* <a href="#home">Home</a> */}
//                 <Link
//                   to="home"
//                   smooth={true}
//                   duration={300}
//                   spy={true}
//                   offset={-70}
//                   activeClass="text-blue-500"
//                   className="cursor-pointer hover:text-blue-400 "
//                 >
//                   Home
//                 </Link>
//               </l1>
//               <l1>
//                 <Link
//                   to="about"
//                   smooth={true}
//                   duration={300}
//                   spy={true}
//                   offset={-70}
//                   activeClass="text-blue-500"
//                   className="cursor-pointer hover:text-blue-400"
//                 >
//                   About
//                 </Link>
//               </l1>
//               <l1>
//                 <Link
//                   to="skill"
//                   smooth={true}
//                   duration={300}
//                   spy={true}
//                   offset={-70}
//                   activeClass="text-blue-500"
//                   className="cursor-pointer hover:text-blue-400"
//                 >
//                   Skills
//                 </Link>
//               </l1>
//               <l1>
//                 <Link
//                   to="project"
//                   smooth={true}
//                   duration={300}
//                   spy={true}
//                   offset={-70}
//                   activeClass="text-blue-500"
//                   className="cursor-pointer hover:text-blue-400"
//                 >
//                   Projects
//                 </Link>
//               </l1>
//               <l1>
//                 <Link
//                   to="certificates"
//                   smooth={true}
//                   duration={300}
//                   spy={true}
//                   offset={-70}
//                   activeClass="text-blue-500"
//                   className="cursor-pointer hover:text-blue-400"
//                 >
//                   Certificates
//                 </Link>
//               </l1>
//               <l1>
//                 <Link
//                   to="contact"
//                   smooth={true}
//                   duration={300}
//                   spy={true}
//                   offset={-70}
//                   activeClass="text-blue-500"
//                   className="cursor-pointer hover:text-blue-400"
//                 >
//                   Contact Me
//                 </Link>
//               </l1>
//             </ul>
//           </div>
//           {/* <div className="bg-blue-600 p-2 rounded-xl items-center ">
//             <span> Contact Me</span>
//             <IoMailOutline className=" ml-3 w-7 h-7 inline" />
//           </div> */}
//           <div className=" flex items-center justify-center md:justify-start">
//             <a
//               className="items-center bg-blue-500 text-white px-3 py-2 rounded-lg   transition-all hover:bg-blue-600 hover:scale-105"
//               href={CV}
//               download
//             >
//               <IoMailOutline className=" w-5 h-5 inline" />
//             </a>
//           </div>
//         </div>
//       </header>
//     </>
//   );
// };

// export default Navbar;

import React, { useEffect, useRef, useState } from "react";
import { IoMailOutline } from "react-icons/io5";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { Link } from "react-scroll";
import CV from "../assets/Azlan_Jamshed.pdf";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
        <div className="md:hidden bg-[#1c293c] text-white px-6 py-6 space-y-5">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              smooth
              duration={300}
              offset={-70}
              spy
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
