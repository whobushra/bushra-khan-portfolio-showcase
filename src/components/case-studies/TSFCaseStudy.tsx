
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Target } from "lucide-react";
import { Link } from "react-router-dom";

const TSFCaseStudy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-12">
        <Link 
          to="/#projects" 
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>

        {/* Hero Section */}
        <div className="bg-gradient-to-br from-green-500 to-teal-500 rounded-2xl text-white p-8 mb-12">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">TSF Donation Platform</h1>
            <p className="text-xl mb-6 opacity-90">
              Responsive and secure online donation platform with seamless payment integration
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                August 2021 - September 2021
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                The Sparks Foundation
              </div>
            </div>
          </div>
        </div>

        {/* Executive Summary */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Executive Summary</h2>
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <p className="text-lg text-gray-700 leading-relaxed">
              During a web development internship at The Sparks Foundation, a responsive and secure online donation platform was developed to support the foundation's fundraising efforts. The platform includes a modern UI, seamless payment integration, and real-time donation tracking—delivering a smooth user experience and increasing donor engagement.
            </p>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Technology Stack</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Razorpay'].map((tech) => (
              <div key={tech} className="bg-white rounded-lg p-4 shadow-md border border-gray-200">
                <span className="font-medium text-gray-800">{tech}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Features & Highlights</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-green-600 mb-3">🌐 Responsive Web Design</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Built a fully responsive website using HTML, CSS, JavaScript, and Bootstrap</li>
                <li>• Optimized for desktop, tablet, and mobile devices to ensure accessibility across all user types</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-green-600 mb-3">💳 Payment Gateway Integration</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Integrated Razorpay to handle secure, real-time transactions directly on the platform</li>
                <li>• Enabled multiple payment modes (credit/debit cards, UPI, net banking) with secure encryption</li>
                <li>• Implemented transaction confirmation and receipt generation</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-green-600 mb-3">📊 Real-Time Donation Tracking</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Provided real-time feedback on donation status</li>
                <li>• Updated the UI dynamically to reflect successful transactions</li>
                <li>• Enabled basic reporting and acknowledgment features for transparency</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Impact */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Impact & Results</h2>
          <div className="bg-green-50 border border-green-200 rounded-xl p-8">
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">100%</div>
                <p className="text-gray-700">Mobile responsive design ensuring accessibility</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">Real-time</div>
                <p className="text-gray-700">Transaction processing and confirmation</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">Zero Cost</div>
                <p className="text-gray-700">Solution tailored to foundation's budget</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <p className="text-gray-700">Streamlined donation process, encouraging more contributions by simplifying user experience</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <p className="text-gray-700">Improved donor trust and engagement through real-time updates and payment confirmations</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <p className="text-gray-700">Provided The Sparks Foundation with a scalable, no-cost solution tailored to their branding and mission</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <p className="text-gray-700">Enhanced transparency in donation processing with automated receipt generation</p>
              </div>
            </div>
          </div>
        </section>

        {/* Role & Learning */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Role & Learning Experience</h2>
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Role</h4>
                <p className="text-gray-700">Web Development Intern</p>
                <p className="text-gray-700">Full-stack development and deployment</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-3">Key Learnings</h4>
                <ul className="text-gray-700 space-y-1">
                  <li>• Payment gateway integration</li>
                  <li>• Responsive web development</li>
                  <li>• Real-world project deployment</li>
                  <li>• Social impact through technology</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Conclusion</h2>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-8">
            <p className="text-gray-700 leading-relaxed">
              The TSF Donation Platform demonstrates how even lightweight tech stacks can produce high-impact web applications. With a focus on responsiveness, usability, and seamless payment integration, the platform empowered The Sparks Foundation to receive and manage donations efficiently. The project also provided valuable hands-on experience in building real-world, socially impactful solutions as part of a professional internship.
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center">
          <Link 
            to="/#contact" 
            className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-green-700 transition-colors"
          >
            <Target className="w-4 h-4" />
            Discuss This Project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TSFCaseStudy;
