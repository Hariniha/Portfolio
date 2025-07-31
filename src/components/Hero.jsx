import React, { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToNext = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-bounce text-purple-300/20"
            style={{
              left: `${10 + i * 11}%`,
              top: `${15 + i * 8}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: '3s',
            }}
          >
            <div className="text-2xl">{'</>'}</div>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-9xl md:text-7xl font-bold mb-6 text-white">
            Hi, I'm Harini Priya
          </h1>
          <div className="text-xl md:text-2xl mb-8 font-semibold">
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Building modern UIs & full-stack apps with MERN
            </span>{' '}
            💻
          </div>
          <p className="text-lg md:text-xl mb-12 max-w-5xl mx-auto leading-relaxed text-gray-300">
            Crafting responsive UIs and full-stack web apps with clean code and creativity.<br />
            Passionate Frontend & MERN Stack Developer building sleek UIs and robust full-stack apps.
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            {[
              { icon: Github, href: 'https://github.com/Hariniha', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/harini-priya-k-5390b1331/', label: 'LinkedIn' },
              { icon: Mail, href: '#contact', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-all duration-300 hover:scale-110"
                aria-label={label}
              >
                <Icon size={24} />
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              View My Work
            </button>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 rounded-full font-semibold border-2 border-white/30 text-white hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              Let's Connect
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white/70"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;
