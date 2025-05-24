
const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-slate-50 p-8 rounded-2xl shadow-lg">
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              Software Engineer at <span className="font-semibold text-blue-600">Jio Platforms Limited</span> since Dec 2023. 
              Experienced in developing web dashboards, optimizing APIs, and visualizing logistics data using React and Apex Charts. 
              Passionate about enterprise AI solutions and user-centric design with a focus on creating scalable, 
              efficient applications that solve real-world problems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
