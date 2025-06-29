import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Download } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';
import { skills } from '../data/skills';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-blue-100 section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Hi, I'm{' '}
                <span className="text-primary-600">{personalInfo.name}</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {personalInfo.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/file/HosseinGholamiCV.pdf"
                  download="HosseinGholamiCV.pdf"
                  className="btn-primary inline-flex items-center justify-center"
                >
                  Download CV
                  <Download size={20} className="ml-2" />
                </a>
                {/* <Link
                  to="/open-source"
                  className="btn-secondary inline-flex items-center justify-center"
                >
                  Open Source Projects
                </Link> */}
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 bg-primary-600 rounded-full opacity-10 absolute -top-4 -right-4"></div>
                <div className="w-80 h-80 bg-gradient-to-br from-primary-400 to-blue-500 rounded-full flex items-center justify-center relative">
                  <Code size={120} className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              About Me
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I'm a dedicated developer with a passion for creating meaningful applications 
              that solve real-world problems.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">
                My Journey
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {personalInfo.about.journey}
              </p>
              <p className="text-gray-600 leading-relaxed">
                {personalInfo.about.philosophy}
              </p>
              <div className="flex flex-wrap gap-4">
                {personalInfo.about.tags.map((tag, index) => (
                  <div key={index} className="bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-medium">
                    {tag}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-6">Quick Facts</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Years of Experience</span>
                  <span className="font-semibold text-gray-900">{personalInfo.stats.experience}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Projects Completed</span>
                  <span className="font-semibold text-gray-900">{personalInfo.stats.projects}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Open Source Contributions</span>
                  <span className="font-semibold text-gray-900">{personalInfo.stats.openSource}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Technologies Mastered</span>
                  <span className="font-semibold text-gray-900">{personalInfo.stats.technologies}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Skills & Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I specialize in modern web technologies and have experience across 
              the entire development stack.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="card text-center group hover:scale-105 transition-transform duration-300">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors duration-200">
                  <skill.icon size={32} className="text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {skill.name}
                </h3>
                <p className="text-gray-600 text-sm">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`mailto:${personalInfo.email}`}
              className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
            >
              Get In Touch
              <ArrowRight size={20} className="ml-2" />
            </a>
            <Link
              to="/work-experience"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center justify-center"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 