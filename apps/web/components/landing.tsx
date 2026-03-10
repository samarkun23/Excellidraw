import { PenTool } from "lucide-react";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">

      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 border-b border-white/10">

        <h1 className="text-xl font-bold flex items-center gap-1">
          <div className="rounded flex w-8 h-8 justify-center items-center">
            <PenTool className="w-5 h-5 text-white" />
          </div>
          <span>
            SketchFlow
          </span>
        </h1>
        <div className="space-x-6">
          <button className="hover:text-gray-300">Features</button>
          <button className="hover:text-gray-300">Pricing</button>
          <button className="bg-white text-black px-4 py-2 rounded-lg hover:bg-white/80" onClick={() => {router.push("/dashboard")}}>
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="text-center py-28 px-6">
        <h1 className="text-5xl font-bold leading-tight">
          Collaborate & Sketch <br /> Ideas in Real-Time
        </h1>

        <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
          SketchFlow is a collaborative whiteboard where teams can draw,
          brainstorm, and build ideas together instantly.
        </p>

        <div className="mt-8 space-x-4">
          <button className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-white/80" onClick={() => {router.push("/dashboard")}}>
            Start Drawing
          </button>

          <button className="border border-white/20 px-6 py-3 rounded-lg hover:bg-white/10" onClick={() => {router.push("/dashboard")}}>
            Live Demo
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="grid md:grid-cols-3 gap-8 px-10 py-20 max-w-6xl mx-auto">

        <div className="bg-white/5 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-3">Real-Time Collaboration</h3>
          <p className="text-gray-400">
            Draw and brainstorm with your team simultaneously with instant updates.
          </p>
        </div>

        <div className="bg-white/5 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-3">Infinite Canvas</h3>
          <p className="text-gray-400">
            Unlimited space to sketch ideas, diagrams, and workflows.
          </p>
        </div>

        <div className="bg-white/5 p-6 rounded-xl">
          <h3 className="text-xl font-semibold mb-3">Share Instantly</h3>
          <p className="text-gray-400">
            Invite teammates with a link and start collaborating instantly.
          </p>
        </div>

      </section>

      {/* CTA */}
      <section className="text-center py-24">
        <h2 className="text-4xl font-bold">
          Start Building Ideas Together
        </h2>

        <p className="text-gray-400 mt-4">
          Create your first collaborative board in seconds.
        </p>

        <button className="mt-8 bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-white/80" onClick={() => {router.push("/dashboard")}}>
          Create Board
        </button>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 border-t border-white/10 text-gray-500">
        © 2026 SketchFlow. All rights reserved.
      </footer>

    </div>
  );
}