import {
  ArrowLeft,
  BarChart3,
  Bell,
  LayoutGrid,
  MapPin,
  Radio,
  Target,
  Users,
  Video,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

const JioVideoAnalyticsCaseStudy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-6 py-12">
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-800 mb-8 transition-colors font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </Link>

        {/* Hero */}
        <div className="relative overflow-hidden bg-gradient-to-br from-slate-800 via-slate-800 to-emerald-700 rounded-2xl text-white p-8 md:p-10 mb-12 shadow-xl">
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-2xl" />
          <div className="relative max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-emerald-300/90 mb-3">
              Retail intelligence · Computer vision
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Jio Video Analytics (JVA) Platform
            </h1>
            <p className="text-xl md:text-2xl mb-2 opacity-95 font-light leading-relaxed">
              Turn store cameras into live operational insight—not another wall of passive CCTV.
            </p>
            <p className="text-base md:text-lg text-slate-200 max-w-2xl mb-8">
              An AI-powered analytics stack for large retail networks: real-time dashboards, streaming
              event pipelines, and tools to plan where cameras and zones actually matter.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/10">
                <Video className="w-4 h-4 shrink-0 text-emerald-300" />
                <span>Multi-store visibility</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/10">
                <Radio className="w-4 h-4 shrink-0 text-emerald-300" />
                <span>Kafka · SSE</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/10">
                <Users className="w-4 h-4 shrink-0 text-emerald-300" />
                <span>Traffic · queues · demographics</span>
              </div>
            </div>
          </div>
        </div>

        {/* Executive summary */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Executive summary</h2>
          <div className="bg-card text-card-foreground rounded-xl p-8 shadow-lg border border-border">
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Retail operators cannot scale by watching footage manually. The Jio Video Analytics
              platform ingests signals from camera networks across many locations and surfaces them as
              metrics store managers and central teams can act on—footfall, queue health, heatmaps,
              and demographic-oriented views—without replacing their existing camera investments.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I contributed on the product side of that story: high-performance dashboard UIs,
              reusable visualization patterns, a store planner for floor plans and camera placement
              with ROI-driven zoning, and real-time alerting so congestion and anomalies surface the
              moment the backend detects them.
            </p>
          </div>
        </section>

        {/* Tech stack */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Technology stack</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              "React.js",
              "TypeScript",
              "Redux Toolkit",
              "Node.js",
              "Express.js",
              "Apache Kafka",
              "Server-Sent Events (SSE)",
              "ApexCharts",
              "Material UI",
              "REST APIs",
            ].map((tech) => (
              <div
                key={tech}
                className="bg-card text-card-foreground rounded-lg p-4 shadow-md border border-border hover:border-emerald-500/50 dark:hover:border-emerald-400/40 hover:shadow-lg transition-all duration-300"
              >
                <span className="font-medium text-foreground">{tech}</span>
              </div>
            ))}
          </div>
        </section>

        {/* What I built */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">What I contributed</h2>
          <div className="space-y-6">
            <div className="bg-card text-card-foreground rounded-xl p-6 shadow-lg border border-border">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-emerald-700 dark:text-emerald-400">Analytics dashboards</h3>
              </div>
              <ul className="text-muted-foreground space-y-2">
                <li>
                  • Built scalable interfaces to visualize dense, fast-moving data—customer traffic,
                  queue monitoring, store heatmaps, and demographic-oriented insights
                </li>
                <li>
                  • Used ApexCharts within a Material UI system so charts stayed consistent,
                  accessible, and readable under real store-level load
                </li>
                <li>
                  • Implemented dynamic filtering and rendering strategies so views stayed responsive
                  when datasets grew or refreshed frequently
                </li>
              </ul>
            </div>

            <div className="bg-card text-card-foreground rounded-xl p-6 shadow-lg border border-border">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
                  <LayoutGrid className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-emerald-700 dark:text-emerald-400">Modular UI architecture</h3>
              </div>
              <ul className="text-muted-foreground space-y-2">
                <li>• Broke the experience into reusable components shared across dashboards and flows</li>
                <li>
                  • Centralized state with Redux Toolkit for predictable updates as metrics and filters
                  changed in parallel
                </li>
              </ul>
            </div>

            <div className="bg-card text-card-foreground rounded-xl p-6 shadow-lg border border-border">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-emerald-700 dark:text-emerald-400">Store planner & ROIs</h3>
              </div>
              <ul className="text-muted-foreground space-y-2">
                <li>
                  • Helped design and implement a store planner experience for floor-plan mapping and
                  camera placement
                </li>
                <li>
                  • Supported zone-based analytics by defining Regions of Interest (ROIs) so insights
                  map to physical areas—not just anonymous pixels
                </li>
              </ul>
            </div>

            <div className="bg-card text-card-foreground rounded-xl p-6 shadow-lg border border-border">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-emerald-700 dark:text-emerald-400">Streaming & real-time alerts</h3>
              </div>
              <ul className="text-muted-foreground space-y-2">
                <li>
                  • Integrated with a streaming backbone where camera-derived events flow through Kafka
                  pipelines for detection and downstream analytics
                </li>
                <li>
                  • Implemented real-time alerting via Server-Sent Events (SSE) so operators see
                  congestion, queue threshold breaches, and operational anomalies as they happen—not
                  after a shift review
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Impact */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Impact</h2>
          <div className="bg-gradient-to-br from-emerald-50 to-slate-50 dark:from-emerald-950/40 dark:to-slate-950/50 border border-emerald-200/80 dark:border-emerald-800/60 rounded-xl p-8 shadow-md">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-4 rounded-xl bg-white/90 dark:bg-card/80 border border-emerald-100 dark:border-emerald-800/50">
                <div className="text-2xl font-bold text-emerald-700 dark:text-emerald-400 mb-2">Centralized</div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  One operational picture across many stores instead of siloed footage review
                </p>
              </div>
              <div className="text-center p-4 rounded-xl bg-white/90 dark:bg-card/80 border border-emerald-100 dark:border-emerald-800/50">
                <div className="text-2xl font-bold text-emerald-700 dark:text-emerald-400 mb-2">Faster reactions</div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  SSE-backed alerts for queues and congestion reduce lag between detection and action
                </p>
              </div>
              <div className="text-center p-4 rounded-xl bg-white/90 dark:bg-card/80 border border-emerald-100 dark:border-emerald-800/50">
                <div className="text-2xl font-bold text-emerald-700 dark:text-emerald-400 mb-2">Plannable</div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Floor plans and ROIs tie analytics to real layouts and camera strategy
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Bell className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
              <p className="text-muted-foreground leading-relaxed">
                Together, the dashboards, planner, and streaming alerts improved operational
                monitoring, supported better in-the-moment decisions, and gave the platform room to
                scale with more stores and higher event volume.
              </p>
            </div>
          </div>
        </section>

        {/* Architecture snapshot */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Architecture snapshot</h2>
          <div className="bg-card text-card-foreground rounded-xl p-8 shadow-lg border border-border">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-foreground mb-2">Frontend</h4>
                <p className="text-muted-foreground">
                  React and TypeScript with Redux Toolkit, Material UI, and ApexCharts for cohesive,
                  data-heavy experiences with strict typing and predictable state transitions.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">Backend & APIs</h4>
                <p className="text-muted-foreground">
                  Node.js and Express expose REST APIs consumed by the dashboards and planner flows,
                  sitting alongside the streaming and analytics services.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">Event streaming</h4>
                <p className="text-muted-foreground">
                  Kafka carries high-throughput camera and detection events so analytics stay
                  decoupled from individual store UIs.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-2">Live updates</h4>
                <p className="text-muted-foreground">
                  Server-Sent Events push alert and threshold updates to the browser without polling
                  storms—ideal for always-on operations views.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="text-center pb-8">
          <Link
            to="/#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-emerald-700 hover:to-teal-700 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <Target className="w-4 h-4" />
            Discuss this project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JioVideoAnalyticsCaseStudy;
