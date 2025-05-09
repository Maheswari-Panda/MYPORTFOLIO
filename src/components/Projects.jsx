import React from 'react';
import ProjectCard from './ProjectCard';

function Projects() {
  return (
    <section id="Projects" className="py-10 px-6 md:px-20 bg-base-100 text-base-content">
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
          Projects
        </h2>
        <div className="w-20 h-1 mt-2 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
      </div>
      <div className="flex flex-wrap gap-8 justify-center">
        <ProjectCard
          title="Office Administrator"
          description="A web-based office administration tool built with a modern stack to manage operations efficiently."
          technologies={['React', 'Tailwind CSS', 'DaisyUI', 'Node.js', 'Express', 'MSSQL']}
          link="https://github.com/yourgithubusername/office-administrator"
          images={[
            '../src/assets/projectImages/OfficeAdministrator/image_01.png',
            '../src/assets/projectImages/OfficeAdministrator/image_02.png',
            '../src/assets/projectImages/OfficeAdministrator/image_03.png',
            '../src/assets/projectImages/OfficeAdministrator/image_04.png',
            '../src/assets/projectImages/OfficeAdministrator/image_05.png',
          ]}
        />

        <ProjectCard
          title="Time Table Management System"
          description="A PHP-based tool for generating and managing timetables for various departments with conflict checking."
          technologies={['PHP', 'phpMyAdmin', 'MySQL', 'Bootstrap']}
          link="https://github.com/yourgithubusername/time-table-management"
          images={[
            '../src/assets/projectImages/TTM/image_01.png',
            '../src/assets/projectImages/TTM/image_02.png',
            '../src/assets/projectImages/TTM/image_03.png',
            '../src/assets/projectImages/TTM/image_04.png',
            '../src/assets/projectImages/TTM/image_05.png',
          ]}
        />

        <ProjectCard
          title="Student Development Portal"
          description="An ASP.NET MVC-based portal for managing student development activities and progress tracking."
          technologies={['.NET', 'ASP.NET', 'C#', 'MVC', 'Bootstrap', 'MSSQL']}
          link="https://github.com/yourgithubusername/student-development-portal"
          images={[
            '../src/assets/projectImages/SDP/image_01.png',
            '../src/assets/projectImages/SDP/image_02.png',
            '../src/assets/projectImages/SDP/image_03.png',
            '../src/assets/projectImages/SDP/image_04.png',
          ]}
        />

        <ProjectCard
          title="Flutter Chat Application"
          description="A real-time chat app built using Flutter and Dart for seamless user communication."
          technologies={['Dart', 'Flutter']}
          link="https://github.com/yourgithubusername/flutter-chat-app"
          images={[
            '../src/assets/projectImages/ChatFlutter/image_01.png',
            '../src/assets/projectImages/ChatFlutter/image_02.png',
            '../src/assets/projectImages/ChatFlutter/image_03.png',
            '../src/assets/projectImages/ChatFlutter/image_04.png',
            '../src/assets/projectImages/ChatFlutter/image_05.png',
          ]}
        />

        <ProjectCard
          title="Advanced Learning System"
          description="An ML-based course recommendation system using regression for personalized learning paths."
          technologies={['Python', 'Flask', 'Machine Learning']}
          link="https://github.com/yourgithubusername/advanced-learning-system"
          images={[
            '../src/assets/projectImages/MLProject/image_01.png',
            '../src/assets/projectImages/MLProject/image_02.png',
            '../src/assets/projectImages/MLProject/image_03.png',
          ]}
        />
      </div>
    </section>
  );
}

export default Projects;
