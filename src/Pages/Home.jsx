// import React from "react";
// import { FaXTwitter } from "react-icons/fa6";
// import { FaGithub } from "react-icons/fa";

// import { IoMailOutline } from "react-icons/io5";
// import { Link } from "react-scroll";
// import photo from "../assets/photo.jpg";

// const Home = () => {
//   return (
//     <>
//       <div id="home" className="bg-[#0e162a] pt-30 p-10 md:pt-40 ">
//         <div className="flex flex-col  md:flex-row-reverse md:justify-between justify-center items-center gap-10 md:px-[15%]   ">
//           <div className="w-[300px] h-[300px]  object-contain rounded-2xl  overflow-hidden ">
//             <img src={photo} alt="" />
//           </div>
//           <div className="flexflex-col justify-center items-center  gap-5 text-white">
//             <div className="flex items-center justify-center md:justify-start gap-4 mb-8">
//               <a href="https://github.com/azlanjamshed" target="_blank">
//                 <div className="flex items-center justify-center    w-12 h-12 rounded-md  bg-blue-500 text-white px-8 py-3  font-medium transition-all hover:bg-blue-600 hover:scale-105  ">
//                   <FaGithub className="w-6 h-6 absolute" />
//                 </div>
//               </a>
//               <a href="https://x.com/Azlan_Jamshed" target="_blank">
//                 <div className=" flex items-center justify-center      w-12 h-12 rounded-md  bg-blue-500 text-white px-8 py-3 font-medium transition-all hover:bg-blue-600 hover:scale-105 ">
//                   <FaXTwitter className="w-6 h-6 absolute" />
//                 </div>
//               </a>
//             </div>
//             <div className="flex flex-col items-center justify-center md:items-start">
//               <h1 className="text-3xl md:text-5xl font-semibold text-white mb-2 ">
//                 Hi, I'm Azlan
//               </h1>
//               <h3 className="text-xl md:text-2xl text-gray-400 font-medium mb-4">
//                 Web Developer
//               </h3>
//             </div>
//             <div className=" flex items-center justify-center md:justify-start">
//               <Link
//                 to="contact"
//                 smooth={true}
//                 duration={300}
//                 spy={true}
//                 offset={-70}
//                 className="cursor-pointer inline-flex items-center justify-center bg-blue-500 text-white px-8 py-3 rounded-lg font-medium transition-all hover:bg-blue-600 hover:scale-105"
//               >
//                 Contact Me <IoMailOutline className=" ml-3 w-5 h-5 inline" />
//               </Link>
//             </div>
//           </div>
//         </div>
//         <div className="hidden md:flex justify-center mt-12 mb-8">
//           <Link
//             to="about"
//             smooth
//             duration={300}
//             offset={-70}
//             className="flex items-center text-blue-500 font-medium hover:transform hover:translate-y-1 transition-transform cursor-pointer"
//           >
//             {/* <a
//             className="flex items-center text-blue-500 font-medium hover:transform hover:translate-y-1 transition-transform"
//             href="#about"
//           > */}
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="lucide lucide-mouse-pointer text-2xl mr-2"
//               aria-hidden="true"
//             >
//               <path d="M12.586 12.586 19 19"></path>
//               <path d="M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z"></path>
//             </svg>
//             <span className="text-sm mr-2">Scroll down</span>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className="lucide lucide-arrow-down text-xl"
//               aria-hidden="true"
//             >
//               <path d="M12 5v14"></path>
//               <path d="m19 12-7 7-7-7"></path>
//             </svg>
//           </Link>
//           {/* </a> */}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Home;

// import React from "react";
// import { FaXTwitter } from "react-icons/fa6";
// import { FaGithub } from "react-icons/fa";
// import { IoMailOutline } from "react-icons/io5";
// import { Link } from "react-scroll";
// import photo from "../assets/photo.jpg";

// const Home = () => {
//   return (
//     <section
//       id="home"
//       className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900/20 to-slate-900 pt-20 md:pt-52 px-6 lg:px-12"
//     >
//       <div className="max-w-7xl mx-auto flex flex-col lg:flex-row-reverse lg:justify-between items-center gap-12 lg:gap-20">
//         {/* Profile Image */}
//         <div className="relative w-72 h-72 lg:w-96 lg:h-96 flex-shrink-0 mx-auto lg:mx-0">
//           <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-xl -z-10 animate-pulse" />
//           <img
//             src={photo}
//             alt="Azlan Jamshed"
//             className="w-full h-full object-cover rounded-3xl shadow-2xl border-4 border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:rotate-1"
//           />
//         </div>

//         {/* Content */}
//         <div className="text-center lg:text-left lg:max-w-lg flex-1">
//           {/* Social Links */}
//           <div className="flex justify-center lg:justify-start gap-4 mb-12">
//             {[
//               {
//                 icon: FaGithub,
//                 href: "https://github.com/azlanjamshed",
//                 label: "GitHub",
//               },
//               {
//                 icon: FaXTwitter,
//                 href: "https://x.com/Azlan_Jamshed",
//                 label: "Twitter",
//               },
//             ].map(({ icon: Icon, href, label }) => (
//               <a
//                 key={label}
//                 href={href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="group relative w-16 h-16 flex items-center justify-center bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 hover:scale-110 hover:-translate-y-2 shadow-xl hover:shadow-2xl"
//                 aria-label={label}
//               >
//                 <Icon className="w-7 h-7 text-white group-hover:text-blue-400 transition-colors" />
//                 <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity scale-0 group-hover:scale-100" />
//               </a>
//             ))}
//           </div>

//           {/* Greeting & Title */}
//           <div className="space-y-6">
//             <h1 className="bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
//               Hi, I'm{" "}
//               <span className="text-transparent bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text">
//                 Azlan
//               </span>
//             </h1>
//             <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-300 tracking-wide">
//               Web Developer
//             </h2>
//           </div>

//           {/* CTA Button */}
//           <div className="mt-12 flex justify-center lg:justify-start">
//             <Link
//               to="contact"
//               smooth={true}
//               duration={500}
//               spy={true}
//               offset={-100}
//               className="group relative inline-flex items-center px-10 py-5 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold text-lg rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 hover:scale-105 hover:-translate-y-1 border-2 border-transparent hover:border-blue-400/50 backdrop-blur-sm"
//             >
//               <span className="relative z-10 flex items-center gap-3">
//                 Let's Work Together
//                 <IoMailOutline className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
//               </span>
//               <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity" />
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className="hidden lg:flex flex-col items-center mt-24 space-y-4 animate-bounce">
//         <Link
//           to="about"
//           smooth
//           duration={800}
//           offset={-100}
//           className="flex flex-col items-center text-blue-400 hover:text-white font-medium transition-all duration-300 group cursor-pointer"
//         />
//         <div className="w-3 h-20 bg-gradient-to-b from-blue-400 to-transparent rounded-full shadow-lg group-hover:shadow-blue-500/25" />
//         <span className="text-sm mt-2 tracking-wide">Scroll to explore</span>
//       </div>
//     </section>
//   );
// };

// export default Home;

import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { Link } from "react-scroll";
import photo from "../assets/photo.jpg";

const Home = () => {
  return (
    <section id="home" className="bg-[#0e162a] pt-28 md:pt-36 px-6 pb-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center justify-between gap-12">
        {/* Profile Image */}
        <div className="w-[260px] h-[260px] md:w-[320px] md:h-[320px] rounded-2xl overflow-hidden shadow-xl border border-slate-700">
          <img
            src={photo}
            alt="Azlan Jamshed"
            className="w-full h-full object-cover hover:scale-105 transition duration-500"
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left text-white max-w-xl">
          {/* Social Icons */}
          <div className="flex gap-4 mb-8">
            <a
              href="https://github.com/azlanjamshed"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-blue-500 rounded-lg hover:bg-blue-600 hover:scale-105 transition"
            >
              <FaGithub className="w-6 h-6 text-black" />
            </a>

            <a
              href="https://x.com/Azlan_Jamshed"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center bg-blue-500 rounded-lg hover:bg-blue-600 hover:scale-105 transition"
            >
              <FaXTwitter className="w-6 h-6 text-black" />
            </a>
          </div>
          {/* Heading */}
          <h1 className="text-3xl md:text-5xl font-semibold mb-3">
            Hi, I'm Azlan
          </h1>
          <h3 className="text-xl md:text-2xl text-gray-400 font-medium mb-6">
            MERN Stack Developer
          </h3>
          {/* CTA Button */}
          <Link
            to="contact"
            smooth
            duration={300}
            spy
            offset={-70}
            className="cursor-pointer inline-flex items-center bg-blue-500 px-8 py-3 rounded-lg font-medium hover:bg-blue-600 hover:scale-105 transition"
          >
            Contact Me
            <IoMailOutline className="ml-3 w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Scroll Down */}
      <div className="hidden md:flex justify-center mt-16">
        <Link
          to="about"
          smooth
          duration={300}
          offset={-70}
          className="flex items-center text-blue-500 font-medium hover:translate-y-1 transition cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="mr-2"
          >
            <path d="M12.586 12.586 19 19"></path>
            <path d="M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z"></path>
          </svg>

          <span className="text-sm mr-2">Scroll Down</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M12 5v14"></path>
            <path d="m19 12-7 7-7-7"></path>
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default Home;
