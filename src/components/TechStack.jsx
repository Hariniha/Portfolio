import React, { useEffect, useState } from 'react';
import { useTheme } from '../App';

const TechStack = () => {
  const { isDark } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);

  const technologies = [
    { name: 'JavaScript', icon: '🟨', category: 'Language' },
    { name: 'TypeScript', icon: '🔷', category: 'Language' },
    { name: 'React', icon: '⚛️', category: 'Frontend' },
    { name: 'Next.js', icon: '▲', category: 'Frontend' },
    { name: 'Vue.js', icon: '💚', category: 'Frontend' },
    { name: 'Node.js', icon: '💚', category: 'Backend' },
    { name: 'Python', icon: '🐍', category: 'Backend' },
    { name: 'MongoDB', icon: '🍃', category: 'Database' },
    { name: 'PostgreSQL', icon: '🐘', category: 'Database' },
    { name: 'Docker', icon: '🐳', category: 'DevOps' },
    { name: 'AWS', icon: '☁️', category: 'Cloud' },
    { name: 'Git', icon: '📝', category: 'Tools' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % technologies.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [technologies.length]);

  const categories = [...new Set(technologies.map(tech => tech.category))];

  return (
    <section id="tech" className="py-20 px-6 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`absolute animate-pulse ${
              isDark ? 'text-purple-500/10' : 'text-blue-500/10'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${20 + Math.random() * 40}px`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          >
            {'</>'}
          </div>
        ))}
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Tech Stack
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            The tools and technologies I use to bring ideas to life.
          </p>
        </div>

        {/* Featured Technology Carousel */}
        <div className="mb-16 text-center">
          <div className={`inline-block p-8 rounded-2xl mb-4 transition-all duration-500 ${
            isDark 
              ? 'bg-white/5 backdrop-blur-sm border border-white/10' 
              : 'bg-white/80 backdrop-blur-sm border border-gray-200 shadow-xl'
          }`}>
            <div className="text-6xl mb-4">{technologies[currentIndex].icon}</div>
            <h3 className={`text-2xl font-bold ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>
              {technologies[currentIndex].name}
            </h3>
            <p className="text-purple-600 font-medium">
              {technologies[currentIndex].category}
            </p>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center space-x-2">
            {technologies.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-purple-600 w-6' 
                    : isDark ? 'bg-white/30' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Technology Grid by Category */}
        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category}>
              <h3 className={`text-2xl font-bold mb-6 text-center ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                {category}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {technologies
                  .filter(tech => tech.category === category)
                  .map((tech, index) => (
                    <div
                      key={tech.name}
                      className={`group p-4 rounded-xl text-center transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer ${
                        isDark 
                          ? 'bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10' 
                          : 'bg-white/80 backdrop-blur-sm border border-gray-200 hover:shadow-xl'
                      }`}
                      style={{ 
                        animationDelay: `${index * 0.1}s`,
                        transform: `translateY(${Math.sin((Date.now() / 1000 + index) * 0.5) * 2}px)`,
                      }}
                    >
                      <div className="text-3xl mb-2 group-hover:scale-125 transition-transform duration-300">
                        {tech.icon}
                      </div>
                      <div className={`text-sm font-medium ${
                        isDark ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {tech.name}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* Floating Tech Icons Animation */}
        <div className="mt-16 relative h-32 overflow-hidden">
          <div className="flex animate-slide space-x-8">
            {[...technologies, ...technologies].map((tech, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-16 h-16 rounded-lg flex items-center justify-center text-2xl ${
                  isDark ? 'bg-white/5' : 'bg-white/50'
                }`}
              >
                {tech.icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;