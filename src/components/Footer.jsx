import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gray-1000 text-gray-300 py-8 px-4 mt-12 border-t border-blue-950">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-center md:text-left text-sm">
          © {new Date().getFullYear()}{' '}
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent font-semibold">
            Maheswari Panda
          </span>. All rights reserved.
        </p>
        <div className="flex gap-6 text-lg">
          {[
            {
              icon: <FaGithub />,
              link: 'https://github.com/Maheswari-Panda',
            },
            {
              icon: <FaLinkedin />,
              link: 'https://linkedin.com/in/maheswari-panda-155837219/',
            },
            {
              icon: <FaEnvelope />,
              link: 'mailto:maheswaripanda3@gmail.com',
            },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="transition duration-300 hover:text-primary"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
