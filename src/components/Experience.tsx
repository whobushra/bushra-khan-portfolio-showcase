
const Experience = () => {
  const experiences = [
    {
      company: "Jio Platforms Limited",
      period: "Dec 2023 – Present",
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
    <section id="experience" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Experience</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 pb-12">
              <div className="absolute left-0 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
              {index < experiences.length - 1 && (
                <div className="absolute left-2 top-4 w-0.5 h-16 bg-blue-200"></div>
              )}
              <div className="bg-white p-6 rounded-xl shadow-lg ml-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{exp.company}</h3>
                <p className="text-blue-600 font-medium mb-4">{exp.period}</p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
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
