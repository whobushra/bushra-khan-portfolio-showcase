
const Skills = () => {
  const skillCategories = [
    {
      category: "Languages",
      skills: [
        { name: 'Python', color: 'bg-blue-500' },
        { name: 'C#', color: 'bg-purple-500' },
        { name: 'JavaScript', color: 'bg-yellow-500' }
      ]
    },
    {
      category: "Frameworks",
      skills: [
        { name: '.NET Core', color: 'bg-purple-600' },
        { name: 'Node.js', color: 'bg-green-500' },
        { name: 'React.js', color: 'bg-blue-500' }
      ]
    },
    {
      category: "Cloud & Tools",
      skills: [
        { name: 'Azure', color: 'bg-blue-600' },
        { name: 'Azure DevOps', color: 'bg-blue-700' },
        { name: 'Docker', color: 'bg-cyan-500' },
        { name: 'AKS', color: 'bg-indigo-500' }
      ]
    },
    {
      category: "Databases",
      skills: [
        { name: 'PostgreSQL', color: 'bg-blue-700' },
        { name: 'MongoDB', color: 'bg-green-600' },
        { name: 'SQL Server', color: 'bg-red-500' },
        { name: 'Redis', color: 'bg-red-600' }
      ]
    },
    {
      category: "Messaging/Logging",
      skills: [
        { name: 'Kafka', color: 'bg-gray-800' },
        { name: 'ELK Stack', color: 'bg-yellow-600' }
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
            Technical Skills
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Technologies & <span className="gradient-bg bg-clip-text text-transparent">Tools I Master</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive technology stack for building enterprise-grade, scalable solutions
          </p>
        </div>
        
        <div className="space-y-8 max-w-5xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.category} className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">{category.category}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, index) => (
                  <div 
                    key={skill.name}
                    className={`${skill.color} text-white px-4 py-2 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
                    style={{ animationDelay: `${(categoryIndex * 100) + (index * 50)}ms` }}
                  >
                    {skill.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600">
            Continuously expanding expertise in emerging technologies and leading industry best practices
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
