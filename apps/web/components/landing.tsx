"use client";

import {
  PenTool,
  Sparkles,
  Users,
  Share2,
  ArrowRight,
  Play,
  CheckCircle2,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1f1f1f_0%,#000_45%)]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-fuchsia-500/20 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full" />

      <div className="relative z-10">
        {/* Navbar */}
        <nav className="flex items-center justify-between px-6 md:px-12 py-5 border-b border-white/10 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center">
              <PenTool className="w-5 h-5 text-white" />
            </div>

            <div>
              <h1 className="text-xl font-bold tracking-wide">
                SketchFlow
              </h1>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
            <button className="hover:text-white transition">
              Features
            </button>

            <button className="hover:text-white transition">
              Pricing
            </button>

            <button className="hover:text-white transition">
              Docs
            </button>
          </div>

          <button
            onClick={() => router.push("/dashboard")}
            className="bg-white text-black px-5 py-2.5 rounded-xl font-medium hover:bg-gray-200 transition-all duration-300"
          >
            Get Started
          </button>
        </nav>

        {/* Hero */}
        <section className="relative px-6 md:px-12 pt-24 pb-28">
          <div className="max-w-6xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm text-gray-300 mb-8">
              <Sparkles className="w-4 h-4 text-fuchsia-400" />
              Real-time collaborative whiteboard
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-7xl font-black leading-[1.05] tracking-tight">
              Brainstorm,
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400">
                Sketch & Collaborate
              </span>
              without limits
            </h1>

            {/* Subtitle */}
            <p className="mt-8 max-w-2xl mx-auto text-lg text-gray-400 leading-relaxed">
              Create diagrams and ideas together
              with your team in real-time on an infinite collaborative
              canvas.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
              <button
                onClick={() => router.push("/dashboard")}
                className="group bg-white text-black px-7 py-4 rounded-2xl font-semibold flex items-center gap-2 hover:bg-gray-200 transition-all duration-300 shadow-2xl shadow-white/10"
              >
                Start Drawing
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </button>

              <button
                onClick={() => router.push("/demo")}
                className="px-7 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 flex items-center gap-2 backdrop-blur-xl"
              >
                <Play className="w-4 h-4" />
                Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="mt-14 flex flex-wrap justify-center gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                Real-time sync
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                Infinite canvas
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                Multiplayer editing
              </div>
            </div>

            {/* Preview Card */}
            <div className="mt-20 relative mx-auto max-w-5xl">
              <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/20 to-cyan-500/20 blur-3xl rounded-full" />

              <div className="relative bg-white/[0.04] border border-white/10 rounded-3xl overflow-hidden backdrop-blur-2xl shadow-2xl">
                {/* Fake toolbar */}
                <div className="flex items-center gap-2 px-5 py-4 border-b border-white/10 bg-white/[0.03]">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />

                  <div className="ml-4 text-sm text-gray-400">
                    sketchflow.app/board/design-system
                  </div>
                </div>

                {/* Canvas Mockup */}
                <div className="h-[420px] bg-gradient-to-br from-zinc-900 to-black p-8 relative overflow-hidden">
                  {/* Floating Cards */}
                  <div className="absolute top-14 left-14 bg-fuchsia-500/20 border border-fuchsia-400/30 px-5 py-4 rounded-2xl backdrop-blur-xl">
                    <p className="font-medium">UI Brainstorm</p>
                  </div>

                  <div className="absolute top-40 right-24 bg-cyan-500/20 border border-cyan-400/30 px-5 py-4 rounded-2xl backdrop-blur-xl">
                    <p className="font-medium">Team Workflow</p>
                  </div>

                  <div className="absolute bottom-20 left-1/2 -translate-x-1/2 bg-white/10 border border-white/10 px-6 py-5 rounded-2xl backdrop-blur-xl">
                    <p className="font-medium">Realtime Collaboration</p>
                  </div>

                  {/* Grid */}
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="px-6 md:px-12 py-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <p className="text-fuchsia-400 font-medium mb-3">
                FEATURES
              </p>

              <h2 className="text-4xl md:text-5xl font-bold">
                Everything your team needs
              </h2>

              <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
                Powerful collaboration tools designed for designers,
                developers, startups, and remote teams.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-7">
              {/* Card */}
              <div className="group bg-white/[0.04] border border-white/10 rounded-3xl p-8 hover:bg-white/[0.06] transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-fuchsia-500/10 border border-fuchsia-500/20 flex items-center justify-center mb-6">
                  <Users className="w-7 h-7 text-fuchsia-400" />
                </div>

                <h3 className="text-2xl font-semibold mb-4">
                  Live Collaboration
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  Work together with teammates simultaneously with instant
                  updates and multiplayer editing.
                </p>
              </div>

              {/* Card */}
              <div className="group bg-white/[0.04] border border-white/10 rounded-3xl p-8 hover:bg-white/[0.06] transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-6">
                  <PenTool className="w-7 h-7 text-cyan-400" />
                </div>

                <h3 className="text-2xl font-semibold mb-4">
                  Infinite Canvas
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  Sketch ideas freely with unlimited space for diagrams,
                  notes, workflows, and product planning.
                </p>
              </div>

              {/* Card */}
              <div className="group bg-white/[0.04] border border-white/10 rounded-3xl p-8 hover:bg-white/[0.06] transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-6">
                  <Share2 className="w-7 h-7 text-green-400" />
                </div>

                <h3 className="text-2xl font-semibold mb-4">
                  Instant Sharing
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  Share boards instantly with links and collaborate with
                  clients, teams, and stakeholders.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 md:px-12 pb-28">
          <div className="max-w-5xl mx-auto relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-12 md:p-20 text-center">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-fuchsia-500/20 blur-[120px]" />

            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black leading-tight">
                Ready to build your next big idea?
              </h2>

              <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
                Join thousands of creators and teams collaborating visually
                with SketchFlow.
              </p>

              <button
                onClick={() => router.push("/dashboard")}
                className="mt-10 bg-white text-black px-8 py-4 rounded-2xl font-semibold hover:bg-gray-200 transition-all duration-300 inline-flex items-center gap-2"
              >
                Create Your Board
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 py-8 px-6 md:px-12">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
            <p>© 2026 SketchFlow. All rights reserved.</p>

            <div className="flex items-center gap-6">
              <button className="hover:text-white transition">
                Privacy
              </button>

              <button className="hover:text-white transition">
                Terms
              </button>

              <button className="hover:text-white transition">
                Contact
              </button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}