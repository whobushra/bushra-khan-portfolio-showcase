
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-700 dark:bg-green-950/50 dark:text-green-300 rounded-full text-sm font-medium mb-4">
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's Work <span className="gradient-bg bg-clip-text text-transparent">Together</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your digital vision to life? Let's discuss your project and create something amazing together.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-muted/50 dark:bg-muted/30 p-8 rounded-2xl border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-input bg-background text-foreground rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-colors placeholder:text-muted-foreground"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-input bg-background text-foreground rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-colors placeholder:text-muted-foreground"
                    placeholder="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-input bg-background text-foreground rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-colors placeholder:text-muted-foreground"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-input bg-background text-foreground rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-colors placeholder:text-muted-foreground"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea 
                  rows={5}
                  className="w-full px-4 py-3 border border-input bg-background text-foreground rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-colors resize-none placeholder:text-muted-foreground"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8">
                I'm always excited to work on new projects and collaborate with passionate teams. 
                Feel free to reach out through any of the channels below.
              </p>
            </div>
            
            <div className="space-y-6">
              <a 
                href="mailto:khanbush028@gmail.com"
                className="flex items-center p-4 bg-card border border-border rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-950/50 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/40 transition-colors">
                  <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Email</div>
                  <div className="text-muted-foreground">khanbush028@gmail.com</div>
                </div>
              </a>
              
              <a 
                href="tel:+917021739514"
                className="flex items-center p-4 bg-card border border-border rounded-xl shadow-sm hover:shadow-md transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-green-100 dark:bg-green-950/50 rounded-lg flex items-center justify-center mr-4 group-hover:bg-green-200 dark:group-hover:bg-green-900/40 transition-colors">
                  <Phone className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Phone</div>
                  <div className="text-muted-foreground">+91-7021739514</div>
                </div>
              </a>
              
              <div className="flex items-center p-4 bg-card border border-border rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-950/50 rounded-lg flex items-center justify-center mr-4">
                  <MapPin className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Location</div>
                  <div className="text-muted-foreground">Mumbai, India</div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-foreground mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/whobushra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center hover:bg-gray-800 transition-colors"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a 
                  href="https://linkedin.com/in/bushra28"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="mt-24 pt-8 border-t border-border">
        <div className="text-center">
          <p className="text-muted-foreground mb-4">© 2024 Bushra Khan. All rights reserved.</p>
          <p className="text-sm text-muted-foreground/80">Built with React & Tailwind CSS</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
