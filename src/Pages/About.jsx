import CV from "../assets/Azlan_Jamshed.pdf";
const About = () => {
  return (
    <>
      <section id="about" className="py-12 bg-slate-800">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-center text-4xl md:text-5xl font-semibold text-white mb-2">
            About Me
          </h2>
          <span className="text-lg text-gray-400 max-w-2xl mx-auto">
            My Introduction
          </span>
        </div>
        <div className="flex flex-col md:flex-row gap-10 justify-center items-center p-10 md:gap-56 ">
          <div>
            <img
              className=""
              src="https://fernandocastrejon.com/_next/image?url=%2Fabout.png&w=750&q=75"
              alt=""
              width={350}
              height={350}
            />
          </div>
          <div className="text-center lg:text-left">
            <p className="text-gray-300 mb-8 leading-7 max-w-2xl mx-auto lg:mx-0">
              I am an Enthusiastic web developer with a strong passion for
              creating modern, responsive, and user-friendly websites. My
              expertise lies in front-end development, where I enjoy
              transforming ideas into interactive digital experiences using
              clean code and creative design. With a keen eye for detail and a
              constant drive to learn new technologies, I focus on building
              interfaces that not only look great but also deliver smooth
              functionality and excellent user experience.
            </p>
            <div className="flex justify-center lg:justify-start">
              <a
                className="inline-flex items-center bg-blue-500 text-white px-8 py-3 rounded-lg font-medium transition-all hover:bg-blue-600 hover:scale-105"
                href={CV}
                download
              >
                Download CV
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-download ml-2 w-5 h-5"
                  aria-hidden="true"
                >
                  <path d="M12 15V3"></path>
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <path d="m7 10 5 5 5-5"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

// import React from "react";
// import CV from "../assets/Azlan_Jamshed.pdf";

// const About = () => {
//   return (
//     <section
//       id="about"
//       className="py-24 lg:py-32 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden"
//     >
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-10">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
//       </div>

//       <div className="container mx-auto px-6 lg:px-12 max-w-7xl relative z-10">
//         {/* Section Header */}
//         <div className="text-center mb-20 lg:mb-28">
//           <h2 className="bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent text-5xl lg:text-7xl font-bold mb-4 tracking-tight">
//             About Me
//           </h2>
//           <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
//             Crafting digital experiences with passion and precision
//           </p>
//         </div>

//         {/* Content Grid */}
//         <div className="grid lg:grid-cols-2 gap-12 lg:gap-20  items-center justify-items-center lg:justify-items-start">
//           {/* Profile Image */}
//           <div className="relative order-2 lg:order-1 mx-auto lg:mx-0 w-80 h-80 lg:w-96 lg:h-96 group">
//             <img
//               src="https://fernandocastrejon.com/_next/image?url=%2Fabout.png&w=750&q=75"
//               alt="Azlan Jamshed - Web Developer"
//               className="w-full h-full object-contain rounded-3xl shadow-2xl border-4 border-white/10 group-hover:border-white/30 transition-all duration-700 group-hover:scale-105 group-hover:rotate-3"
//               width={384}
//               height={384}
//             />
//             <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
//           </div>

//           {/* Content */}
//           <div className="order-1 lg:order-2 text-center lg:text-left max-w-xl lg:max-w-lg space-y-8">
//             <div className="space-y-6">
//               <p className="text-lg lg:text-xl text-gray-300 leading-relaxed tracking-wide">
//                 I'm an enthusiastic{" "}
//                 <span className="text-blue-400 font-semibold">
//                   web developer
//                 </span>{" "}
//                 with a strong passion for creating modern, responsive, and
//                 user-friendly websites.
//               </p>
//               <p className="text-lg lg:text-xl text-gray-300 leading-relaxed tracking-wide">
//                 My expertise lies in{" "}
//                 <span className="text-purple-400 font-semibold">
//                   front-end development
//                 </span>
//                 , where I transform ideas into interactive digital experiences
//                 using clean code and creative design.
//               </p>
//               <p className="text-lg lg:text-xl text-gray-300 leading-relaxed tracking-wide">
//                 With a keen eye for detail and constant drive to learn new
//                 technologies, I build interfaces that deliver smooth
//                 functionality and exceptional user experience.
//               </p>
//             </div>

//             {/* Skills Stats */}
//             <div className="grid grid-cols-2 gap-6 mb-10 lg:mb-0">
//               <div className="text-center lg:text-left space-y-2">
//                 <div className="text-3xl lg:text-4xl font-bold text-blue-400">
//                   3+
//                 </div>
//                 <div className="text-sm text-gray-500 uppercase tracking-wider">
//                   Years Experience
//                 </div>
//               </div>
//               <div className="text-center lg:text-left space-y-2">
//                 <div className="text-3xl lg:text-4xl font-bold text-purple-400">
//                   50+
//                 </div>
//                 <div className="text-sm text-gray-500 uppercase tracking-wider">
//                   Projects Completed
//                 </div>
//               </div>
//             </div>

//             {/* CTA Button */}
//             <div className="flex justify-center lg:justify-start pt-4">
//               <a
//                 href={CV}
//                 download
//                 className="group relative inline-flex items-center px-10 py-5 bg-gradient-to-r from-blue-500 via-blue-600 to-purple-600 text-white font-semibold text-lg rounded-2xl shadow-2xl hover:shadow-blue-500/50 transition-all duration-500 hover:scale-105 hover:-translate-y-1 border border-transparent hover:border-blue-400/50 backdrop-blur-sm overflow-hidden"
//               >
//                 <span className="relative z-10 flex items-center gap-3">
//                   Download CV
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
//                   >
//                     <path d="M12 15V3"></path>
//                     <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
//                     <path d="m7 10 5 5 5-5"></path>
//                   </svg>
//                 </span>
//                 <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent -skew-x-12 -translate-x-20 group-hover:translate-x-24 transition-transform duration-1000" />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;
