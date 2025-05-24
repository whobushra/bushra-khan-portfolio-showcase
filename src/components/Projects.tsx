
const Projects = () => {
  const projects = [
    {
      title: "Enterprise AI Agent Platform",
      description: "Web platform with a drag-and-drop Agent Builder, agent registration APIs, and multi-agent chat orchestration.",
      tech: ["React", "Node.js", "Docker", "APIs"],
      highlights: ["Drag-and-drop interface", "Multi-agent orchestration", "Enterprise-grade platform"]
    },
    {
      title: "Anytrac Shipment Dashboard",
      description: "Built a portal to track shipments and visualize sales/inventory data. Integrated with SAP and Raspberry Pi for real-time retail tracking.",
      tech: ["React", "Redux"],
      highlights: ["60% cost reduction", "Real-time analytics", "SAP integration"]
    },
    {
      title: "TSF Donation Portal",
      description: "Built a donation platform with Razorpay payment integration and responsive design.",
      tech: ["HTML", "CSS", "JavaScript"],
      highlights: ["Payment integration", "Responsive design", "User-friendly interface"]
    },
    {
      title: "International Roaming UI Overhaul",
      description: "Rebuilt front-end UI for better UX and consistency across the platform.",
      tech: ["React.js", "Node.js"],
      highlights: ["Improved UX", "Consistent design", "Performance optimization"]
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">{project.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
              
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-800 mb-2">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold text-gray-800 mb-2">Key Highlights:</h4>
                <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                  {project.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
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

export default Projects;
