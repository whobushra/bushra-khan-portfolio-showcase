
import { ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      title: "Enterprise AI Agent Platform",
      description: "Web platform with a drag-and-drop Agent Builder, agent registration APIs, and multi-agent chat orchestration for enterprise automation.",
      tech: ["React", "Node.js", "Docker","MongoDB", "Azure OpenAI"],
      category: "AI Platform",
      gradient: "from-blue-500 to-cyan-500",
      caseStudyPath: "/case-study/enterprise-ai"
    },
    {
      title: "Anytrac Shipment Dashboard",
      description: "Built a portal to track shipments and visualize sales/inventory data. Integrated with SAP and Raspberry Pi for real-time retail tracking.",
      tech: ["React", "Redux", "Node.js", "SAP Integration"],
      category: "Analytics Dashboard",
      gradient: "from-purple-500 to-pink-500",
      // impact: "60% cost reduction",
      caseStudyPath: "/case-study/anytrac"
    },
    {
      title: "International Roaming UI Overhaul",
      description: "Complete front-end redesign for better user experience, improved performance, and consistent design patterns across the platform.",
      tech: ["React.js", "Node.js", "UI/UX"],
      category: "UI/UX Design",
      gradient: "from-orange-500 to-red-500"
    },
     {
      title: "TSF Donation Portal",
      description: "Responsive donation platform with Razorpay payment integration, user authentication, and real-time donation tracking.",
      tech: ["HTML", "CSS", "JavaScript", "Razorpay"],
      category: "E-commerce",
      gradient: "from-green-500 to-teal-500",
      caseStudyPath: "/case-study/tsf-donation"
    },
  ];

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium mb-4">
            Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured <span className="gradient-bg bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Showcasing innovative solutions and technical expertise across different domains
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
                
                {/* {project.impact && (
                  <div className="mb-4 p-3 bg-green-50 rounded-lg border border-green-200">
                    <div className="text-green-700 font-semibold text-sm">Impact: {project.impact}</div>
                  </div>
                )} */}
                
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
                  {project.caseStudyPath ? (
                    <Link 
                      to={project.caseStudyPath}
                      className="flex-1 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Case Study
                    </Link>
                  ) : (
                    <button className="flex-1 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      View Case Study
                    </button>
                  )}
                  {/* <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-colors duration-300">
                    <Github className="w-4 h-4" />
                  </button> */}

                  {project.title === "TSF Donation Portal" && (
  <a
    href="https://tsf-donation-website.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-colors duration-300 flex items-center gap-2"
  >
    <ExternalLink className="w-4 h-4" />
    Live Demo
  </a>
) }

                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300">
            View All Projects
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Projects;
