import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { useTheme } from '../App';

const Contact = () => {
  const { isDark } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
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

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

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
      {/* Animated Background Particles */}
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

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className={`absolute animate-float ${
              isDark ? 'bg-purple-500/10' : 'bg-blue-500/10'
            }`}
            style={{
              left: `${15 + i * 12}%`,
              top: `${20 + i * 8}%`,
              width: `${60 + i * 20}px`,
              height: `${60 + i * 20}px`,
              borderRadius: i % 2 === 0 ? '50%' : '20%',
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${6 + i}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Let's Work Together
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Have a project in mind or want to discuss opportunities? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className={`p-8 rounded-2xl ${
              isDark 
                ? 'bg-white/5 backdrop-blur-sm border border-white/10' 
                : 'bg-white/80 backdrop-blur-sm border border-gray-200 shadow-xl'
            }`}>
              <h3 className={`text-2xl font-bold mb-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Get In Touch
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className={`flex items-center p-4 rounded-xl transition-all duration-300 hover:scale-105 group ${
                      isDark 
                        ? 'bg-white/5 hover:bg-white/10 border border-white/10' 
                        : 'bg-gray-50 hover:bg-gray-100 border border-gray-200'
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={`p-3 rounded-lg mr-4 ${
                      isDark ? 'bg-purple-500/20' : 'bg-purple-100'
                    }`}>
                      <info.icon size={20} className="text-purple-600" />
                    </div>
                    <div>
                      <div className={`font-semibold ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        {info.label}
                      </div>
                      <div className={`text-sm ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}>
                        {info.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div className={`p-6 rounded-2xl text-center ${
              isDark 
                ? 'bg-green-500/10 border border-green-500/20' 
                : 'bg-green-50 border border-green-200'
            }`}>
              <div className="flex items-center justify-center mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse mr-2" />
                <span className="text-green-600 font-semibold">Available for new projects</span>
              </div>
              <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Let's create something amazing together!
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`p-8 rounded-2xl ${
            isDark 
              ? 'bg-white/5 backdrop-blur-sm border border-white/10' 
              : 'bg-white/80 backdrop-blur-sm border border-gray-200 shadow-xl'
          }`}>
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg transition-all duration-300 focus:ring-2 focus:ring-purple-500 focus:outline-none ${
                        isDark 
                          ? 'bg-white/10 border border-white/20 text-white placeholder-gray-400' 
                          : 'bg-white border border-gray-300 text-gray-900 placeholder-gray-500'
                      }`}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className={`block text-sm font-medium mb-2 ${
                      isDark ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className={`w-full px-4 py-3 rounded-lg transition-all duration-300 focus:ring-2 focus:ring-purple-500 focus:outline-none ${
                        isDark 
                          ? 'bg-white/10 border border-white/20 text-white placeholder-gray-400' 
                          : 'bg-white border border-gray-300 text-gray-900 placeholder-gray-500'
                      }`}
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className={`w-full px-4 py-3 rounded-lg transition-all duration-300 focus:ring-2 focus:ring-purple-500 focus:outline-none ${
                      isDark 
                        ? 'bg-white/10 border border-white/20 text-white placeholder-gray-400' 
                        : 'bg-white border border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder="Project discussion"
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2 ${
                    isDark ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    className={`w-full px-4 py-3 rounded-lg transition-all duration-300 focus:ring-2 focus:ring-purple-500 focus:outline-none resize-none ${
                      isDark 
                        ? 'bg-white/10 border border-white/20 text-white placeholder-gray-400' 
                        : 'bg-white border border-gray-300 text-gray-900 placeholder-gray-500'
                    }`}
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center"
                >
                  Send Message
                  <Send size={18} className="ml-2" />
                </button>
              </form>
            ) : (
              <div className="text-center py-12">
                <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
                <h3 className={`text-2xl font-bold mb-2 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  Message Sent!
                </h3>
                <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                  Thank you for reaching out. I'll get back to you soon!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
