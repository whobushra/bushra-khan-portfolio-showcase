
import { Code, Server, Bot, Smartphone } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend Development",
      description: "Creating responsive and interactive user interfaces with React, Flutter, and modern CSS frameworks.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Backend & APIs",
      description: "Building scalable server-side applications and RESTful APIs using Node.js, Express, and database integration.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "GenAI Platform Development",
      description: "Developing enterprise AI agent systems with multi-agent orchestration and intelligent automation.",
      gradient: "from-green-500 to-teal-500"
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
            I Provide The Best <span className="gradient-bg bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Delivering end-to-end digital solutions with modern technologies and best practices
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 card-hover group"
            >
              <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.gradient} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
