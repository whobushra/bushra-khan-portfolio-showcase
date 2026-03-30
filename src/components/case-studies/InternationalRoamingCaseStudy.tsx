import {
  ArrowLeft,
  Calendar,
  Globe2,
  Layers,
  Radio,
  ShieldCheck,
  Target,
  Users,
  Workflow,
} from "lucide-react";
import { Link } from "react-router-dom";

const InternationalRoamingCaseStudy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-6 py-12">
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-800 mb-8 transition-colors font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>

        {/* Hero */}
        <div className="relative overflow-hidden bg-gradient-to-br from-orange-500 via-orange-500 to-red-500 rounded-2xl text-white p-8 md:p-10 mb-12 shadow-xl">
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/15 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-32 h-32 bg-red-400/20 rounded-full blur-2xl" />
          <div className="relative max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-white/80 mb-3">
              Telecom · Partner operations
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              International Roaming Partner Portal
            </h1>
            <p className="text-xl md:text-2xl mb-2 opacity-95 font-light leading-relaxed">
              One orchestrated journey—from operator handshake to commercial launch.
            </p>
            <p className="text-base md:text-lg mb-8 text-white/85 max-w-2xl">
              A web-based command center that replaces ad-hoc threads and spreadsheets with a
              structured, role-aware workflow so roaming partners clear the runway faster.
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2">
                <Calendar className="w-4 h-4 shrink-0" />
                <span>Enterprise delivery</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2">
                <Users className="w-4 h-4 shrink-0" />
                <span>Wholesale · NPE · Network · Partner Assurance</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2">
                <Globe2 className="w-4 h-4 shrink-0" />
                <span>Multi-team onboarding at scale</span>
              </div>
            </div>
          </div>
        </div>

        {/* Executive summary */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Executive summary</h2>
          <div className="bg-card text-card-foreground rounded-xl p-8 shadow-lg border border-border">
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Roaming partnerships touch legal, network, commercial, and assurance workstreams at
              once. Before this portal, progress lived in inboxes and side conversations—hard to
              audit and painful to hand off. We built a comprehensive web experience that automates
              the boring parts of onboarding and makes the critical path visible to everyone who
              needs it.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The platform connects cross-functional teams through a single source of truth:
              operators move from association through technical readiness to launch, with tasks,
              documents, and SIM lifecycle steps tracked in one modular, scalable architecture.
            </p>
          </div>
        </section>

        {/* Tech */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Technology highlights</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              "React.js",
              "Node.js",
              "Role-based access & auth",
              "Workflow automation",
              "Document upload & versioning",
              "Modular web architecture",
            ].map((tech) => (
              <div
                key={tech}
                className="bg-card text-card-foreground rounded-lg p-4 shadow-md border border-border hover:border-orange-500/50 dark:hover:border-orange-400/40 hover:shadow-lg transition-all duration-300"
              >
                <span className="font-medium text-foreground">{tech}</span>
              </div>
            ))}
          </div>
        </section>

        {/* What we built */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">What I helped build</h2>
          <div className="space-y-6">
            <div className="bg-card text-card-foreground rounded-xl p-6 shadow-lg border border-border">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-orange-100 text-orange-700 dark:bg-orange-950/60 dark:text-orange-300">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-orange-600 dark:text-orange-400">Operator onboarding & stages</h3>
              </div>
              <ul className="text-muted-foreground space-y-2">
                <li>• Guided operators through structured phases—from association to commercial go-live</li>
                <li>• Surfaced stage gates so no team advances the process without the right prerequisites</li>
              </ul>
            </div>

            <div className="bg-card text-card-foreground rounded-xl p-6 shadow-lg border border-border">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-orange-100 text-orange-700 dark:bg-orange-950/60 dark:text-orange-300">
                  <Workflow className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-orange-600 dark:text-orange-400">Task orchestration</h3>
              </div>
              <ul className="text-muted-foreground space-y-2">
                <li>• Dynamic task assignment and tracking across Wholesale, NPE, Network, and Partner Assurance</li>
                <li>• Reduced manual coordination by encoding handoffs as repeatable workflow steps</li>
              </ul>
            </div>

            <div className="bg-card text-card-foreground rounded-xl p-6 shadow-lg border border-border">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-orange-100 text-orange-700 dark:bg-orange-950/60 dark:text-orange-300">
                  <Radio className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-orange-600 dark:text-orange-400">SIM lifecycle</h3>
              </div>
              <ul className="text-muted-foreground space-y-2">
                <li>• SIM assignment flows tied to onboarding milestones</li>
                <li>• Clear ownership of inventory states as partners move toward launch</li>
              </ul>
            </div>

            <div className="bg-card text-card-foreground rounded-xl p-6 shadow-lg border border-border">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-orange-100 text-orange-700 dark:bg-orange-950/60 dark:text-orange-300">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-orange-600 dark:text-orange-400">Documents & network readiness</h3>
              </div>
              <ul className="text-muted-foreground space-y-2">
                <li>• Upload, version, and retrieve agreements and technical artifacts in context</li>
                <li>• Network configuration workflows embedded in the same timeline as commercial tasks</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Impact */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Impact & outcomes</h2>
          <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-950/40 dark:to-amber-950/35 border border-orange-200/80 dark:border-orange-800/60 rounded-xl p-8 shadow-md">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-4 rounded-xl bg-white/70 dark:bg-card/80 border border-orange-100 dark:border-orange-800/50">
                <div className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-2">One pipeline</div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  End-to-end visibility from operator association to commercial launch
                </p>
              </div>
              <div className="text-center p-4 rounded-xl bg-white/70 dark:bg-card/80 border border-orange-100 dark:border-orange-800/50">
                <div className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-2">Fewer gaps</div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Standardized process and consistent data across collaborating teams
                </p>
              </div>
              <div className="text-center p-4 rounded-xl bg-white/70 dark:bg-card/80 border border-orange-100 dark:border-orange-800/50">
                <div className="text-2xl font-bold text-orange-600 dark:text-orange-400 mb-2">Trust at scale</div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Role-based access so each team sees exactly what they need—no more, no less
                </p>
              </div>
            </div>
            <div className="space-y-3">
              {[
                "Operational transparency replaced opaque status updates with auditable progress.",
                "Document versioning cut confusion over “which file is final?” during reviews.",
                "Modular UI patterns kept the experience cohesive as new onboarding scenarios appeared.",
              ].map((line) => (
                <div key={line} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 shrink-0" />
                  <p className="text-muted-foreground">{line}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Architecture */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Architecture snapshot</h2>
          <div className="bg-card text-card-foreground rounded-xl p-8 shadow-lg border border-border">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-foreground mb-2">Experience layer</h4>
                <p className="text-muted-foreground">
                  Responsive React interface focused on clarity, dense data made scannable, and
                  workflows that feel guided rather than administrative.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">Collaboration model</h4>
                <p className="text-muted-foreground">
                  Role-aware views and task ownership so Wholesale, NPE, Network, and Partner
                  Assurance each operate inside a shared operational narrative.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">Data & documents</h4>
                <p className="text-muted-foreground">
                  Central handling of uploads and versions keeps legal and technical artifacts tied
                  to the right operator and milestone.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">Extensibility</h4>
                <p className="text-muted-foreground">
                  Modular boundaries allow new roaming scenarios and integrations without rewriting
                  the core onboarding story.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Closing */}
        <section className="mb-12">
          <div className="bg-card text-card-foreground rounded-xl p-8 shadow-lg border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4">Closing thought</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Great roaming products depend on invisible operations. This portal makes that
              invisible work legible—turning a multi-team relay into a product people actually want
              to use. That balance—rigor without bureaucracy—is what I aimed for in the UI and in
              the modules I contributed to.
            </p>
          </div>
        </section>

        <div className="text-center pb-8">
          <Link
            to="/#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-red-600 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Target className="w-4 h-4" />
            Discuss this project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InternationalRoamingCaseStudy;
