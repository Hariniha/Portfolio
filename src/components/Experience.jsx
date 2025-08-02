import React, { useRef, useEffect, useState } from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const scrollRef = useRef(null);
  const [visibleItems, setVisibleItems] = useState([]);

  const experiences = [
    {
      title: 'Frontend Developer',
      company: 'Dbotics Technology And Solution Private Limited',
      period: '2022 - Present',
      location: 'San Francisco, CA',
      description:
        'Website Building With React.js and Three.js.',
      achievements: [
        'Improved application performance by 40%',
        'Idea of Workspace',
        'Learn to Split the bunch of code into small chunks',
        
      ],
      technologies: ['React.js', 'Three.js'],
    },
    {
      title: 'Frontend Developer',
      company: 'Hacakathon Winner',
      period: '2025',
      location: 'Bangalore, India',
      description:
        "Collaborated closely with design and product teams.",
      achievements: [
        'Won 3rd prize at the Cepheus Hackathon',
        'Collabrated with team to build a decentralized solution showcasing innovation in blockchain technology'
        
      ],
      technologies: ['React.js', 'Blockchain Technology'],
    },
    {
      title: 'Frontend Developer',
      company: 'Hackathon Winner',
      period: '2025',
      location: 'Chennai, India',
      description:
        'Created responsive websites. ',
      achievements: [
        'Won 3rd prize at the OpenHAcks Hackathon',
        'Developed a decentralized solution showcasing innovation in blockchain technology'
      ],
      technologies: ['React.js', 'Blockchain Technology'],
    },
    
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const items = document.querySelectorAll('.experience-item');
    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Experience</h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            My professional journey and the experiences that shaped my skills.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-purple-500/30" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={`${exp.title}-${exp.company}-${exp.period}`}
                data-index={index}
                className={`experience-item relative pl-20 transition-all duration-700 ${
                  visibleItems.includes(index)
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-8'
                }`}
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 rounded-full border-4 bg-purple-500 border-slate-900 shadow-lg" />

                <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-1 text-white">{exp.title}</h3>
                      <div className="flex items-center text-purple-600 font-semibold mb-2">
                        {exp.company}
                        <ExternalLink size={16} className="ml-2" />
                      </div>
                    </div>
                    <div className="text-sm text-gray-400">
                      <div className="flex items-center mb-1">
                        <Calendar size={16} className="mr-2" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-2" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <p className="mb-4 leading-relaxed text-gray-300">{exp.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2 text-white">Key Achievements:</h4>
                    <ul className="space-y-1 text-gray-300">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-purple-600 mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-purple-500/20 text-purple-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <a
             onClick={() => window.open("/Harini.pdf", "_blank")}
            className="inline-flex items-center px-6 py-3 rounded-full font-semibold bg-white/10 text-white hover:bg-white/20 border border-white/20 transition-all duration-300 hover:scale-105"
          >
            Download Resume
            <ExternalLink size={18} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
