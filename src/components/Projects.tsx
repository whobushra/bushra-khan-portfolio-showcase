
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

type Project = {
  title: string;
  description: string;
  tech: string[];
  category: string;
  gradient: string;
  caseStudyPath?: string;
  liveDemoUrl?: string;
};

const Projects = () => {
  const projects: Project[] = [
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
      title: "Jio Video Analytics (JVA) Platform",
      description:
        "AI-powered retail video analytics—real-time dashboards for traffic, queues, heatmaps, and demographics; store planner with ROIs; Kafka streaming and SSE alerts for operational anomalies.",
      tech: [
        "React",
        "TypeScript",
        "Redux Toolkit",
        "Node.js",
        "Kafka",
        "SSE",
        "MUI",
        "ApexCharts",
      ],
      category: "Video AI · Retail",
      gradient: "from-slate-700 to-emerald-600",
      caseStudyPath: "/case-study/jio-video-analytics",
    },
    {
      title: "International Roaming Partner Portal",
      description:
        "Web portal automating international roaming partner onboarding—multi-team workflows, RBAC, SIM lifecycle, documents, and network readiness in one transparent pipeline.",
      tech: ["React.js", "Node.js", "Workflow", "RBAC", "UI/UX"],
      category: "Telecom / Operations",
      gradient: "from-orange-500 to-red-500",
      caseStudyPath: "/case-study/international-roaming",
    },
    {
      title: "KNEWY — Organised Learning Hub",
      description:
        "Final year project: a free static learning site with three tracks (frontend, backend, React)—interactive roadmaps with saved progress, documentation hubs, and curated YouTube tutorials.",
      tech: ["HTML", "CSS", "JavaScript", "Bootstrap", "jQuery", "GitHub Pages"],
      category: "Education · FYP",
      gradient: "from-sky-500 to-indigo-600",
      caseStudyPath: "/case-study/knewy",
      liveDemoUrl: "https://whobushra.github.io/Organised-learning-knewy/",
    },
    {
      title: "TSF Donation Portal",
      description: "Responsive donation platform with Razorpay payment integration, user authentication, and real-time donation tracking.",
      tech: ["HTML", "CSS", "JavaScript", "Razorpay"],
      category: "E-commerce",
      gradient: "from-green-500 to-teal-500",
      caseStudyPath: "/case-study/tsf-donation",
      liveDemoUrl: "https://tsf-donation-website.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 dark:bg-purple-950/50 dark:text-purple-300 rounded-full text-sm font-medium mb-4">
            Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Featured <span className="gradient-bg bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative solutions and technical expertise across different domains
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="flex flex-col h-full min-h-0 bg-card text-card-foreground rounded-2xl shadow-lg overflow-hidden card-hover group border border-border"
            >
              <div className={`h-48 shrink-0 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                <div className="text-white text-center p-6">
                  <div className="text-sm font-medium opacity-90 mb-2">{project.category}</div>
                  <div className="text-2xl font-bold">{project.title}</div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-lg"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 bg-white/20 rounded-full"></div>
              </div>
              
              <div className="p-6 flex flex-col flex-1 min-h-0">
                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                
                <div className="mb-6">
                  <div className="text-sm font-semibold text-foreground mb-2">Tech Stack:</div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mt-auto flex flex-wrap gap-3">
                  {project.caseStudyPath ? (
                    <Link 
                      to={project.caseStudyPath}
                      className="flex-1 min-w-[140px] bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:opacity-90 transition-colors duration-300 flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Case Study
                    </Link>
                  ) : (
                    <button type="button" className="flex-1 min-w-[140px] bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:opacity-90 transition-colors duration-300 flex items-center justify-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      View Case Study
                    </button>
                  )}

                  {project.liveDemoUrl && (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 border border-border text-foreground rounded-lg hover:bg-muted transition-colors duration-300 flex items-center gap-2 shrink-0"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}

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
