
import { Download, Mail, ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 floating-animation"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-indigo-200 rounded-full opacity-30 floating-animation" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-green-200 rounded-full opacity-25 floating-animation" style={{animationDelay: '4s'}}></div>
      
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="text-left">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            👋 Hello, I'm Vikram Paul
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Building Scalable 
            <span className="gradient-bg bg-clip-text text-transparent"> Solutions</span> 
            <br />with Leadership & Precision
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-lg">
            Hi, I'm Vikram — a Senior Software Engineer with 
            <span className="font-semibold text-blue-600"> 7+ years of experience</span> building 
            high-performance platforms and leading engineering teams at scale.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={scrollToContact}
              className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-blue-500 hover:text-blue-600 transition-all duration-300 flex items-center justify-center gap-2">
              <Download size={20} />
              Download Resume
            </button>
          </div>
          
          <div className="mt-12 flex items-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              Available for leadership roles
            </div>
            <div>Based in Mumbai, India</div>
          </div>
        </div>
        
        <div className="relative">
          <div className="relative z-10">
            {/* Professional illustration placeholder */}
            <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">VP</span>
                </div>
                <p className="text-gray-600 font-medium">Senior Software Engineer & Tech Lead</p>
              </div>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-200 rounded-2xl opacity-20 rotate-12"></div>
          <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-pink-200 rounded-2xl opacity-30 -rotate-12"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
