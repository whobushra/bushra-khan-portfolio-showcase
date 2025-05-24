
import { Mail, Github, Linkedin, Phone, User } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    { label: "Email", value: "khanbush028@gmail.com", link: "mailto:khanbush028@gmail.com", icon: Mail },
    { label: "Phone", value: "+91-7021739514", link: "tel:+917021739514", icon: Phone },
    { label: "GitHub", value: "whobushra", link: "https://github.com/whobushra", icon: Github },
    { label: "LinkedIn", value: "bushra28", link: "https://linkedin.com/in/bushra28", icon: Linkedin },
    { label: "LeetCode", value: "bushra28", link: "https://leetcode.com/bushra28", icon: User }
  ];

  return (
    <section id="contact" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Let's talk about <br />
            your <span className="text-cyan-400">project</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting projects. 
            Feel free to reach out if you'd like to connect!
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contactInfo.map((contact, index) => (
              <a 
                key={index}
                href={contact.link}
                target={contact.link.startsWith('http') ? '_blank' : '_self'}
                rel={contact.link.startsWith('http') ? 'noopener noreferrer' : ''}
                className="group bg-gray-800/30 backdrop-blur-sm border border-gray-700 p-6 rounded-xl hover:border-cyan-400/50 transition-all duration-300 transform hover:-translate-y-2 text-center relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <contact.icon className="w-8 h-8 mx-auto mb-4 text-cyan-400 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-sm font-semibold text-white mb-2">{contact.label}</h3>
                  <p className="text-gray-400 group-hover:text-cyan-400 transition-colors duration-300">{contact.value}</p>
                </div>
              </a>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-cyan-400 hover:to-purple-500 transition-all duration-300 font-medium neon-glow">
              Contact us
            </button>
          </div>
        </div>
      </div>
      
      <div className="text-center mt-16 pt-8 border-t border-gray-800">
        <p className="text-gray-500">© 2024 Bushra Khan. Built with React & Tailwind CSS.</p>
      </div>
    </section>
  );
};

export default Contact;
