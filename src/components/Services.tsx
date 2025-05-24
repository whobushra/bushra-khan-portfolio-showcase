
import { Code, Cloud, Bot, Users } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Scalable Backend Architecture",
      description: "Building robust, high-performance systems using .NET Core, Node.js, and Python with microservices architecture.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "Cloud & DevOps",
      description: "Expert in Azure cloud services, AKS orchestration, CI/CD pipelines, and containerized deployment strategies.",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "AI Agent Platforms",
      description: "Developing enterprise AI solutions with LangChain, RAG systems, MCP protocols, and Azure OpenAI integration.",
      gradient: "from-green-500 to-teal-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Leadership & Mentorship",
      description: "Leading cross-functional teams, mentoring junior engineers, and driving technical excellence across organizations.",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
            What I Do
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            I Deliver Excellence in <span className="gradient-bg bg-clip-text text-transparent">Every Domain</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Combining technical expertise with leadership skills to build scalable solutions and empower teams
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 card-hover group"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.gradient} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
