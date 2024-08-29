import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="bg-gray-100 text-gray-800 p-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <div className="space-y-6">
          {/* Example Project */}
          <div className="space-y-4 border-b border-gray-300 pb-4 mb-4">
            <h3 className="text-xl font-semibold">Portfolio Website</h3>
            <p className="text-gray-600">Built with React.js and Tailwind CSS</p>
            <p className="mt-2">
              A personal portfolio website to showcase my skills and projects.
            </p>
          </div>
          {/* Add more projects here */}
          <div className="space-y-4 border-b border-gray-300 pb-4 mb-4">
            <h3 className="text-xl font-semibold">BDRRMC Web Responsive App</h3>
            <p className="text-gray-600">Built with Flutter</p>
            <p className="mt-2">
              An Web responsive application used for reporting reports, tracking and navigating the location of the report.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
