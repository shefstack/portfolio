"use client"
import { Navbar } from "./components/Navbar";
import { Project } from "./components/Project";
import { Contact } from "./components/Contact";
import {About} from "./components/About";
import Image from "next/image";
import {motion} from "framer-motion";

export default function  HomePage() {
const projectsarray = [
  {
    title: "Bank Forms UI Conversion",
    description:
"Converted traditional banking forms into interactive React.js UI components. Improved validation, accessibility, and responsiveness."

  },
  {
    title: "Ping Authentication Implementation",
    description:
      "Integrated Ping Authentication (OAuth 2.0) for secure user access control and improved workflow UX compliance.",
   
  },
  {
    title: "Personal Portfolio",
    description:"Portfolio built with Next.js (TypeScript) and Tailwind CSS to showcase experience, projects, and skills.",
    link: "https://github.com/shefstack/portfolio",
  },
];

  return (
    <main id="home" className="min-h-screen bg-gray-50">
      <Navbar />
<section className="flex flex-col md:flex-row items-center justify-center min-h-screen px-6 text-center md:text-left gap-10">
  <div className="md:w-1/2 space-y-6">
  <motion.h1
  initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl sm:text-6xl font-extrabold mb-6"

  >
    <h1 className="text-5xl md:text-6xl font-bold">
      Hi, I’m <span className="text-purple-600">Shefali Sinha</span> 👋
    </h1>
    </motion.h1>
    <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-600 max-w-2xl leading-relaxed"
        >
    <p className="text-lg text-gray-600 leading-relaxed">
      React.js & Front-End Developer with 3+ years of experience building
      responsive and performant web applications. Currently working as a
      Systems Engineer at Tata Consultancy Services.
    </p>
    </motion.p>
    <div className="flex flex-wrap justify-center md:justify-start gap-4">
      <a
        href="#about"
        className="px-6 py-3 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 transition"
      >
        About Me
      </a>
      <a
        href="#projects"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
      >
        View My Projects
      </a>
      <a
        href="#contact"
        className="px-6 py-3 bg-emerald-600 text-white rounded-lg shadow hover:bg-emerald-700 transition"
      >
        Contact Me
      </a>
    </div>
  </div>

  {/* Right side: illustration */}
  <div className="md:w-1/2 flex justify-center">
    <Image
      src="/Microsites-amico.svg"
      alt="Front-end developer illustration"
      width={400}
      height={400}
      className="drop-shadow-xl"
      priority
    />
  </div>
</section>

<section id="about" className="max-w-4xl mx-auto px-6 py-16 text-center">
    <h2 className="text-3xl font-bold text-center mb-10">About Me</h2>
  <About />
</section>
      <section id="projects" className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsarray.map((elem) => (
            <Project key={elem.title} {...elem} />
          ))}
        </div>
      </section>
      <Contact />
            <footer className="py-6 text-center text-gray-500 bg-gray-100 mt-10">
        © {new Date().getFullYear()} Shefali Sinha ·{" "}
        <a
          href="https://linkedin.com/in/shefali-sinha-931084272"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          LinkedIn
        </a>{" "}
        ·{" "}
        <a href="mailto:shef2911@gmail.com" className="text-blue-600 hover:underline">
          Email
        </a>
      </footer>

    </main>

  );
}
