
const Skills = () => {
  const skills = [
    { name: 'C++', level: 85 },
    { name: 'JavaScript', level: 90 },
    { name: 'ReactJS', level: 95 },
    { name: 'Redux', level: 80 },
    { name: 'Next.js', level: 85 },
    { name: 'Node.js', level: 88 },
    { name: 'Express.js', level: 85 },
    { name: 'MySQL', level: 82 },
    { name: 'MongoDB', level: 80 },
    { name: 'Git', level: 90 },
    { name: 'DBMS', level: 75 },
    { name: 'OOP', level: 85 }
  ];

  return (
    <section id="skills" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Skills <span className="text-cyan-400">and tools</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            For a more detailed overview, please feel free to check the tools that were used on a per-project basis.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={skill.name}
              className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-6 rounded-xl hover:border-cyan-400/50 transition-all duration-300 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-white font-medium text-lg">{skill.name}</span>
                <span className="text-cyan-400 text-sm">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-cyan-400 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{ 
                    width: `${skill.level}%`,
                    animation: `pulse-neon 2s ease-in-out infinite`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
