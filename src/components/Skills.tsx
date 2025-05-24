
const Skills = () => {
  const skills = [
    'C++', 'JavaScript', 'ReactJS', 'Redux', 'Next.js', 
    'Node.js', 'Express.js', 'MySQL', 'MongoDB', 'Git', 'DBMS', 'OOP'
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Skills</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <div 
              key={skill}
              className="bg-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 border border-gray-200"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <span className="text-gray-700 font-medium">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
