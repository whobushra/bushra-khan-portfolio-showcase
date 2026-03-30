
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Target } from "lucide-react";
import { Link } from "react-router-dom";

const AnytracCaseStudy = () => {
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
        <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl text-white p-8 mb-12">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">AnyTrac IoT System</h1>
            <p className="text-xl mb-6 opacity-90">
              IoT-enabled article tracking system streamlining logistics across 2,500+ retail stores
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Dec 2023 - March 2025
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                Confidential Retail Chain
              </div>
            </div>
          </div>
        </div>

        {/* Executive Summary */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Executive Summary</h2>
          <div className="bg-card text-card-foreground rounded-xl p-8 shadow-lg border border-border">
            <p className="text-lg text-muted-foreground leading-relaxed">
              AnyTrac is a custom-built, IoT-enabled article tracking system designed to streamline and digitize the logistics of inward and outward inventory movement across 2,500+ retail stores. By integrating affordable edge hardware with real-time data synchronization and powerful analytics, AnyTrac delivers superior performance, scalability, and cost savings compared to off-the-shelf solutions.
            </p>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Technology Stack</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {['Python', 'Raspberry Pi', 'React.js', 'Node.js', 'Linux', 'Azure DevOps', 'MySQL', 'JavaScript', 'Redux'].map((tech) => (
              <div key={tech} className="bg-card text-card-foreground rounded-lg p-4 shadow-md border border-border">
                <span className="font-medium text-foreground">{tech}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Key Features & Achievements</h2>
          <div className="space-y-6">
            <div className="bg-card text-card-foreground rounded-xl p-6 shadow-lg border border-border">
              <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-3">📦 IoT-Based Article Tracking</h3>
              <ul className="text-muted-foreground space-y-2">
                <li>• Designed and implemented a hardware-software system using Raspberry Pi and Python</li>
                <li>• Enabled accurate real-time tracking of goods throughout the supply chain</li>
              </ul>
            </div>

            <div className="bg-card text-card-foreground rounded-xl p-6 shadow-lg border border-border">
              <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-3">🔁 SAP Integration</h3>
              <ul className="text-muted-foreground space-y-2">
                <li>• Seamlessly integrated with SAP ERP to keep inventory records synchronized</li>
                <li>• Ensured traceability from dispatch to delivery across all touchpoints</li>
              </ul>
            </div>

            <div className="bg-card text-card-foreground rounded-xl p-6 shadow-lg border border-border">
              <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-3">💻 Web-Based Monitoring Portal</h3>
              <p className="text-muted-foreground mb-3">Developed a React.js and Node.js based web application featuring:</p>
              <ul className="text-muted-foreground space-y-1 ml-4">
                <li>• Real-time shipment status</li>
                <li>• Inventory movement logs</li>
                <li>• Custom dashboards and visualizations</li>
                <li>• Downloadable reports and audit logs</li>
              </ul>
            </div>

            <div className="bg-card text-card-foreground rounded-xl p-6 shadow-lg border border-border">
              <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400 mb-3">🚚 Scalable Nationwide Rollout</h3>
              <ul className="text-muted-foreground space-y-2">
                <li>• Designed for deployment across 2,500+ retail outlets</li>
                <li>• Ensured system scalability, remote manageability, and hardware-software robustness</li>
                <li>• Centralized control via web portal enabled agile rollout and real-time oversight</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Impact */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">💰 Impact & Results</h2>
          <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-xl p-8">
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">60%</div>
                <p className="text-muted-foreground">Reduction in operational expenditure compared to commercial systems</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">2,500+</div>
                <p className="text-muted-foreground">Retail outlets with improved logistics accuracy</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">Real-time</div>
                <p className="text-muted-foreground">Data-driven insights for supply chain decisions</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <p className="text-muted-foreground">Improved logistics accuracy and reduced shipment discrepancies by 75%</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <p className="text-muted-foreground">Enhanced supply chain visibility across all touchpoints from distribution centers to point-of-sale</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <p className="text-muted-foreground">Enabled data-driven decisions through detailed insights into sales and inventory flow patterns</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <p className="text-muted-foreground">Reduced manual tracking efforts and human errors in inventory management</p>
              </div>
            </div>
          </div>
        </section>

        {/* System Architecture */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">System Architecture</h2>
          <div className="bg-card text-card-foreground rounded-xl p-8 shadow-lg border border-border">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-foreground mb-2">Edge Devices</h4>
                <p className="text-muted-foreground">Raspberry Pi running Linux OS, interfaced with barcode/RFID scanners and custom tracking software using Python</p>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">Backend Services</h4>
                <p className="text-muted-foreground">Built with Node.js, REST APIs, and MySQL for scalable data ingestion and SAP integration</p>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">Frontend UI</h4>
                <p className="text-muted-foreground">React.js-based responsive web application with Redux for state handling and JavaScript-driven visualizations</p>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">CI/CD & Monitoring</h4>
                <p className="text-muted-foreground">Leveraged Azure DevOps for version control, testing pipelines, and cloud-based deployments</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center">
          <Link 
            to="/#contact" 
            className="inline-flex items-center gap-2 bg-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-purple-700 transition-colors"
          >
            <Target className="w-4 h-4" />
            Discuss This Project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AnytracCaseStudy;
