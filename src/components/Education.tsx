
const Education = () => {
  const education = [
    {
      degree: "B.Tech, Computer Science",
      institution: "Shri Ram Institute of Technology",
      period: "2019–2023"
    },
    {
      degree: "Higher Secondary",
      institution: "Pt.L.S.Jha Model School",
      period: "2017–2019"
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Education</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-gradient-to-r from-blue-50 to-slate-50 p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-2">{edu.degree}</h3>
              <p className="text-gray-600 mb-2">{edu.institution}</p>
              <p className="text-blue-600 font-medium">{edu.period}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
