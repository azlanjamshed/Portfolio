import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { CgDatabase } from "react-icons/cg";
import { IoCode } from "react-icons/io5";
import { FaTools, FaCloud } from "react-icons/fa";
import { MdStorage } from "react-icons/md";

const Skills = () => {
  return (
    <>
      <section
        id="skill"
        className="py-12 bg-[#0e162a] flex flex-col items-center "
      >
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className=" text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & Expertise
          </h2>
          <span className=" text-lg text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </span>
        </div>

        <div className="w-full px-4 py-10 flex flex-col md:flex-row md:justify-center gap-6 items-center text-center bg-gray-900 text-white">
          {/* Frontend Section */}
          <div className="w-full max-w-md border border-gray-700 rounded-lg p-5 shadow-lg bg-slate-800  hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <details className="group">
              <summary className="flex justify-evenly items-center cursor-pointer list-none text-lg font-semibold">
                <div className=" bg-blue-900/20 p-3 rounded-xl">
                  {" "}
                  <IoCode className="text-blue-400 w-7 h-7" />
                </div>

                <div className="flex flex-col items-start">
                  <span>Frontend Developer</span>
                  {/* <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                    2 year experience
                  </p> */}
                </div>
                <FaChevronDown className="transition-transform duration-300 group-open:rotate-180 text-blue-400" />
              </summary>
              <div className="mt-4 flex flex-wrap justify-center gap-3 text-sm text-gray-300">
                <span className="bg-[#1f2a4c] px-5 py-3 font-medium rounded-2xl hover:text-blue-400 border-[#3b4a79] hover:border-blue-400  border transition-colors duration-300 ease-in-out   ">
                  HTML
                </span>
                <span className="bg-[#1f2a4c] px-5 py-3 font-medium rounded-2xl hover:text-blue-400 border-[#3b4a79] hover:border-blue-400  border transition-colors duration-300 ease-in-out  ">
                  CSS
                </span>
                <span className="bg-[#1f2a4c] px-5 py-3 font-medium rounded-2xl hover:text-blue-400 border-[#3b4a79] hover:border-blue-400  border transition-colors duration-300 ease-in-out  ">
                  JavaScript
                </span>
                <span className="bg-[#1f2a4c] px-5 py-3 font-medium rounded-2xl hover:text-blue-400 border-[#3b4a79] hover:border-blue-400  border transition-colors duration-300 ease-in-out  ">
                  React
                </span>
                <span className="bg-[#1f2a4c] px-5 py-3 font-medium rounded-2xl hover:text-blue-400 border-[#3b4a79] hover:border-blue-400  border transition-colors duration-300 ease-in-out  ">
                  Tailwind CSS
                </span>
              </div>
            </details>
          </div>

          {/* Backend Section */}
          <div className="w-full max-w-md border border-gray-700 rounded-lg p-5 shadow-lg bg-slate-800  hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <details className="group">
              <summary className="flex justify-evenly items-center cursor-pointer list-none text-lg font-semibold">
                <div className=" bg-blue-900/20 p-3 rounded-xl">
                  <CgDatabase className="text-blue-400 w-7 h-7  " />
                </div>
                <div className="flex flex-col items-start">
                  <span>Backend Developer</span>
                  {/* <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                    2 year experience
                  </p> */}
                </div>
                <FaChevronDown className="transition-transform duration-300 group-open:rotate-180 text-blue-400" />
              </summary>
              <div className="mt-4 flex flex-wrap justify-center gap-3 text-sm text-gray-300">
                <span className="bg-[#1f2a4c] px-5 py-3 font-medium rounded-2xl hover:text-blue-400 border-[#3b4a79] hover:border-blue-400  border transition-colors duration-300 ease-in-out ">
                  Node.js
                </span>
                <span className="bg-[#1f2a4c] px-5 py-3 font-medium rounded-2xl hover:text-blue-400 border-[#3b4a79] hover:border-blue-400  border transition-colors duration-300 ease-in-out ">
                  Express.js
                </span>
                <span className="bg-[#1f2a4c] px-5 py-3 font-medium rounded-2xl hover:text-blue-400 border-[#3b4a79] hover:border-blue-400  border transition-colors duration-300 ease-in-out ">
                  REST APIs
                </span>
                <span className="bg-[#1f2a4c] px-5 py-3 font-medium rounded-2xl hover:text-blue-400 border-[#3b4a79] hover:border-blue-400  border transition-colors duration-300 ease-in-out ">
                  MongoDB
                </span>
                {/* <span className="bg-[#1f2a4c] px-5 py-3 font-medium rounded-2xl hover:text-blue-400 border-[#3b4a79] hover:border-blue-400  border transition-colors duration-300 ease-in-out ">
                  MySQL
                </span> */}
              </div>
            </details>
          </div>
          {/* Tools & Workflow */}
          <div className="w-full max-w-md border border-gray-700 rounded-lg p-5 shadow-lg bg-slate-800 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            <details className="group">
              <summary className="flex justify-evenly items-center cursor-pointer list-none text-lg font-semibold">
                <div className="bg-blue-900/20 p-3 rounded-xl">
                  <FaTools className="text-blue-400 w-7 h-7" />
                </div>
                <div className="flex flex-col items-start">
                  <span>Tools & Workflow</span>
                </div>
                <FaChevronDown className="transition-transform duration-300 group-open:rotate-180 text-blue-400" />
              </summary>

              <div className="mt-4 flex flex-wrap justify-center gap-3 text-sm text-gray-300">
                {[
                  "Git",
                  "GitHub",
                  "VS Code",
                  // "Vite",
                  // "Webpack",
                  "Postman",
                  // "Figma (Basic)",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="bg-[#1f2a4c] px-5 py-3 font-medium rounded-2xl hover:text-blue-400 border border-[#3b4a79] hover:border-blue-400 transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </details>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
