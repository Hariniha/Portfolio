import React from 'react';
import { Code, Palette, Zap, Users } from 'lucide-react';
import { useTheme } from '../App';

const About = () => {
  const { isDark } = useTheme();

  const skills = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code following best practices.',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating beautiful, intuitive interfaces that users love to interact with.',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing applications for speed, accessibility, and exceptional user experience.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively in teams and communicating complex ideas clearly.',
    },
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            About Me
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            I'm a passionate full-stack developer with 5+ years of experience creating 
            digital solutions that make a difference.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className={`text-lg leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Hi there! I'm Alex, a full-stack developer based in San Francisco. I specialize 
              in building exceptional digital experiences that are fast, accessible, and 
              visually appealing.
            </p>
            <p className={`text-lg leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              My journey in tech started 5 years ago, and I've had the privilege of working 
              with startups, agencies, and Fortune 500 companies. I love turning complex 
              problems into simple, beautiful solutions.
            </p>
            <p className={`text-lg leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-700'
            }`}>
              When I'm not coding, you'll find me exploring new design trends, contributing 
              to open source projects, or hiking in the beautiful California mountains.
            </p>
          </div>

          <div className={`relative p-8 rounded-2xl ${
            isDark 
              ? 'bg-white/5 backdrop-blur-sm border border-white/10' 
              : 'bg-white/80 backdrop-blur-sm border border-gray-200 shadow-xl'
          }`}>
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">
                <Code size={48} className="text-white" />
              </div>
              <h3 className={`text-2xl font-bold mb-2 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                5+ Years Experience
              </h3>
              <p className={`${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Building scalable web applications
              </p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.title}
              className={`p-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                isDark 
                  ? 'bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10' 
                  : 'bg-white/80 backdrop-blur-sm border border-gray-200 hover:shadow-xl'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 rounded-lg mb-4 flex items-center justify-center ${
                isDark ? 'bg-purple-500/20' : 'bg-purple-100'
              }`}>
                <skill.icon size={24} className="text-purple-600" />
              </div>
              <h3 className={`text-lg font-semibold mb-2 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                {skill.title}
              </h3>
              <p className={`text-sm ${
                isDark ? 'text-gray-400' : 'text-gray-600'
              }`}>
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;