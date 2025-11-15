import React from "react";
import ProjectCard from "../Components/ProjectCard";
import todo from "../assets/todo.png";
import weather from "../assets/weather.png";
import password from "../assets/password.png";

const Projects = () => {
  const projects = [
    {
      image: todo,
      title: "ToDo App",
      type: "Frontend",
      description: "Remove image backgrounds using React + Express + AI API.",
      techStack: ["React", "Tailwind CSS", "Local Storage"],
      link: "https://todo-aj.netlify.app",
      gitLink: "https://github.com/azlanjamshed/To-Do",
    },
    {
      image: weather,
      title: "Weather App",
      type: "Frontend",
      description: "Mini blogging platform with CRUD, API, and form handling.",
      techStack: ["HTML", "CSS", "JavaScript", "Weather API"],
      link: "https://weatherapp-aj.netlify.app",
      gitLink: "https://github.com/azlanjamshed/Weather-App",
    },
    {
      image: password,
      title: "Password Generator ",
      type: "Frontend",
      description: "Personal portfolio using React, Tailwind, and ShadCN UI.",
      techStack: ["React", "Tailwind CSS"],
      link: "https://passowrd-generator-aj.netlify.app",
      gitLink: "https://github.com/azlanjamshed/Password-Generator",
    },
  ];
  return (
    <>
      <div id="project" className="bg-slate-800 p-10">
        <div className="container mx-auto px-4 max-w-6xl text-center mb-5">
          <h2 className="text-center text-4xl md:text-5xl font-semibold text-white mb-2">
            Projects
          </h2>
        </div>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            type={project.type}
            description={project.description}
            techStack={project.techStack}
            link={project.link}
            gitLink={project.gitLink}
          />
        ))}
      </div>
    </>
  );
};

export default Projects;
