import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useTheme } from '../App';

const Contact = () => {
  const { isDark } = useTheme();
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 4 + 2,
      speed: Math.random() * 2 + 1,
    }));
    setParticles(newParticles);

    const animateParticles = () => {
      setParticles(prev =>
        prev.map(particle => ({
          ...particle,
          y: particle.y - particle.speed,
          x: particle.x + Math.sin(Date.now() * 0.001 + particle.x * 0.01) * 0.5,
        })).map(particle =>
          particle.y < -10 ? { ...particle, y: window.innerHeight + 10 } : particle
        )
      );
    };

    const interval = setInterval(animateParticles, 50);
    return () => clearInterval(interval);
  }, []);

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'alex.chen@email.com',
      href: 'mailto:alex.chen@email.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'San Francisco, CA',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="py-20 px-6 relative overflow-hidden">
      {/* Background Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle, index) => (
          <div
            key={index}
            className={`absolute w-1 h-1 rounded-full ${
              isDark ? 'bg-purple-400/30' : 'bg-blue-400/30'
            }`}
            style={{
              left: particle.x,
              top: particle.y,
              width: particle.size,
              height: particle.size,
              boxShadow: `0 0 ${particle.size * 2}px ${isDark ? '#a855f7' : '#3b82f6'}`,
            }}
          />
        ))}
      </div>

      {/* Title */}
      <div className="container mx-auto max-w-4xl relative z-10 text-center">
        <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}>
          Let's Work Together
        </h2>
        <p className={`text-xl max-w-3xl mx-auto mb-12 ${
          isDark ? 'text-gray-300' : 'text-gray-600'
        }`}>
          Have a project in mind or want to discuss opportunities? Feel free to reach out!
        </p>

        {/* Contact Info */}
        <div className="grid md:grid-cols-3 gap-6 justify-center">
          {contactInfo.map(info => (
            <a
              key={info.label}
              href={info.href}
              className={`flex flex-col items-center text-center p-6 rounded-2xl transition-all duration-300 hover:scale-105 group ${
                isDark
                  ? 'bg-white/5 hover:bg-white/10 border border-white/10'
                  : 'bg-white hover:bg-gray-100 border border-gray-200'
              }`}
            >
              <div className={`p-4 rounded-full mb-4 ${
                isDark ? 'bg-purple-500/20' : 'bg-purple-100'
              }`}>
                <info.icon size={28} className="text-purple-600" />
              </div>
              <div className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                {info.label}
              </div>
              <div className={`text-sm mt-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {info.value}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
