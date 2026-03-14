// import { useEffect, useState, useRef } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import reactUdemyImage from "../assets/certificates/React.jpg";
// import reactUdemyPdf from "../assets/certificates/React.pdf";

// import genAiImage from "../assets/certificates/IntroToGenAi.jpg";
// import genAiPdf from "../assets/certificates/IntroToGenAi.pdf";

// import dataAnalyticsImage from "../assets/certificates/Data-Analytics.jpg";
// import dataAnalyticsPdf from "../assets/certificates/Data-Analytics.pdf";
// import nodeJSImage from "../assets/certificates/NodeJS.jpg";
// import nodeJSPdf from "../assets/certificates/NodeJS.pdf";

// const certificates = [
//   {
//     title: "React – Complete Developer Course with Hands-On Projects",
//     issuer: "Udemy",
//     date: "September 2025",
//     description:
//       "Completed a comprehensive React course covering components, hooks, state management, and hands-on project development.",
//     image: reactUdemyImage,
//     pdf: reactUdemyPdf,
//   },
//   {
//     title: "Node.js – All You Need to Know with Practical Project",
//     issuer: "Udemy",
//     date: "December 2025",
//     description:
//       "Completed an in-depth Node.js course covering core concepts, backend development, and building practical projects using Node.js.",
//     image: nodeJSImage,
//     pdf: nodeJSPdf,
//   },
//   {
//     title: "Data Analytics Job Simulation",
//     issuer: "Deloitte (Forage)",
//     date: "December 2025",
//     description:
//       "Completed practical tasks involving data analysis and forensic technology, including telemetry analysis and business-focused insights.",
//     image: dataAnalyticsImage,
//     pdf: dataAnalyticsPdf,
//   },
//   {
//     title: "Introduction to Generative AI Studio",
//     issuer: "Google Cloud (via Simplilearn SkillUp)",
//     date: "December 2025",
//     description:
//       "Learned the fundamentals of Generative AI, prompt design, and practical usage of Generative AI Studio for real-world applications.",
//     image: genAiImage,
//     pdf: genAiPdf,
//   },
// ];

// export default function Certificates() {
//   const [current, setCurrent] = useState(0);
//   const intervalRef = useRef(null);

//   // Start auto slide
//   const startAutoSlide = () => {
//     if (!intervalRef.current) {
//       intervalRef.current = setInterval(() => {
//         setCurrent((prev) => (prev + 1) % certificates.length);
//       }, 5000);
//     }
//   };

//   // Stop auto slide
//   const stopAutoSlide = () => {
//     if (intervalRef.current) {
//       clearInterval(intervalRef.current);
//       intervalRef.current = null;
//     }
//   };

//   useEffect(() => {
//     startAutoSlide();
//     return () => stopAutoSlide();
//   }, []);

//   const prevSlide = () => {
//     stopAutoSlide();
//     setCurrent((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));
//     startAutoSlide();
//   };

//   const nextSlide = () => {
//     stopAutoSlide();
//     setCurrent((prev) => (prev + 1) % certificates.length);
//     startAutoSlide();
//   };

//   const cert = certificates[current];

//   return (
//     <div id="certificates" className="bg-[#0e162a] p-3 ">
//       <h2 className="text-center text-4xl md:text-5xl font-semibold text-white mb-2">
//         Certificates
//       </h2>
//       <section className="max-w-4xl mx-auto px-4 py-10 bg-slate-800 rounded-2xl">
//         {/* <h2 className="text-center text-4xl md:text-5xl font-semibold text-white mb-2">
//           Certificates
//         </h2> */}

//         <div
//           className="relative group overflow-hidden rounded-2xl shadow-lg"
//           onMouseEnter={stopAutoSlide}
//           onMouseLeave={startAutoSlide}
//         >
//           {/* Certificate Image */}
//           {/* <img
//             src={cert.image}
//             alt={cert.title}
//             loading="lazy"
//             className="w-full h-[400px] object-contain rounded-xl "
//           />

//           {/* Overlay */}
//           {/* <a href={cert.pdf} target="_blank" rel="noopener noreferrer">
//             <div
//               className="
//               absolute inset-0 bg-black/70 text-white p-6
//               opacity-100 md:opacity-0 md:group-hover:opacity-100
//               transition-opacity duration-300
//               flex flex-col justify-end
//             "
//             >
//               <h3 className="text-xl font-semibold">{cert.title}</h3>
//               <p className="text-sm text-gray-300">
//                 {cert.issuer} • {cert.date}
//               </p>
//               <p className="text-sm mt-2">{cert.description}</p>
//             </div>
//           </a> */}
//           <img
//             src={cert.image}
//             alt={cert.title}
//             loading="lazy"
//             className="w-full h-[400px] object-contain rounded-xl"
//           />

//           {/* Desktop Overlay (hover only) */}
//           <a href={cert.pdf} target="_blank" rel="noopener noreferrer">
//             <div
//               className="
//       hidden md:flex
//       absolute inset-0 bg-black/70 text-white p-6
//       opacity-0 group-hover:opacity-100
//       transition-opacity duration-300
//       flex-col justify-end
//     "
//             >
//               <h3 className="text-xl font-semibold">{cert.title}</h3>
//               <p className="text-sm text-gray-300">
//                 {cert.issuer} • {cert.date}
//               </p>
//               <p className="text-sm mt-2">{cert.description}</p>
//             </div>
//           </a>

//           {/* Mobile Details (below image) */}
//           <div className="block md:hidden bg-[#0e162a] text-white p-4 rounded-b-xl">
//             <h3 className="text-lg font-semibold">{cert.title}</h3>
//             <p className="text-sm text-gray-400">
//               {cert.issuer} • {cert.date}
//             </p>
//             <p className="text-sm mt-2">{cert.description}</p>

//             <a
//               href={cert.pdf}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-block mt-3 text-blue-400 underline"
//             >
//               View Certificate
//             </a>
//           </div>

//           {/* Navigation Buttons */}
//           <button
//             onClick={prevSlide}
//             className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full"
//           >
//             <ChevronLeft />
//           </button>
//           <button
//             onClick={nextSlide}
//             className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full"
//           >
//             <ChevronRight />
//           </button>
//         </div>

//         {/* Dots */}
//         <div className="flex justify-center mt-6 gap-2">
//           {certificates.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => setCurrent(i)}
//               className={`h-2 w-2 rounded-full ${
//                 i === current ? "bg-black" : "bg-gray-400"
//               }`}
//             />
//           ))}
//         </div>
//       </section>
//     </div>
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

import nodeJSImage from "../assets/certificates/NodeJS.jpg";
import nodeJSPdf from "../assets/certificates/NodeJS.pdf";

const certificates = [
  {
    title: "React – Complete Developer Course with Hands-On Projects",
    issuer: "Udemy",
    date: "September 2025",
    description:
      "Completed a comprehensive React course covering components, hooks, state management, and real-world project development.",
    image: reactUdemyImage,
    pdf: reactUdemyPdf,
  },
  {
    title: "Node.js – All You Need to Know with Practical Project",
    issuer: "Udemy",
    date: "December 2025",
    description:
      "Learned backend development using Node.js including APIs, server logic, and practical project implementation.",
    image: nodeJSImage,
    pdf: nodeJSPdf,
  },
  {
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte (Forage)",
    date: "December 2025",
    description:
      "Performed real-world data analysis tasks including telemetry analysis and business insights generation.",
    image: dataAnalyticsImage,
    pdf: dataAnalyticsPdf,
  },
  {
    title: "Introduction to Generative AI Studio",
    issuer: "Google Cloud (Simplilearn)",
    date: "December 2025",
    description:
      "Explored Generative AI fundamentals, prompt design, and practical AI applications using Generative AI Studio.",
    image: genAiImage,
    pdf: genAiPdf,
  },
];

export default function Certificates() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % certificates.length);
    }, 5000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  });

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % certificates.length);
  };

  const cert = certificates[current];

  return (
    <section id="certificates" className="bg-[#0e162a] py-16 px-6">
      {/* Section Title */}
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-semibold text-white mb-2">
          Certificates
        </h2>
        <p className="text-gray-400 text-sm">
          Certifications and learning milestones
        </p>
      </div>

      <div className="max-w-4xl mx-auto bg-slate-800 rounded-2xl p-6 shadow-xl">
        <div
          className="relative group overflow-hidden rounded-xl"
          onMouseEnter={stopAutoSlide}
          onMouseLeave={startAutoSlide}
        >
          {/* Image */}
          <img
            src={cert.image}
            alt={cert.title}
            loading="lazy"
            className="w-full h-[420px] object-contain transition duration-500"
          />

          {/* Desktop Hover Overlay */}
          <a href={cert.pdf} target="_blank" rel="noopener noreferrer">
            <div
              className="
              hidden md:flex
              absolute inset-0 bg-black/70 text-white p-6
              opacity-0 group-hover:opacity-100
              transition duration-300
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

          {/* Mobile Content */}
          <div className="block md:hidden text-white mt-4">
            <h3 className="text-lg font-semibold">{cert.title}</h3>
            <p className="text-gray-400 text-sm">
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
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition"
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center mt-6 gap-3">
          {certificates.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 w-2 rounded-full transition ${
                i === current ? "bg-blue-500 scale-125" : "bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
