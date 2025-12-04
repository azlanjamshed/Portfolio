import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0e162a] text-gray-300 border-t border-gray-700 py-3">
      <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-4">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()}{" "}
          <span className="font-medium">Azlan Jamshed</span>. All Rights
          Reserved.
        </p>

        <div className="flex gap-6 text-xl">
          <a
            href="https://github.com/azlanjamshed"
            target="_blank"
            className="hover:text-white transition"
          >
            <FaGithub />
          </a>

          {/* <a
            href="https://linkedin.com/in/azlanjamshed"
            target="_blank"
            className="hover:text-white transition"
          >
            <FaLinkedin />
          </a> */}
          <a
            href="https://x.com/Azlan_Jamshed"
            target="_blank"
            className="hover:text-white transition"
          >
            <FaXTwitter />
          </a>

          <a
            href="mailto:azlanjamsh@gmail.com"
            className="hover:text-white transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
