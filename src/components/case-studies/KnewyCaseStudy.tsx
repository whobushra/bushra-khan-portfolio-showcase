import {
  ArrowLeft,
  BookOpen,
  ExternalLink,
  GraduationCap,
  Layout,
  Map,
  Target,
  Video,
} from "lucide-react";
import { Link } from "react-router-dom";

const LIVE_DEMO = "https://whobushra.github.io/Organised-learning-knewy/";

const KnewyCaseStudy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-800 dark:text-sky-400 dark:hover:text-sky-300 transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
          <a
            href={LIVE_DEMO}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-sky-600 text-sky-700 dark:text-sky-300 dark:border-sky-500 px-4 py-2 font-semibold hover:bg-sky-50 dark:hover:bg-sky-950/50 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            Live demo
          </a>
        </div>

        {/* Hero */}
        <div className="relative overflow-hidden bg-gradient-to-br from-sky-500 via-sky-600 to-indigo-600 rounded-2xl text-white p-8 md:p-10 mb-12 shadow-xl">
          <div className="absolute -top-16 right-0 w-56 h-56 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-indigo-400/30 rounded-full blur-2xl" />
          <div className="relative max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-white/80 mb-3 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              Final year project
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">KNEWY</h1>
            <p className="text-xl md:text-2xl mb-2 opacity-95 font-light">
              Organised learning—roadmaps, docs, and videos in one calm hub.
            </p>
            <p className="text-base md:text-lg text-white/85 max-w-2xl mb-8">
              A static, zero-cost learning site for students who are tired of tab overload. Three
              full tracks—frontend, backend, and React—with interactive progress and curated
              resources you can actually finish.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={LIVE_DEMO}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-indigo-700 px-5 py-3 rounded-xl font-semibold hover:bg-white/90 shadow-lg transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Open live site
              </a>
              <Link
                to="/#contact"
                className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white px-5 py-3 rounded-xl font-semibold border border-white/30 hover:bg-white/20 transition-colors"
              >
                Get in touch
              </Link>
            </div>
          </div>
        </div>

        {/* Executive summary */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Executive summary</h2>
          <div className="bg-card text-card-foreground rounded-xl p-8 shadow-lg border border-border">
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Self-directed learners often drown in bookmarks—roadmaps on one site, tutorials on
              another, documentation scattered across vendors.{" "}
              <strong className="text-foreground">KNEWY</strong> (from “knew” + “new”) was my final
              year project: a deliberately simple web hub that organises high-signal resources for
              three in-demand stacks so peers can plan, watch, and read without losing the thread.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The site is fully static—fast to host, easy to maintain—and ships with a marketing
              landing page, an about story, a course explorer, per-topic roadmaps with saved
              progress, documentation entry points, embedded video playlists, contact/feedback, and a
              login screen for future auth experiments.
            </p>
          </div>
        </section>

        {/* Tech */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Technology stack</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              "HTML5 & semantic structure",
              "CSS3 & component-scoped styles",
              "Vanilla JavaScript",
              "Bootstrap 5 (courses hub)",
              "jQuery (shared chrome)",
              "GitHub Pages hosting",
            ].map((tech) => (
              <div
                key={tech}
                className="bg-card text-card-foreground rounded-lg p-4 shadow-md border border-border hover:border-sky-500/50 dark:hover:border-sky-400/40 hover:shadow-lg transition-all duration-300"
              >
                <span className="font-medium text-foreground">{tech}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">What I built</h2>
          <div className="space-y-6">
            <div className="bg-card text-card-foreground rounded-xl p-6 shadow-lg border border-border">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-sky-100 text-sky-700 dark:bg-sky-950/60 dark:text-sky-300">
                  <Layout className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-sky-700 dark:text-sky-400">Experience & narrative</h3>
              </div>
              <ul className="text-muted-foreground space-y-2">
                <li>• Landing hero with clear value props—three tracks, self-paced, free access</li>
                <li>• About page articulating mission, values, and the story behind the KNEWY name</li>
                <li>• Courses overview with Bootstrap layout and deep links into each track</li>
              </ul>
            </div>

            <div className="bg-card text-card-foreground rounded-xl p-6 shadow-lg border border-border">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-sky-100 text-sky-700 dark:bg-sky-950/60 dark:text-sky-300">
                  <Map className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-sky-700 dark:text-sky-400">Interactive roadmaps</h3>
              </div>
              <ul className="text-muted-foreground space-y-2">
                <li>• Per-track roadmap pages with checkable nodes and a live progress bar</li>
                <li>• Progress persisted in the browser so learners can return where they left off</li>
                <li>• “Next incomplete” and “Clear progress” controls for quick navigation</li>
                <li>• Reference diagrams (e.g. roadmap.sh visuals) for big-picture orientation</li>
              </ul>
            </div>

            <div className="bg-card text-card-foreground rounded-xl p-6 shadow-lg border border-border">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-sky-100 text-sky-700 dark:bg-sky-950/60 dark:text-sky-300">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-sky-700 dark:text-sky-400">Documentation & video hubs</h3>
              </div>
              <ul className="text-muted-foreground space-y-2">
                <li>• Dedicated documentation pages per stack pointing to trusted official sources</li>
                <li>• Curated YouTube embeds and playlists for guided viewing—not random search results</li>
              </ul>
            </div>

            <div className="bg-card text-card-foreground rounded-xl p-6 shadow-lg border border-border">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-lg bg-sky-100 text-sky-700 dark:bg-sky-950/60 dark:text-sky-300">
                  <Video className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-sky-700 dark:text-sky-400">Deployment detail</h3>
              </div>
              <ul className="text-muted-foreground space-y-2">
                <li>
                  • Custom <code className="text-sm bg-muted px-1.5 py-0.5 rounded">site-base.js</code>{" "}
                  sets <code className="text-sm bg-muted px-1.5 py-0.5 rounded">&lt;base href&gt;</code> on
                  GitHub Pages so assets resolve correctly under{" "}
                  <code className="text-sm bg-muted px-1.5 py-0.5 rounded">/Organised-learning-knewy/</code>
                </li>
                <li>• Shared header/footer loaded consistently across topic pages for maintainability</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Impact */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-6">Outcomes</h2>
          <div className="bg-gradient-to-br from-sky-50 to-indigo-50 dark:from-sky-950/40 dark:to-indigo-950/40 border border-sky-200/80 dark:border-sky-800/60 rounded-xl p-8 shadow-md">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-4 rounded-xl bg-white/80 dark:bg-card/80 border border-sky-100 dark:border-sky-800/50">
                <div className="text-2xl font-bold text-sky-600 dark:text-sky-400 mb-2">3 tracks</div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Frontend, backend, and React—each with roadmap, docs, and videos
                </p>
              </div>
              <div className="text-center p-4 rounded-xl bg-white/80 dark:bg-card/80 border border-sky-100 dark:border-sky-800/50">
                <div className="text-2xl font-bold text-sky-600 dark:text-sky-400 mb-2">0₹ barrier</div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Free static hosting and open learning paths for any schedule
                </p>
              </div>
              <div className="text-center p-4 rounded-xl bg-white/80 dark:bg-card/80 border border-sky-100 dark:border-sky-800/50">
                <div className="text-2xl font-bold text-sky-600 dark:text-sky-400 mb-2">Shipped</div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  A complete final-year deliverable you can explore in the browser today
                </p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              KNEWY reinforced how much UX matters in education products: small touches—progress
              persistence, calm typography, and obvious next steps—turn a link list into something
              that feels like a companion for the semester.
            </p>
          </div>
        </section>

        {/* Live demo CTA */}
        <section className="mb-12">
          <div className="bg-card text-card-foreground rounded-xl p-8 shadow-lg border border-border text-center">
            <h2 className="text-2xl font-bold text-foreground mb-3">Try the live demo</h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Hosted on GitHub Pages—open the site, take the tour from the home page, then explore a
              roadmap and tick a few nodes to see progress stick.
            </p>
            <a
              href={LIVE_DEMO}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-indigo-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-sky-600 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <ExternalLink className="w-4 h-4" />
              whobushra.github.io/Organised-learning-knewy
            </a>
          </div>
        </section>

        <div className="text-center pb-8">
          <Link
            to="/#contact"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold"
          >
            <Target className="w-4 h-4" />
            Discuss this project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default KnewyCaseStudy;
