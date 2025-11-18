import todo from "../assets/todo.png"
import weather from "../assets/weather.png"
import password from "../assets/password.png"
import gsla from "../assets/gsla.png"
import mfc from "../assets/MFC.png"
const projects = [
    {
        image: gsla,
        title: "Global Service and Legal associates ",
        type: "Frontend",
        description: "A complete frontend website for a legal and service consultancy firm, built with React and Tailwind CSS. Includes structured service pages, contact section, responsive layouts, and SEO-friendly design.",
        techStack: ["React", "Tailwind CSS"],
        link: "https://gslassociates.in",
        gitLink: "https://github.com/azlanjamshed/GLOBAL-SERVICES-LEGAL-ASSOCIATES",
    },
    {
        image: mfc,
        title: "MSL 2025 Football League",
        type: "Frontend",
        description: "A responsive football league standings and match-center app built using React and Tailwind CSS, featuring dynamic team data, auto-computed points table, and clean UI with smooth interactions.",
        techStack: ["React", "Tailwind CSS"],
        link: "https://msl-2025-gen2de.netlify.app",
        gitLink: "https://github.com/azlanjamshed/MFC",
    },
    // {
    //     image: todo,
    //     title: "ToDo App",
    //     type: "Frontend",
    //     description: "Remove image backgrounds using React + Express + AI API.",
    //     techStack: ["React", "Tailwind CSS", "Local Storage"],
    //     link: "https://todo-aj.netlify.app",
    //     gitLink: "https://github.com/azlanjamshed/To-Do",
    // },
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

export default projects