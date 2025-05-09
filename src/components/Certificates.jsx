import React from 'react';

const certificates = [
  
  {
    title: 'FLY (Finding a Leader in You)- Scholar',
    platform:'The Competitiveness Mindset Institute, USA (online)',
    date:'Sept 2022',
    link:''
  },
  {
    title: 'Machine Learning with Python',
    platform: 'Coursera',
    date: 'Dec 2023',
    link: '',
  },
  {
    title: 'Python for Everybody',
    platform: 'Coursera',
    date: 'Dec 2023',
    link: '',
  },
  {
    title: 'SAP Code Unnati – ML & IoT',
    platform: 'Edunet Foundation & SAP',
    date: 'Sept 2023 - April 2024',
    link: '',
  },
  {
    title: 'AI ML Hackathon',
    platform:'Parul University',
    date:'July 2024',
    link:''
  },
  {
    title: 'AWS Cloud Computing Workshop',
    platform:'FOTE MSU',
    date:'July 2024',
    link:''
  },
];

function Certificates() {
  return (
    <section className="py-12 px-4 md:px-12" id="Certificates">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
          Certificates
        </h2>
        <div className="w-20 h-1 mt-2 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
  {certificates.map((cert, index) => (
    <div
      key={index}
      className="group p-6 rounded-xl shadow-md hover:shadow-lg transition"
    >
      <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary group-hover:text-white group-hover:bg-none transition-all duration-300">
        {cert.title}
      </h3>
      <p className="text-gray-400">{cert.platform}</p>
      <p className="text-sm text-gray-400">{cert.date}</p>
      {cert.link && (
        <a
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 text-blue-600 hover:underline text-sm"
        >
          View Certificate →
        </a>
      )}
    </div>
  ))}
</div>

    </section>
  );
}

export default Certificates;
