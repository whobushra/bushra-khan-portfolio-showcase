
const Skills = () => {
  const skills = [
    { name: 'React', color: 'bg-blue-500' },
    { name: 'Node.js', color: 'bg-green-500' },
    { name: 'Flutter', color: 'bg-cyan-500' },
    { name: 'JavaScript', color: 'bg-yellow-500' },
    { name: 'MongoDB', color: 'bg-green-600' },
    { name: 'MySQL', color: 'bg-blue-600' },
    { name: 'Redux', color: 'bg-purple-500' },
    { name: 'Next.js', color: 'bg-gray-800' },
    { name: 'Express.js', color: 'bg-gray-600' },
    { name: 'Git', color: 'bg-orange-500' },
    { name: 'C++', color: 'bg-blue-700' },
    { name: 'DBMS', color: 'bg-indigo-500' },
    { name: 'OOP', color: 'bg-red-500' }
  ];

  return (
    <section id="skills" className="section-padding bg-muted/40 dark:bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 dark:bg-green-950/50 dark:text-green-300 rounded-full text-sm font-medium mb-4">
            My Skills
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Technologies & <span className="gradient-bg bg-clip-text text-transparent">Tools I Use</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>
        
        <div className="flex flex-wrap gap-4 justify-center max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div 
              key={skill.name}
              className={`${skill.color} text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {skill.name}
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-muted-foreground">
            Continuously learning and adapting to new technologies to deliver cutting-edge solutions
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
