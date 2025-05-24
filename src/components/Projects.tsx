
const Projects = () => {
  const projects = [
    {
      title: "Enterprise AI Agent Platform",
      description: "Web platform with a drag-and-drop Agent Builder, agent registration APIs, and multi-agent chat orchestration.",
      tech: ["React", "Node.js", "Docker", "APIs"],
      highlights: ["Drag-and-drop interface", "Multi-agent orchestration", "Enterprise-grade platform"],
      category: "Web Platform"
    },
    {
      title: "Anytrac Shipment Dashboard",
      description: "Built a portal to track shipments and visualize sales/inventory data. Integrated with SAP and Raspberry Pi for real-time retail tracking.",
      tech: ["React", "Redux"],
      highlights: ["60% cost reduction", "Real-time analytics", "SAP integration"],
      category: "Dashboard"
    },
    {
      title: "TSF Donation Portal",
      description: "Built a donation platform with Razorpay payment integration and responsive design.",
      tech: ["HTML", "CSS", "JavaScript"],
      highlights: ["Payment integration", "Responsive design", "User-friendly interface"],
      category: "E-commerce"
    },
    {
      title: "International Roaming UI Overhaul",
      description: "Rebuilt front-end UI for better UX and consistency across the platform.",
      tech: ["React.js", "Node.js"],
      highlights: ["Improved UX", "Consistent design", "Performance optimization"],
      category: "UI/UX"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Take a look at what we've <span className="text-cyan-400">created</span> and be <br />
            <span className="text-purple-400">inspired</span> by
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-gray-800/30 backdrop-blur-sm border border-gray-700 p-8 rounded-2xl hover:border-cyan-400/50 transition-all duration-500 transform hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs text-cyan-400 font-medium px-3 py-1 bg-cyan-400/10 rounded-full border border-cyan-400/20">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-300 mb-3">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-600 hover:border-cyan-400/50 transition-colors duration-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Highlights:</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="text-gray-400 text-sm flex items-center">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 font-medium">
            See more
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
