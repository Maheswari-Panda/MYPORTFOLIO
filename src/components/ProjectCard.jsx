import React from 'react';
import Slider from 'react-slick';

function ProjectCard({ title, description, technologies, link, images }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="group w-full md:w-[650px] bg-white dark:bg-base-200 p-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl">
      <div className="flex flex-col justify-between h-full">

        {/* Image Carousel for Single Project */}
        <div className="mb-4">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`${title} - Image ${index + 1}`}
                  className="w-full h-[200px] sm:h-[300px] object-center rounded-lg"
                />
              </div>
            ))}
          </Slider>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-primary mb-3">{title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200 text-sm px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Project Link */}
        <div className="flex justify-between items-center">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-medium hover:underline"
          >
            View Project
          </a>
          <span className="text-sm text-gray-500">Project Link</span>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
