import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Genai from "../assets/certificates/Genai.pdf";
import GenaiImage from "../assets/certificates/Genai.png";

const certificates = [
  {
    title: "Data Analytics Job Simulation",
    issuer: "Daikibo Industrials",
    date: "2025",
    description:
      "Analyzed operational telemetry data and gender pay equality using Tableau and Excel.",
    image: GenaiImage, // preview
    pdf: Genai, // add your image path
  },
  {
    title: "Frontend Development",
    issuer: "Sheryians Coding School",
    date: "2024",
    description:
      "Hands-on experience with React, Tailwind CSS, and modern frontend tools.",
    image: GenaiImage, // preview
    pdf: Genai,
  },
  {
    title: "JavaScript Mastery",
    issuer: "Online Certification",
    date: "2024",
    description:
      "Advanced JavaScript concepts including ES6+, async programming, and logic building.",
    image: GenaiImage, // preview
    pdf: Genai,
  },
];

export default function Certificates() {
  const [current, setCurrent] = useState(0);

  // Auto slide every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % certificates.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent(current === 0 ? certificates.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent((current + 1) % certificates.length);
  };

  const cert = certificates[current];

  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-10">Certificates</h2>

      <div className="relative group overflow-hidden rounded-2xl shadow-lg">
        {/* Certificate Image */}
        {/* <img
          src={cert.image}
          alt={cert.title}
          className="w-full h-[300px] object-cover"
        />
         */}
        <a
          href={cert.pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <img
            src={cert.image}
            alt={cert.title}
            loading="lazy"
            className="w-full h-[300px] object-cover rounded-xl"
          />
        </a>

        {/* Overlay (Hover on desktop, always visible on mobile) */}
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
  );
}
