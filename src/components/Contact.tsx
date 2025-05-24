
import { Mail, Github } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    { label: "Email", value: "khanbush028@gmail.com", link: "mailto:khanbush028@gmail.com", icon: Mail },
    { label: "Phone", value: "+91-7021739514", link: "tel:+917021739514" },
    { label: "GitHub", value: "whobushra", link: "https://github.com/whobushra", icon: Github },
    { label: "LinkedIn", value: "bushra28", link: "https://linkedin.com/in/bushra28" },
    { label: "LeetCode", value: "bushra28", link: "https://leetcode.com/bushra28" }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
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
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center group"
              >
                {contact.icon && (
                  <contact.icon className="w-8 h-8 mx-auto mb-4 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                )}
                <h3 className="text-sm font-semibold text-gray-800 mb-2">{contact.label}</h3>
                <p className="text-gray-600 group-hover:text-blue-600 transition-colors duration-300">{contact.value}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="text-center mt-16 pt-8 border-t border-gray-200">
        <p className="text-gray-600">© 2024 Bushra Khan. Built with React & Tailwind CSS.</p>
      </div>
    </section>
  );
};

export default Contact;
