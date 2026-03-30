
import { Download, Mail, ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 pb-12 md:pt-28 md:pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-950 dark:via-background dark:to-slate-900">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 dark:bg-blue-500/20 rounded-full opacity-20 floating-animation"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-purple-200 dark:bg-purple-500/20 rounded-full opacity-30 floating-animation" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-green-200 dark:bg-emerald-500/15 rounded-full opacity-25 floating-animation" style={{animationDelay: '4s'}}></div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="text-left">
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 rounded-full text-sm font-medium mb-6">
            👋 Hello, I'm Bushra Khan
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Building Smart
            <span className="gradient-bg bg-clip-text text-transparent"> Digital Solutions</span>
            <br />with Modern Tech
          </h1>

          <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg">
            I'm a Full-Stack Developer crafting seamless web experiences using
            <span className="font-semibold text-primary"> React, Node.js, and Flutter</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={scrollToContact}
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              Let's Connect
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="/Bushra_Resume.pdf"
              download="Bushra_Resume.pdf"
              className="border-2 border-border text-foreground px-8 py-4 rounded-xl font-semibold hover:border-primary hover:text-primary transition-all duration-300 flex items-center justify-center gap-2">
              <Download size={20} />
              View Resume
            </a>
          </div>

          <div className="mt-12 flex items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              Available for projects
            </div>
            <div>Based in Mumbai, India</div>
          </div>
        </div>

        <div className="relative">
          <div className="relative z-10">
            {/* Placeholder for a professional illustration */}
            <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-950/50 dark:to-purple-950/50 rounded-3xl flex items-center justify-center border border-border/50">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">BK</span>
                </div>
                <p className="text-muted-foreground font-medium">Full-Stack Developer</p>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-200 dark:bg-yellow-500/10 rounded-2xl opacity-20 rotate-12"></div>
          <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-pink-200 dark:bg-pink-500/10 rounded-2xl opacity-30 -rotate-12"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
