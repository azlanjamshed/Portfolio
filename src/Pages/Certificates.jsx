// import { useEffect, useState } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import Genai from "../assets/certificates/Genai.pdf";

// import dataAnalyticsImage from "../assets/certificates/Data-Analytics.jpg";
// import dataAnalyticsPdf from "../assets/certificates/Data-Analytics.pdf";

// const certificates = [
//   {
//     title: "Data Analytics Job Simulation",
//     issuer: "Daikibo Industrials",
//     date: "2025",
//     description:
//       "Analyzed operational telemetry data and gender pay equality using Tableau and Excel.",
//     image: dataAnalyticsImage, // preview
//     pdf: dataAnalyticsPdf, // add your image path
//   },
//   {
//     title: "Frontend Development",
//     issuer: "Sheryians Coding School",
//     date: "2024",
//     description:
//       "Hands-on experience with React, Tailwind CSS, and modern frontend tools.",
//     image: dataAnalyticsImage, // preview
//     pdf: dataAnalyticsPdf, // add your image path
//   },
//   {
//     title: "JavaScript Mastery",
//     issuer: "Online Certification",
//     date: "2024",
//     description:
//       "Advanced JavaScript concepts including ES6+, async programming, and logic building.",
//     image: dataAnalyticsImage, // preview
//     pdf: dataAnalyticsPdf, // add your image path
//   },
// ];

// export default function Certificates() {
//   const [current, setCurrent] = useState(0);

//   // Auto slide every 4 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % certificates.length);
//     }, 8000);

//     return () => clearInterval(interval);
//   }, []);

//   const prevSlide = () => {
//     setCurrent(current === 0 ? certificates.length - 1 : current - 1);
//   };

//   const nextSlide = () => {
//     setCurrent((current + 1) % certificates.length);
//   };

//   const cert = certificates[current];

//   return (
//     <section className="max-w-4xl mx-auto px-4 py-16">
//       <h2 className="text-3xl font-bold text-center mb-10">Certificates</h2>

//       <div className="relative group overflow-hidden rounded-2xl shadow-lg">
//         {/* Certificate Image */}
//         {/* <img
//           src={cert.image}
//           alt={cert.title}
//           className="w-full h-[300px] object-cover"
//         />
//          */}

//         <img
//           src={cert.image}
//           alt={cert.title}
//           loading="lazy"
//           className="w-full h-[400px] object-contain rounded-xl"
//         />

//         {/* Overlay (Hover on desktop, always visible on mobile) */}
//         <a
//           href={cert.pdf}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="block"
//         >
//           <div
//             className="
//             absolute inset-0 bg-black/70 text-white p-6
//             opacity-100 md:opacity-0 md:group-hover:opacity-100
//             transition-opacity duration-300
//             flex flex-col justify-end
//           "
//           >
//             <h3 className="text-xl font-semibold">{cert.title}</h3>
//             <p className="text-sm text-gray-300">
//               {cert.issuer} • {cert.date}
//             </p>
//             <p className="text-sm mt-2">{cert.description}</p>
//           </div>
//         </a>

//         {/* Navigation Buttons */}
//         <button
//           onClick={prevSlide}
//           className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full"
//         >
//           <ChevronLeft />
//         </button>

//         <button
//           onClick={nextSlide}
//           className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full"
//         >
//           <ChevronRight />
//         </button>
//       </div>

//       {/* Dots */}
//       <div className="flex justify-center mt-6 gap-2">
//         {certificates.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => setCurrent(i)}
//             className={`h-2 w-2 rounded-full ${
//               i === current ? "bg-black" : "bg-gray-400"
//             }`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// }
import { useEffect, useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import reactUdemyImage from "../assets/certificates/React.jpg";
import reactUdemyPdf from "../assets/certificates/React.pdf";

import genAiImage from "../assets/certificates/IntroToGenAi.jpg";
import genAiPdf from "../assets/certificates/IntroToGenAi.pdf";

import dataAnalyticsImage from "../assets/certificates/Data-Analytics.jpg";
import dataAnalyticsPdf from "../assets/certificates/Data-Analytics.pdf";

const certificates = [
  {
    title: "React – Complete Developer Course with Hands-On Projects",
    issuer: "Udemy",
    date: "September 2025",
    description:
      "Completed a comprehensive React course covering components, hooks, state management, and hands-on project development.",
    image: reactUdemyImage,
    pdf: reactUdemyPdf,
  },
  {
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte (Forage)",
    date: "December 2025",
    description:
      "Completed practical tasks involving data analysis and forensic technology, including telemetry analysis and business-focused insights.",
    image: dataAnalyticsImage,
    pdf: dataAnalyticsPdf,
  },
  {
    title: "Introduction to Generative AI Studio",
    issuer: "Google Cloud (via Simplilearn SkillUp)",
    date: "December 2025",
    description:
      "Learned the fundamentals of Generative AI, prompt design, and practical usage of Generative AI Studio for real-world applications.",
    image: genAiImage,
    pdf: genAiPdf,
  },
];

export default function Certificates() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);

  // Start auto slide
  const startAutoSlide = () => {
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % certificates.length);
      }, 5000);
    }
  };

  // Stop auto slide
  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const prevSlide = () => {
    stopAutoSlide();
    setCurrent((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));
    startAutoSlide();
  };

  const nextSlide = () => {
    stopAutoSlide();
    setCurrent((prev) => (prev + 1) % certificates.length);
    startAutoSlide();
  };

  const cert = certificates[current];

  return (
    <div id="certificates" className="bg-[#0e162a] p-3 ">
      <h2 className="text-center text-4xl md:text-5xl font-semibold text-white mb-2">
        Certificates
      </h2>
      <section className="max-w-4xl mx-auto px-4 py-10 bg-slate-800 rounded-2xl">
        {/* <h2 className="text-center text-4xl md:text-5xl font-semibold text-white mb-2">
          Certificates
        </h2> */}

        <div
          className="relative group overflow-hidden rounded-2xl shadow-lg"
          onMouseEnter={stopAutoSlide}
          onMouseLeave={startAutoSlide}
        >
          {/* Certificate Image */}
          {/* <img
            src={cert.image}
            alt={cert.title}
            loading="lazy"
            className="w-full h-[400px] object-contain rounded-xl "
          />

          {/* Overlay */}
          {/* <a href={cert.pdf} target="_blank" rel="noopener noreferrer">
            <div
              className="
              absolute inset-0 bg-black/70 text-white p-6
              opacity-100 md:opacity-0 md:group-hover:opacity-100
              transition-opacity duration-300
              flex flex-col justify-end
            "
            >
              <h3 className="text-xl font-semibold">{cert.title}</h3>
              <p className="text-sm text-gray-300">
                {cert.issuer} • {cert.date}
              </p>
              <p className="text-sm mt-2">{cert.description}</p>
            </div>
          </a> */}
          <img
            src={cert.image}
            alt={cert.title}
            loading="lazy"
            className="w-full h-[400px] object-contain rounded-xl"
          />

          {/* Desktop Overlay (hover only) */}
          <a href={cert.pdf} target="_blank" rel="noopener noreferrer">
            <div
              className="
      hidden md:flex
      absolute inset-0 bg-black/70 text-white p-6
      opacity-0 group-hover:opacity-100
      transition-opacity duration-300
      flex-col justify-end
    "
            >
              <h3 className="text-xl font-semibold">{cert.title}</h3>
              <p className="text-sm text-gray-300">
                {cert.issuer} • {cert.date}
              </p>
              <p className="text-sm mt-2">{cert.description}</p>
            </div>
          </a>

          {/* Mobile Details (below image) */}
          <div className="block md:hidden bg-[#0e162a] text-white p-4 rounded-b-xl">
            <h3 className="text-lg font-semibold">{cert.title}</h3>
            <p className="text-sm text-gray-400">
              {cert.issuer} • {cert.date}
            </p>
            <p className="text-sm mt-2">{cert.description}</p>

            <a
              href={cert.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-blue-400 underline"
            >
              View Certificate
            </a>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full"
          >
            <ChevronRight />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 gap-2">
          {certificates.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 w-2 rounded-full ${
                i === current ? "bg-black" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
