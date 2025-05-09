import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Intro() {
  return (
    <section id="Introduction" className="animated-bg text-base-content min-h-screen flex items-center justify-start px-4 sm:px-8 md:px-16 py-10">
      <div className="max-w-5xl w-full flex flex-col gap-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-2 leading-tight">
          Hello, I'm{' '}
          <span className="text-5xl bg-gradient-to-l from-primary to-secondary text-transparent bg-clip-text font-bold transition duration-300 hover:text-gray-700 hover:bg-none">
            MAHESWARI PANDA
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl mb-4 leading-relaxed">
          I'm a web developer with a strong focus on modern JavaScript frameworks and backend development.
          Currently, I work with{' '}
          <span className="text-secondary font-medium">React</span>,{' '}
          <span className="text-secondary font-medium">Node.js</span>, and{' '}
          <span className="text-secondary font-medium">MongoDB</span>, building scalable and user-friendly applications.
        </p>

        <div>
          <h2 className="text-lg sm:text-xl font-semibold mb-4 text-gray-200 tracking-wide">
            Core Technologies:
          </h2>
          <ul className="flex flex-wrap gap-3 sm:gap-4">
            {['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'JavaScript'].map((tech) => (
              <li
                key={tech}
                className="badge badge-outline badge-primary text-sm py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white hover:border-none"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <a
            href="https://linkedin.com/in/maheswari-panda-155837219/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-primary flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            <FaLinkedin className="text-lg" />
            LinkedIn
          </a>
          <a
            href="https://github.com/Maheswari-Panda"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-neutral flex items-center justify-center gap-2 w-full sm:w-auto text-white"
          >
            <FaGithub className="text-lg" />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Intro;
