import React, { useRef, useEffect, useState } from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const scrollRef = useRef(null);
  const [visibleItems, setVisibleItems] = useState([]);

  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'TechCorp Inc.',
      period: '2022 - Present',
      location: 'San Francisco, CA',
      description:
        'Lead development of scalable web applications serving 1M+ users. Architected microservices infrastructure and mentored junior developers.',
      achievements: [
        'Improved application performance by 40%',
        'Led a team of 5 developers',
        'Implemented CI/CD pipelines reducing deployment time by 60%',
      ],
      technologies: ['React', 'Node.js', 'AWS', 'Docker', 'TypeScript'],
    },
    {
      title: 'Full Stack Developer',
      company: 'StartupXYZ',
      period: '2020 - 2022',
      location: 'Remote',
      description:
        "Built the company's main product from scratch, handling both frontend and backend development. Collaborated closely with design and product teams.",
      achievements: [
        'Developed MVP from concept to launch in 6 months',
        'Achieved 99.9% uptime',
        'Implemented real-time features serving 50K+ concurrent users',
      ],
      technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Redis', 'WebSocket'],
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Agency Pro',
      period: '2019 - 2020',
      location: 'New York, NY',
      description:
        'Created responsive websites and web applications for various clients. Focused on performance optimization and user experience.',
      achievements: [
        'Delivered 20+ client projects on time',
        'Achieved average 95+ Lighthouse scores',
        'Reduced bounce rate by 35% across client sites',
      ],
      technologies: ['React', 'JavaScript', 'SASS', 'WordPress', 'jQuery'],
    },
    {
      title: 'Junior Web Developer',
      company: 'WebSolutions LLC',
      period: '2018 - 2019',
      location: 'Austin, TX',
      description:
        'Started my professional journey building websites and learning modern web technologies. Gained experience in both frontend and backend development.',
      achievements: [
        'Completed 10+ successful projects',
        'Learned React, Node.js, and MongoDB',
        'Contributed to open source projects',
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
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
                key={exp.title}
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
            href="#"
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
