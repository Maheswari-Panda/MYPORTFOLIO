import React from 'react';
import EducationCard from './EducationCard';

function Education() {
  return (
    <section id="Education" className="py-10 px-6 md:px-20 bg-base-100 text-base-content">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
          Education
        </h2>
        <div className="w-20 h-1 mt-2 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
      </div>

      <div className="flex flex-wrap gap-8">
        <EducationCard
          degree="Bachelor of Engineering in Computer Science"
          institution="Faculty of Technology and Engineering, MSU Baroda"
          year="2021 - 2025"
          grade="CGPA: 8.9"
        />
        <EducationCard
          degree="Higher Secondary (Science)"
          institution="Saraswati Uchhattar Madhyamik Shala"
          year="2019 - 2021"
          grade="Score: 95.33%"
        />
        <EducationCard
          degree="Secondary School"
          institution="Saraswati Madhyamik Shala"
          year="2018 - 2019"
          grade="Score: 93.67%"
        />
      </div>
    </section>
  );
}

export default Education;
