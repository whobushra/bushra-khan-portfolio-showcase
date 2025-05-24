
const About = () => {
  return (
    <section id="about" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-cyan-400">ABOUT</span>
            </h2>
            <p className="text-sm text-cyan-400 mb-4">khanbush028@gmail.com</p>
            
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p>
                <span className="text-white font-semibold">Software Engineer</span> with over 1.5 years of experience 
                specializing in full-stack development for enterprise applications and logistics companies.
              </p>
              <p>
                I excel in developing interactive web dashboards at local and global levels. My greatest strength is 
                business awareness, which enables me to create user-centric solutions that truly solve real-world problems 
                through intuitive interfaces and applications.
              </p>
              <p className="text-sm text-gray-400">
                Mumbai, India<br />
                Dec 2023 - Present
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="w-80 h-80 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 rounded-full animate-pulse"></div>
              <div className="absolute inset-4 bg-gray-800 rounded-full border border-cyan-400/30"></div>
              <div className="absolute inset-8 bg-gradient-to-br from-gray-900 to-gray-800 rounded-full flex items-center justify-center">
                <span className="text-4xl font-bold text-cyan-400">BK</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
