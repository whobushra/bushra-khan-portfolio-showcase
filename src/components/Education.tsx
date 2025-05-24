
const Education = () => {
  const education = [
    {
      degree: "B.Tech, Computer Science",
      institution: "Shri Ram Institute of Technology",
      period: "2019–2023",
      description: "Bachelor's in Computer Science"
    },
    {
      degree: "Higher Secondary",
      institution: "Pt.L.S.Jha Model School", 
      period: "2017–2019",
      description: "University of Mumbai"
    }
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-cyan-400">EDUCATION</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 p-6 rounded-xl hover:border-cyan-400/50 transition-all duration-300 group">
              <div className="relative z-10">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">{edu.degree}</h3>
                <p className="text-gray-400 mb-2">{edu.institution}</p>
                <p className="text-cyan-400 font-medium text-sm">{edu.period}</p>
                <p className="text-gray-500 text-sm mt-2">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
