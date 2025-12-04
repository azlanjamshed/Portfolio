import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

import { IoMailOutline } from "react-icons/io5";
import { Link } from "react-scroll";
import photo from "../assets/photo.jpg";

const Home = () => {
  return (
    <>
      <div id="home" className="bg-[#0e162a] pt-30 p-10 md:pt-40 ">
        <div className="flex flex-col  md:flex-row-reverse md:justify-between justify-center items-center gap-10 md:px-[15%]   ">
          <div className="w-[300px] h-[300px]  object-contain rounded-2xl  overflow-hidden ">
            <img src={photo} alt="" />
          </div>
          <div className="flexflex-col justify-center items-center  gap-5 text-white">
            <div className="flex items-center justify-center md:justify-start gap-4 mb-8">
              <a href="https://github.com/azlanjamshed" target="_blank">
                <div className="flex items-center justify-center    w-12 h-12 rounded-md  bg-blue-500 text-white px-8 py-3  font-medium transition-all hover:bg-blue-600 hover:scale-105  ">
                  <FaGithub className="w-6 h-6 absolute" />
                </div>
              </a>
              <a href="https://x.com/Azlan_Jamshed" target="_blank">
                <div className=" flex items-center justify-center      w-12 h-12 rounded-md  bg-blue-500 text-white px-8 py-3 font-medium transition-all hover:bg-blue-600 hover:scale-105 ">
                  <FaXTwitter className="w-6 h-6 absolute" />
                </div>
              </a>
            </div>
            <div className="flex flex-col items-center justify-center md:items-start">
              <h1 className="text-3xl md:text-5xl font-semibold text-white mb-2 ">
                Hi, I'm Azlan
              </h1>
              <h3 className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-medium mb-4">
                Web Developer
              </h3>
            </div>
            <div className=" flex items-center justify-center md:justify-start">
              <Link
                to="contact"
                smooth={true}
                duration={300}
                spy={true}
                offset={-70}
                className="cursor-pointer inline-flex items-center justify-center bg-blue-500 text-white px-8 py-3 rounded-lg font-medium transition-all hover:bg-blue-600 hover:scale-105"
              >
                Contact Me <IoMailOutline className=" ml-3 w-5 h-5 inline" />
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden md:flex justify-center mt-12 mb-8">
          <a
            className="flex items-center text-blue-500 font-medium hover:transform hover:translate-y-1 transition-transform"
            href="#about"
          >
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
              className="lucide lucide-mouse-pointer text-2xl mr-2"
              aria-hidden="true"
            >
              <path d="M12.586 12.586 19 19"></path>
              <path d="M3.688 3.037a.497.497 0 0 0-.651.651l6.5 15.999a.501.501 0 0 0 .947-.062l1.569-6.083a2 2 0 0 1 1.448-1.479l6.124-1.579a.5.5 0 0 0 .063-.947z"></path>
            </svg>
            <span className="text-sm mr-2">Scroll down</span>
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
              className="lucide lucide-arrow-down text-xl"
              aria-hidden="true"
            >
              <path d="M12 5v14"></path>
              <path d="m19 12-7 7-7-7"></path>
            </svg>
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
