import React, { useEffect, useState } from 'react';

const TechStack = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const technologies = [
    { name: 'JavaScript' },
    { name: 'TypeScript' },
    { name: 'React'} ,
    { name: 'Next.js'},
    { name: 'Vercel'},
    { name: 'Node.js'},
    { name: 'Express'},
    { name: 'MongoDB' },
    { name: 'Material UI'},
    { name: 'HTML' },
    { name: 'CSS' },
    { name: 'Git' },
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
            className="absolute animate-pulse text-purple-500/10"
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Tech Stack
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            The tools and technologies I use to bring ideas to life.
          </p>
        </div>

        {/* Featured Technology Carousel */}
        <div className="mb-16 text-center">
          <div className="inline-block p-8 rounded-2xl mb-4 bg-white/5 backdrop-blur-sm border border-white/10 transition-all duration-500">
            <div className="text-6xl mb-4">{technologies[currentIndex].icon}</div>
            <h3 className="text-2xl font-bold text-white">
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
                  index === currentIndex ? 'bg-purple-600 w-6' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

       
    
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="group p-4 rounded-xl text-center transition-all duration-300 hover:scale-110 hover:shadow-lg cursor-pointer bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10"
            >
              
              <div className="text-2xl font-bold text-gray-300">
                {tech.name}
              </div>
            </div>
          ))}
        </div>



        
       
      </div>
    </section>
  );
};

export default TechStack;