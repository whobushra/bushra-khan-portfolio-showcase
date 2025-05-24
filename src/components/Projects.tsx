
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Enterprise AI Hub",
      description: "Drag-and-drop agent builder and multi-agent chat orchestration across enterprise systems (SAP, HRMS, Procurement). Leading a cross-functional team to deliver AI-powered automation.",
      tech: ["React", "Node.js", "Python", "Azure OpenAI", "AKS"],
      category: "AI Platform",
      gradient: "from-blue-500 to-cyan-500",
      achievement: "Enterprise-wide deployment"
    },
    {
      title: "AnyTrac IoT System",
      description: "Retail article tracking across 2,500+ stores using Raspberry Pi, SAP integration, and real-time dashboards. Revolutionary supply chain visibility solution.",
      tech: ["IoT", "Raspberry Pi", "SAP", "React", "Real-time Analytics"],
      category: "IoT & Analytics",
      gradient: "from-green-500 to-teal-500",
      achievement: "60% operational cost reduction"
    },
    {
      title: "Reliance Foundation Scholarships",
      description: "Re-engineered 250K+ user scholarship system with Redis caching and React SPA architecture. Transformed user experience with performance optimization.",
      tech: ["React", "Redis", "Node.js", "Performance Optimization"],
      category: "Platform Engineering",
      gradient: "from-purple-500 to-pink-500",
      achievement: "Load times: 4s → 1s"
    },
    {
      title: "AJIO Catalog Automation",
      description: "Kafka-driven architecture automating onboarding of 20K+ SKUs daily. Implemented ELK-based debugging and monitoring for e-commerce scale.",
      tech: ["Kafka", "ELK Stack", "Microservices", "Automation"],
      category: "E-commerce Platform",
      gradient: "from-orange-500 to-red-500",
      achievement: "20K+ SKUs automated daily"
    }
  ];

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">
            Project Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Leading <span className="gradient-bg bg-clip-text text-transparent">Complex Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Showcasing enterprise-scale solutions and technical leadership across diverse domains
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden card-hover group border border-gray-100"
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                <div className="text-white text-center p-6">
                  <div className="text-sm font-medium opacity-90 mb-2">{project.category}</div>
                  <div className="text-2xl font-bold">{project.title}</div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-lg"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/20 rounded-full"></div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="mb-4 p-3 bg-green-50 rounded-lg border border-green-200">
                  <div className="text-green-700 font-semibold text-sm">Key Achievement: {project.achievement}</div>
                </div>
                
                <div className="mb-6">
                  <div className="text-sm font-semibold text-gray-700 mb-2">Tech Stack:</div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <button className="flex-1 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    View Case Study
                  </button>
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-colors duration-300">
                    <Github className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
