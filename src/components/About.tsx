
const About = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="w-80 h-80 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-950/40 dark:to-purple-950/40 rounded-3xl"></div>
              <div className="absolute inset-4 bg-card rounded-3xl shadow-lg border border-border flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">BK</span>
                  </div>
                  <p className="text-muted-foreground font-medium">Software Engineer</p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-yellow-200 dark:bg-yellow-500/15 rounded-2xl opacity-30 rotate-12"></div>
            <div className="absolute bottom-0 left-0 w-12 h-12 bg-green-200 dark:bg-emerald-500/15 rounded-xl opacity-40 -rotate-12"></div>
          </div>
          
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 dark:bg-purple-950/50 dark:text-purple-300 rounded-full text-sm font-medium mb-6">
              About Me
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Passionate About Creating 
              <span className="gradient-bg bg-clip-text text-transparent"> Digital Excellence</span>
            </h2>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                <span className="font-semibold text-foreground">Software Engineer at Jio Platforms Limited</span> since Dec 2023, 
                with over 1.5 years of experience specializing in full-stack development for enterprise applications.
              </p>
              
              <p>
                I excel in developing interactive web dashboards and applications at both local and global scales. 
                My greatest strength is business awareness, which enables me to create user-centric solutions that truly 
                solve real-world problems through intuitive interfaces and applications.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div>
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">1.5+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">8+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-950/40 rounded-xl border-l-4 border-blue-500">
              <p className="text-blue-700 dark:text-blue-300 font-medium">
                "Building scalable UIs, APIs, and AI agent systems with modern technologies"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
