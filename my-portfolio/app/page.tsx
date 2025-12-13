"use client"
import { Navbar } from "./components/Navbar";
import { Project } from "./components/Project";
import { Contact } from "./components/Contact";
import {About} from "./components/About";

export default function HomePage() {
const projects = [
  {
    title: "Credit Card Mapping Project",
    description:
      "Developed and implemented UI components based on wireframes using React.js and the client’s CSS library. Ensured responsiveness and accessibility.",

  },
  {
    title: "Ping Authentication Implementation",
    description:
      "Integrated Ping Authentication (OAuth 2.0) for secure user access control and improved workflow UX compliance.",
   
  },
  {
    title: "Personal Portfolio",
    description:"Portfolio built with Next.js (TypeScript) and Tailwind CSS to showcase experience, projects, and skills.",
    link: "https://your-vercel-link.vercel.app",
  },
];

  return (
    <main id="home" className="min-h-screen bg-gray-50">
      <Navbar />
      <section className="flex flex-col items-center justify-center h-screen text-center">
        <h1 className="text-5xl font-bold mb-4">Hi, I’m Shefali Sinha 👋</h1>
        <p className="text-lg text-gray-600 max-w-xl">
         React.js & Front-End Developer with 3+ years of experience building responsive, scalable, and performant web applications.
    Currently working as a Systems Engineer at Tata Consultancy Services.
        </p>
        <a
          href="#project"
          className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
        >
          View My Projects
        </a>
        <a href="#contact"
          className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700">
          Contact Me
        </a>
      </section>


<section id="about" className="max-w-4xl mx-auto px-6 py-16 text-center">
  <About />
</section>
      <section id="projects" className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <Project key={p.title} {...p} />
          ))}
        </div>
      </section>
      <Contact />
    </main>

  );
}
