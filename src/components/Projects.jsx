import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { useTheme } from '../App';

const Projects = () => {
  const { isDark } = useTheme();

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: '#',
      live: '#',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Firebase', 'Material-UI', 'Socket.io'],
      github: '#',
      live: '#',
    },
    {
      title: 'Social Media Dashboard',
      description: 'A comprehensive analytics dashboard for social media management with data visualization and automated reporting.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Vue.js', 'D3.js', 'Python', 'PostgreSQL'],
      github: '#',
      live: '#',
    },
    {
      title: 'Weather Forecast App',
      description: 'A beautiful weather application with location-based forecasts, interactive maps, and weather alerts.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React Native', 'TypeScript', 'OpenWeather API'],
      github: '#',
      live: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Featured Projects
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Here are some of my recent works that showcase my skills and passion for development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative overflow-hidden rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                isDark 
                  ? 'bg-white/5 backdrop-blur-sm border border-white/10' 
                  : 'bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.github}
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={project.live}
                    className="p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className={`text-xl font-bold mb-3 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {project.title}
                </h3>
                <p className={`text-sm mb-4 leading-relaxed ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 text-xs font-medium rounded-full ${
                        isDark 
                          ? 'bg-purple-500/20 text-purple-300' 
                          : 'bg-purple-100 text-purple-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className={`inline-flex items-center px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 ${
              isDark 
                ? 'bg-white/10 text-white hover:bg-white/20 border border-white/20' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
            }`}
          >
            View All Projects
            <ExternalLink size={18} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;