import React from 'react';
import ExperienceCard from './ExperienceCrad';

function Experience() {
  return (
    <section id="Experience" className="py-10 px-6 md:px-20 bg-base-100 text-base-content">
    <div className="mb-8">
    <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary bg-opacity-80 transition-all duration-500 ease-in-out hover:from-primary hover:to-secondary hover:bg-opacity-100">
  Experience
</h2>

        <div className="w-20 h-1 mt-2 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
      </div>

      <div className="flex flex-wrap gap-8">
        <ExperienceCard
          jobTitle="Full Stack Developer Intern"
          company="Computer Centre - The Maharaja SaiyajiRao University of Baroda"
          duration="Jan 2025 - Apr 2025"
          responsibilities={[
            "Developed web applications using React,Node js, Express and MongoDB.",
            "Collaborated with the backend team to integrate REST APIs.",
            "Optimized code for performance improvements.",
            "Participated in code reviews and team meetings."
          ]}
        />
        <ExperienceCard
          jobTitle="Wed Designing Intern"
          company="Sparks To Ideas"
          duration="Jun 2024 - Jul 2024"
          responsibilities={[
            "Built responsive UI components with HTML,CSS,JS and Bootstrap.",
            "Implemented different resposive websites",
            "Worked closely with designers to implement user-friendly interfaces.",
            "Created reusable components to optimize development time."
          ]}
        />
      </div>
    </section>
  );
}

export default Experience;
