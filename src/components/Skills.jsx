import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaPython, FaPhp, FaServer, FaLaptop } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiMysql, SiJavascript, SiBootstrap, SiExpress } from 'react-icons/si';

const skills = [
  {
    title: 'Frontend',
    items: [
      { name: 'HTML5', icon: <FaHtml5 className="text-orange-600" /> },
      { name: 'CSS3', icon: <FaCss3Alt className="text-blue-600" /> },
      { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
      { name: 'React', icon: <FaReact className="text-cyan-400" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-teal-400" /> },
      { name: 'Bootstrap', icon: <SiBootstrap className="text-purple-400" /> },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
      { name: 'Php', icon: <FaPhp className="text-blue-400" /> },
      { name: 'Express', icon: <SiExpress className="text-white-400" /> },
    ],
  },
  {
    title: 'Database',
    items: [
      { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
      { name: 'MSSQL', icon: <FaServer className="text-blue-900" /> },
      { name: 'MySQL', icon: <SiMysql className="text-blue-500" /> },
    ],
  },
  {
    title: 'Tools',
    items: [
      { name: 'Git', icon: <FaGitAlt className="text-red-500" /> },
      { name: 'VSCode', icon: <FaLaptop className="text-blue-400"/> },
    ],
  },
];

function Skills() {
  return (
    <section id="Skills" className="py-12 px-4 md:px-12" >
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
          Skills
        </h2>
        <div className="w-20 h-1 mt-2 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skills.map((category, index) => (
          <div key={index} className=" rounded-2xl shadow-md p-6 text-center hover:shadow-lg hover:bg-gray-800 transition  border border-gray-800">
            <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {category.items.map((skill, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <div className="text-3xl">{skill.icon}</div>
                  <span className="text-sm mt-2">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
