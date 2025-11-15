import React from "react";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({
  image,
  title,
  description,
  type,
  techStack,
  link,
  gitLink,
}) => {
  const colorMap = {
    React: "bg-blue-300 text-blue-700",
    "Tailwind CSS": "bg-teal-300 text-teal-700",
    "Express.js": "bg-gray-300 text-gray-700",
    "Node.js": "bg-green-300 text-green-700",
    MongoDB: "bg-emerald-300 text-emerald-700",
    HTML: "bg-orange-300 text-orange-700",
    CSS: "bg-blue-400 text-blue-800",
    JavaScript: "bg-yellow-300 text-yellow-700",
    TypeScript: "bg-sky-300 text-sky-700",
    Firebase: "bg-amber-300 text-amber-700",
    // add more as needed
  };
  return (
    <div className="flex flex-col justify-center  items-center  lg:flex-row bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden transition-all duration-300 max-w-5xl mx-auto my-6 p-5">
      {/* Project Image */}
      <div className="lg:w-1/2 w-full p-5  ">
        <img
          src={image} // 🔁 replace with actual image path
          alt="Project Screenshot"
          className="w-full h-full object-cover rounded"
        />
      </div>

      {/* Project Content */}
      <div className="lg:w-1/2 w-full p-6 flex flex-col justify-center">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white ">
          {title}
        </h2>
        <p className="text-gray-600 mb-2">{type}</p>

        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base">
          {description}
        </p>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech, index) => {
            const colorClass = colorMap[tech] || "bg-gray-200 text-gray-800";
            return (
              <span
                key={index}
                className={`px-2 py-1 rounded text-xs sm:text-sm ${colorClass}`}
              >
                {tech}
              </span>
            );
          })}
        </div>

        {/* Link */}
        <div className="flex  gap-5">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 text-white px-4 py-2 rounded transition-all hover:bg-blue-600 hover:scale-105 w-fit text-sm sm:text-base"
          >
            View Project
          </a>
          <div className="bg-blue-500 py-2 px-2 rounded transition-all hover:bg-blue-600 hover:scale-105 w-fit">
            <a href={gitLink} target="_blank" rel="noopener noreferrer">
              <FaGithub className="w-6 h-6  " />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
