import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

function EducationCard({ degree, institution, year, grade }) {
  return (
    <div className="group w-full lg:w-full bg-[#f9fafb] dark:bg-base-200 text-base-content p-6 rounded-xl shadow-md border-l-4 border-primary flex gap-4 items-start transition-all duration-300 hover:shadow-xl hover:scale-[1.015]">
      <div className="text-primary mt-1">
        <FaGraduationCap className="text-2xl sm:text-3xl" />
      </div>
      <div className="flex-1">
        <h3 className="text-lg sm:text-xl font-bold mb-1 text-primary">{degree}</h3>
        <p className="text-sm sm:text-base font-medium text-gray-600 dark:text-gray-300">{institution}</p>
        <div className="flex justify-between text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-3">
          <span>{year}</span>
          <span>{grade}</span>
        </div>
      </div>
    </div>
  );
}

export default EducationCard;
