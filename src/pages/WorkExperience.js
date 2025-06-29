import React from 'react';
import { Calendar, MapPin, ExternalLink, Building, Users, Award } from 'lucide-react';
import { workExperience } from '../data/workExperience';
import { personalInfo } from '../data/personalInfo';

const WorkExperience = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Work Experience
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              My professional journey in software development, showcasing the projects 
              I've worked on and the impact I've made at each company.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            {workExperience.map((experience, index) => (
              <div key={experience.id} className="relative">
                {/* Timeline Line */}
                {index < workExperience.length - 1 && (
                  <div className="absolute left-8 top-24 bottom-0 w-0.5 bg-gray-200"></div>
                )}
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Timeline Dot and Company Info */}
                  <div className="lg:col-span-1">
                    <div className="flex items-start space-x-4">
                      <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <Building size={24} className="text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-900 mb-1">
                          {experience.company}
                        </h3>
                        <p className="text-lg font-semibold text-primary-600 mb-2">
                          {experience.position}
                        </p>
                        <div className="flex items-center text-gray-500 text-sm mb-1">
                          <Calendar size={16} className="mr-1" />
                          {experience.duration}
                        </div>
                        <div className="flex items-center text-gray-500 text-sm">
                          <MapPin size={16} className="mr-1" />
                          {experience.location}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Experience Details */}
                  <div className="lg:col-span-2">
                    <div className="bg-white rounded-xl shadow-lg p-8">
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {experience.description}
                      </p>

                      {/* Key Achievements */}
                      <div className="mb-8">
                        <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                          <Award size={20} className="mr-2 text-primary-600" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {experience.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start">
                              <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-gray-600">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="mb-8">
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Notable Projects */}
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                          <Users size={20} className="mr-2 text-primary-600" />
                          Notable Projects
                        </h4>
                        <div className="space-y-4">
                          {experience.projects.map((project, idx) => (
                            <div key={idx} className="border-l-4 border-primary-200 pl-4">
                              <h5 className="font-semibold text-gray-900 mb-1">
                                {project.name}
                              </h5>
                              <p className="text-gray-600 text-sm mb-2">
                                {project.description}
                              </p>
                              <p className="text-primary-600 text-sm font-medium">
                                Impact: {project.impact}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and exciting projects. 
            Let's connect and see how we can create something amazing together!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`mailto:${personalInfo.email}`}
              className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
            >
              Get In Touch
              <ExternalLink size={20} className="ml-2" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
            >
              View LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkExperience; 