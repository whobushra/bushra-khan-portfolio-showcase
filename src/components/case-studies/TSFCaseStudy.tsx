
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Target } from "lucide-react";
import { Link } from "react-router-dom";

const TSFCaseStudy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-6 py-12">
        <Link 
          to="/#projects" 
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-colors font-medium"
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
          <h2 className="text-3xl font-bold text-foreground mb-6">Executive Summary</h2>
          <div className="bg-card text-card-foreground rounded-xl p-8 shadow-lg border border-border">
            <p className="text-lg text-muted-foreground leading-relaxed">
              During a web development internship at The Sparks Foundation, a responsive and secure online donation platform was developed to support the foundation's fundraising efforts. The platform includes a modern UI, seamless payment integration, and real-time donation tracking—delivering a smooth user experience and increasing donor engagement.
            </p>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Technology Stack</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Razorpay'].map((tech) => (
              <div key={tech} className="bg-card text-card-foreground rounded-lg p-4 shadow-md border border-border">
                <span className="font-medium text-foreground">{tech}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Key Features & Highlights</h2>
          <div className="space-y-6">
            <div className="bg-card text-card-foreground rounded-xl p-6 shadow-lg border border-border">
              <h3 className="text-xl font-bold text-green-600 dark:text-green-400 mb-3">🌐 Responsive Web Design</h3>
              <ul className="text-muted-foreground space-y-2">
                <li>• Built a fully responsive website using HTML, CSS, JavaScript, and Bootstrap</li>
                <li>• Optimized for desktop, tablet, and mobile devices to ensure accessibility across all user types</li>
              </ul>
            </div>

            <div className="bg-card text-card-foreground rounded-xl p-6 shadow-lg border border-border">
              <h3 className="text-xl font-bold text-green-600 dark:text-green-400 mb-3">💳 Payment Gateway Integration</h3>
              <ul className="text-muted-foreground space-y-2">
                <li>• Integrated Razorpay to handle secure, real-time transactions directly on the platform</li>
                <li>• Enabled multiple payment modes (credit/debit cards, UPI, net banking) with secure encryption</li>
                <li>• Implemented transaction confirmation and receipt generation</li>
              </ul>
            </div>

            <div className="bg-card text-card-foreground rounded-xl p-6 shadow-lg border border-border">
              <h3 className="text-xl font-bold text-green-600 dark:text-green-400 mb-3">📊 Real-Time Donation Tracking</h3>
              <ul className="text-muted-foreground space-y-2">
                <li>• Provided real-time feedback on donation status</li>
                <li>• Updated the UI dynamically to reflect successful transactions</li>
                <li>• Enabled basic reporting and acknowledgment features for transparency</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Impact */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Impact & Results</h2>
          <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-xl p-8">
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">100%</div>
                <p className="text-muted-foreground">Mobile responsive design ensuring accessibility</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">Real-time</div>
                <p className="text-muted-foreground">Transaction processing and confirmation</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">Zero Cost</div>
                <p className="text-muted-foreground">Solution tailored to foundation's budget</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <p className="text-muted-foreground">Streamlined donation process, encouraging more contributions by simplifying user experience</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <p className="text-muted-foreground">Improved donor trust and engagement through real-time updates and payment confirmations</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <p className="text-muted-foreground">Provided The Sparks Foundation with a scalable, no-cost solution tailored to their branding and mission</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <p className="text-muted-foreground">Enhanced transparency in donation processing with automated receipt generation</p>
              </div>
            </div>
          </div>
        </section>

        {/* Role & Learning */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Role & Learning Experience</h2>
          <div className="bg-card text-card-foreground rounded-xl p-8 shadow-lg border border-border">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-foreground mb-3">Role</h4>
                <p className="text-muted-foreground">Web Development Intern</p>
                <p className="text-muted-foreground">Full-stack development and deployment</p>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-3">Key Learnings</h4>
                <ul className="text-muted-foreground space-y-1">
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
          <h2 className="text-3xl font-bold text-foreground mb-6">Conclusion</h2>
          <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-xl p-8">
            <p className="text-muted-foreground leading-relaxed">
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
