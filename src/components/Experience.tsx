
const Experience = () => {
  const experiences = [
    {
      company: "Jio Platforms Limited",
      period: "Dec 2023 – Present",
      role: "Software Engineer",
      achievements: [
        "Built dashboards for logistics",
        "Improved API integration (40% faster load times)",
        "Lazy loading and reusable UI components"
      ]
    },
    {
      company: "The Sparks Foundation",
      period: "Aug–Sep 2021",
      role: "Intern",
      achievements: [
        "Developed donation UI and Razorpay integration"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-cyan-400">EXPERIENCE</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 pb-12 group">
              <div className="absolute left-0 top-0 w-4 h-4 bg-cyan-400 rounded-full group-hover:scale-125 transition-transform duration-300 shadow-lg shadow-cyan-400/50"></div>
              {index < experiences.length - 1 && (
                <div className="absolute left-2 top-4 w-0.5 h-16 bg-gradient-to-b from-cyan-400 to-purple-500"></div>
              )}
              <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 p-6 rounded-xl ml-6 hover:border-cyan-400/50 transition-all duration-300 group-hover:-translate-y-1">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <h3 className="text-xl font-bold text-white mb-2">{exp.company}</h3>
                  <span className="text-cyan-400 font-medium text-sm bg-cyan-400/10 px-3 py-1 rounded-full">{exp.period}</span>
                </div>
                {exp.role && (
                  <p className="text-purple-400 font-medium mb-4">{exp.role}</p>
                )}
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-gray-400 flex items-start">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3 mt-2"></div>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
