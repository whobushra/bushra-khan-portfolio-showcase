
const Experience = () => {
  const experiences = [
    {
      company: "Jio Platforms Limited",
      period: "Dec 2023 – Present",
      role: "Software Engineer",
      description: "Leading full-stack development initiatives for enterprise applications",
      achievements: [
        "Built interactive dashboards for logistics and supply chain management",
        "Improved API integration performance by 40% through optimization",
        "Implemented lazy loading and reusable UI components for better UX",
        "Developed real-time data visualization using React and Apex Charts"
      ],
      gradient: "from-blue-500 to-purple-600"
    },
    {
      company: "The Sparks Foundation",
      period: "Aug–Sep 2021",
      role: "Web Development Intern",
      description: "Contributed to open-source projects and donation platform development",
      achievements: [
        "Developed responsive donation UI with modern design principles",
        "Integrated Razorpay payment gateway for seamless transactions",
        "Collaborated with cross-functional team on project delivery"
      ],
      gradient: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section id="experience" className="section-padding bg-muted/40 dark:bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300 rounded-full text-sm font-medium mb-4">
            Experience
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Professional <span className="gradient-bg bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building impactful solutions and growing expertise across different organizations
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              <div className="bg-card text-card-foreground border border-border rounded-2xl shadow-lg overflow-hidden card-hover">
                <div className={`h-2 bg-gradient-to-r ${exp.gradient}`}></div>
                <div className="p-8">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">{exp.company}</h3>
                      <p className="text-lg font-semibold text-primary mb-2">{exp.role}</p>
                      <p className="text-muted-foreground">{exp.description}</p>
                    </div>
                    <span className="inline-flex items-center px-4 py-2 bg-muted text-muted-foreground rounded-full text-sm font-medium mt-4 md:mt-0">
                      {exp.period}
                    </span>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-foreground mb-4">Key Achievements:</h4>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mr-4 mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Timeline connector */}
              {index < experiences.length - 1 && (
                <div className="flex justify-center py-4">
                  <div className="w-px h-8 bg-border"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
