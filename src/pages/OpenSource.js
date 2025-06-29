import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { openSourceProjects } from '../data/openSourceProjects';

const OpenSource = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-white section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Open Source Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of my open source projects. I love contributing to the community and sharing my work on GitHub.
          </p>
        </div>
      </section>
      <section className="section-padding">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {openSourceProjects.map((project, idx) => (
            <div key={idx} className="card flex flex-col h-full">
              <div className="flex items-center mb-4">
                <Github size={28} className="text-primary-600 mr-2" />
                <h2 className="text-xl font-bold text-gray-900 flex-1">
                  {project.name}
                </h2>
                {project.website && (
                  <a href={project.website} target="_blank" rel="noopener noreferrer" className="ml-2 text-primary-600 hover:underline">
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
              <p className="text-gray-600 mb-4 flex-1">{project.description}</p>
              <div className="flex items-center justify-between mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 hover:underline flex items-center"
                >
                  <Github size={18} className="mr-1" />
                  GitHub
                </a>
                <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-xs font-medium">
                  ⭐ {project.stars}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OpenSource; 