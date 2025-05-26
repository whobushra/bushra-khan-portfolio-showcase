
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Target } from "lucide-react";
import { Link } from "react-router-dom";

const EnterpriseAICaseStudy = () => {
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
        <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl text-white p-8 mb-12">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Enterprise AI Agent Platform</h1>
            <p className="text-xl mb-6 opacity-90">
              A centralized AI Hub enabling organizations to create, manage, and deploy intelligent conversational agents across business units
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Feb 2023 - Present
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                Internal Enterprise Solution
              </div>
            </div>
          </div>
        </div>

        {/* Executive Summary */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Executive Summary</h2>
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <p className="text-lg text-gray-700 leading-relaxed">
              The Enterprise AI Agent Platform was developed as a centralized AI Hub to enable large organizations to seamlessly create, manage, and deploy intelligent conversational agents across business units. Through an intuitive drag-and-drop interface, robust API ecosystem, and integration with core enterprise systems, the platform empowers non-technical users to build scalable, secure, and customized AI workflows with minimal engineering dependency.
            </p>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Technology Stack</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {['React.js', 'Node.js', 'Python', 'Azure OpenAI', 'Azure Kubernetes Services', 'Azure DevOps', 'MongoDB', 'PostgreSQL', 'Docker'].map((tech) => (
              <div key={tech} className="bg-white rounded-lg p-4 shadow-md border border-gray-200">
                <span className="font-medium text-gray-800">{tech}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Features & Achievements</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-blue-600 mb-3">🔧 Drag-and-Drop Agent Builder</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Developed a user-friendly, visual interface for designing AI agents without heavy coding requirements</li>
                <li>• Enabled rapid prototyping and deployment of AI workflows by domain experts and business users</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-blue-600 mb-3">🧠 Multi-Agent Chat Orchestration</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Implemented a Chat Assistant framework supporting coordinated communication across multiple AI agents</li>
                <li>• Facilitated seamless interactions and data exchange between agents to execute complex, end-to-end workflows</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-blue-600 mb-3">🔗 API-Based Agent Registration</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Developed RESTful APIs to allow programmatic registration, deployment, and management of agents</li>
                <li>• Standardized the onboarding of AI models and workflows from multiple departments</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-blue-600 mb-3">🔐 Enterprise-Grade Security</h3>
              <ul className="text-gray-700 space-y-2">
                <li>• Integrated SAML 2.0 authentication to ensure secure access across varied organizational units</li>
                <li>• Built platform to comply with enterprise governance, scalability, and privacy requirements</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-blue-600 mb-3">🌐 Enterprise Systems Integration</h3>
              <p className="text-gray-700 mb-3">Connected with critical business tools including:</p>
              <ul className="text-gray-700 space-y-1 ml-4">
                <li>• HPSM (Help Desk)</li>
                <li>• SAP (ERP)</li>
                <li>• Procurement & HR systems</li>
                <li>• Learning & Management Platforms</li>
                <li>• Employee Self-Service Tools</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Impact */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">🚀 Impact & Results</h2>
          <div className="bg-green-50 border border-green-200 rounded-xl p-8">
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">Weeks → Days</div>
                <p className="text-gray-700">Reduced deployment time for intelligent workflows</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">Zero Bottlenecks</div>
                <p className="text-gray-700">Minimized engineering dependencies for business teams</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-2">Cross-Department</div>
                <p className="text-gray-700">Accelerated AI adoption across HR, ITSM, Finance, and Operations</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <p className="text-gray-700">Empowered non-technical users to independently build and deploy AI workflows</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <p className="text-gray-700">Standardized AI agent development process across the organization</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                <p className="text-gray-700">Created a foundational system for enterprise-wide digital transformation</p>
              </div>
            </div>
          </div>
        </section>

        {/* Architecture */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Architecture Highlights</h2>
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Frontend</h4>
                <p className="text-gray-700">Built in React.js for a highly interactive and responsive UI</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Backend</h4>
                <p className="text-gray-700">Node.js and Python-based microservices for orchestration and agent execution</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">AI Integration</h4>
                <p className="text-gray-700">Leveraged Azure OpenAI for embedding LLM capabilities within agent logic</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Deployment</h4>
                <p className="text-gray-700">Docker and Azure Kubernetes Services (AKS) for scalable, cloud-native deployment</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center">
          <Link 
            to="/#contact" 
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-colors"
          >
            <Target className="w-4 h-4" />
            Discuss This Project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EnterpriseAICaseStudy;
