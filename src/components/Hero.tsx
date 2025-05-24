
import { Download, Mail } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-6">
      <div className="text-center max-w-4xl mx-auto relative z-10">
        <div className="animate-fade-in">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 leading-tight">
              Hello,
            </h1>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              I am <span className="neon-text text-cyan-400">Bushra</span>,
            </h2>
            <h3 className="text-3xl md:text-4xl text-gray-300 mb-8 font-light">
              Full-Stack Developer
            </h3>
          </div>
          
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Currently based in Mumbai. I love building 
            <span className="text-cyan-400 font-medium"> interactive </span>
            digital experiences on the web.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group relative bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 neon-glow flex items-center justify-center gap-2">
              <Download size={20} />
              Let's get in touch!
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </button>
            
            <button 
              onClick={scrollToContact}
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Mail size={20} />
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
