import React from 'react';

function ExperienceCard({ jobTitle, company, duration, responsibilities }) {
  return (
    <div className="group w-full text-base-content p-5 sm:p-6 rounded-2xl shadow-lg flex items-start gap-6 transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.03] hover:bg-gradient-to-r hover:from-blue-900 hover:to-pink-900 border border-gray-800">
      <div className="flex-1">
        <h3 className="text-lg sm:text-xl font-semibold mb-1 tracking-wide text-white">{jobTitle}</h3>
        <p className="text-sm sm:text-md font-medium mb-1 text-gray-200">{company}</p>
        <div className="flex justify-between text-xs sm:text-sm text-gray-300 opacity-80 mt-3">
          <span>{duration}</span>
        </div>
        <ul className="mt-4 text-sm opacity-90 text-gray-200 px-5">
          {responsibilities.map((task, index) => (
            <li key={index} className="list-disc pl-4">{task}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ExperienceCard;
