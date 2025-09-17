import CV from "../assets/AzlanJamshed.pdf";
const About = () => {
  return (
    <>
      <section id="about" className="py-12 bg-slate-800">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-center text-4xl md:text-5xl font-semibold text-white mb-2">
            About Me
          </h2>
          <span className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
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
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-7 max-w-2xl mx-auto lg:mx-0">
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
