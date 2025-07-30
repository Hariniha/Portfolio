import React, { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { useTheme } from '../App';

const Hero = () => {
  const { isDark } = useTheme();
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
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-64 h-64 rounded-full opacity-10 animate-pulse ${
              isDark ? 'bg-purple-500' : 'bg-blue-500'
            }`}
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + i * 12}%`,
              animationDelay: `${i * 2}s`,
              transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
            }}
          />
        ))}
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute animate-bounce ${
              isDark ? 'text-purple-300/20' : 'text-blue-300/30'
            }`}
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
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Alex Chen
          </h1>
          <div className="text-xl md:text-2xl mb-8 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent font-semibold">
            Full Stack Developer & UI/UX Designer
          </div>
          <p className={`text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Crafting exceptional digital experiences with modern technologies. 
            Passionate about clean code, beautiful interfaces, and innovative solutions.
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            {[
              { icon: Github, href: '#', label: 'GitHub' },
              { icon: Linkedin, href: '#', label: 'LinkedIn' },
              { icon: Mail, href: '#contact', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                  isDark 
                    ? 'bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
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
              className={`px-8 py-3 rounded-full font-semibold border-2 transition-all duration-300 hover:scale-105 ${
                isDark 
                  ? 'border-white/30 text-white hover:bg-white/10' 
                  : 'border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              Let's Connect
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce ${
          isDark ? 'text-white/70' : 'text-gray-600'
        }`}
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;