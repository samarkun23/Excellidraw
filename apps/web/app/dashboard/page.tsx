"use client";
import 'dotenv/config'
import {
  Search,
  LayoutGrid,
  Bell,
  Plus,
  Clock,
  Star,
  Users,
  Trash2,
  PenTool,
  Settings,
  Sparkles,
  ArrowRight,
  ChevronRight,
  LogOut,
} from "lucide-react";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";

// /* -------------------------------------------------------------------------- */
// /*                                   MOCK DB                                  */
// /* -------------------------------------------------------------------------- */

const RECENT_DRAWINGS = [
  {
    id: 1,
    title: "System Architecture V2",
    time: "2 mins ago",
    color: "from-[#d6c7ff] to-[#b8a5ff]",
    users: ["A", "K"],
    starred: true,
  },
  {
    id: 2,
    title: "Q4 Marketing Brainstorm",
    time: "2 hours ago",
    color: "from-[#b9d9ff] to-[#90bfff]",
    users: ["M"],
    starred: false,
  },
  {
    id: 3,
    title: "User Journey Map",
    time: "Yesterday",
    color: "from-[#ffc7df] to-[#ff99c7]",
    users: [],
    starred: true,
  },
  {
    id: 4,
    title: "Database Schema",
    time: "2 days ago",
    color: "from-[#d7d7d7] to-[#b8b8b8]",
    users: [],
    starred: false,
  },
  {
    id: 5,
    title: "Logo Concepts",
    time: "Last week",
    color: "from-[#c7ffd9] to-[#99f0b7]",
    users: ["R"],
    starred: false,
  },
];

const SIDEBAR_ITEMS = [
  {
    icon: Clock,
    label: "Recent",
    active: true,
  },
  {
    icon: Star,
    label: "Starred",
    active: false,
  },
  {
    icon: Users,
    label: "Shared",
    active: false,
  },
  {
    icon: Trash2,
    label: "Trash",
    active: false,
  },
];

// /* -------------------------------------------------------------------------- */
// /*                                  COMPONENT                                 */
// /* -------------------------------------------------------------------------- */

export default function Dashboard() {
  const router = useRouter();

  const [user, setUser] = useState<any>(null);

  const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:3002";
  console.log("Backend URL:", BACKEND_URL);
  console.log(process.env.BACKEND_URL);

  useEffect(() => {
    async function validateToken() {
      try {
        const res = await axios.get(
          `${BACKEND_URL}/excallidraw/auth/validate`,
          {
            withCredentials: true,
          }
        );

        setUser(res.data.user);
      } catch (error) {
        router.push("/signin");
      }
    }

    validateToken();
  }, [router]);

  if (!user) {
    return (
      <div className="h-screen w-screen bg-black flex items-center justify-center text-white">
        <div className="flex flex-col items-center gap-5">
          <div className="w-14 h-14 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin" />

          <p className="text-lg text-gray-400">
            Validating session...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen w-screen overflow-hidden bg-black text-white flex">
      {/* -------------------------------------------------------------------------- */}
      {/*                                  SIDEBAR                                   */}
      {/* -------------------------------------------------------------------------- */}

      <aside className="hidden md:flex w-[280px] shrink-0 border-r border-white/10 bg-white/[0.03] backdrop-blur-2xl flex-col">
        {/* Logo */}
        <div className="px-7 py-7 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center">
              <PenTool className="w-5 h-5 text-white" />
            </div>

            <div onClick={() => {
              router.push("/")
            }}>
              <h1 className="text-xl font-bold">
                SketchFlow
              </h1>

              <p className="text-xs text-gray-500">
                Collaborative workspace
              </p>
            </div>
          </div>
        </div>

        {/* Create Button */}
        <div className="px-5 pt-6">
          <button
            onClick={() =>
              router.push(
                `/canvas/${Math.floor(Math.random() * 1000)}`
              )
            }
            className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 hover:opacity-90 transition-all duration-300 rounded-2xl px-5 py-4 flex items-center justify-center gap-2 font-semibold shadow-2xl shadow-indigo-500/20"
          >
            <Plus className="w-5 h-5" />
            Collaborative Board
          </button>
        </div>

        {/* Navigation */}
        <div className="px-4 pt-10">
          <p className="text-xs text-gray-500 uppercase tracking-[0.2em] px-3 mb-4">
            Workspace
          </p>

          <div className="space-y-1">
            {SIDEBAR_ITEMS.map((item) => (
              <button
                key={item.label}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl transition-all ${
                  item.active
                    ? "bg-white/10 text-white"
                    : "text-gray-400 hover:bg-white/[0.05] hover:text-white"
                }`}
              >
                <div className="flex items-center gap-3">
                  <item.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">
                    {item.label}
                  </span>
                </div>

                <ChevronRight className="w-4 h-4 opacity-40" />
              </button>
            ))}
          </div>
        </div>

        {/* Upgrade Card */}
        <div className="px-5 mt-8">
          <div className="rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-indigo-500/20 to-fuchsia-500/10 p-5 relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 blur-3xl rounded-full" />

            <div className="relative z-10">
              <div className="w-11 h-11 rounded-2xl bg-white/10 flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5 text-indigo-300" />
              </div>

              <h3 className="font-semibold text-lg">
                Upgrade to Pro
              </h3>

              <p className="text-sm text-gray-300 mt-2 leading-relaxed">
                Unlock unlimited boards, team workspaces and AI tools.
              </p>

              <button className="mt-5 bg-white text-black px-4 py-2 rounded-xl font-medium hover:bg-gray-200 transition">
                Upgrade
              </button>
            </div>
          </div>
        </div>

        {/* User */}
        <div className="mt-auto p-5 border-t border-white/10">
          <div className="flex items-center gap-3">
            <img
              src="https://github.com/shadcn.png"
              alt="profile"
              className="w-11 h-11 rounded-2xl object-cover"
            />

            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-medium truncate">
                {user?.name || "shadcn"}
              </h3>

              <p className="text-xs text-gray-500">
                Free Plan
              </p>
            </div>

            <button className="w-10 h-10 rounded-xl hover:bg-white/10 flex items-center justify-center transition">
              <Settings className="w-4 h-4 text-gray-400" />
            </button>
          </div>
        </div>
      </aside>

      {/* -------------------------------------------------------------------------- */}
      {/*                                  MAIN AREA                                 */}
      {/* -------------------------------------------------------------------------- */}

      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="h-[80px] border-b border-white/10 px-6 md:px-10 flex items-center justify-between backdrop-blur-xl bg-black/40">
          {/* Search */}
          <div className="relative w-full max-w-xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />

            <input
              placeholder="Search boards, files, teams..."
              className="w-full h-12 rounded-2xl bg-white/[0.04] border border-white/10 pl-12 pr-4 text-sm outline-none focus:border-indigo-500/50 transition"
            />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 ml-5">
            <button className="w-11 h-11 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center hover:bg-white/[0.08] transition">
              <Bell className="w-5 h-5 text-gray-300" />
            </button>

            <button className="w-11 h-11 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center hover:bg-white/[0.08] transition">
              <LayoutGrid className="w-5 h-5 text-gray-300" />
            </button>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-6 md:px-10 py-10">
          {/* Hero */}
          <section className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-transparent p-8 md:p-10 mb-12">
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500/20 blur-[140px]" />

            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
              <div>
                {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-sm text-indigo-200 mb-5">
                  <Sparkles className="w-4 h-4" />
                  AI-powered collaboration
                </div> */}

                <h1 className="text-4xl md:text-5xl font-black leading-tight">
                  Welcome back,
                  <span className="block bg-gradient-to-r from-indigo-300 via-fuchsia-300 to-cyan-300 text-transparent bg-clip-text">
                    {user?.name || "Designer"}
                  </span>
                </h1>

                <p className="mt-5 text-gray-300 max-w-2xl leading-relaxed">
                  Continue collaborating with your team and turn
                  ideas into visual experiences.
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() =>
                  router.push(
                    `/localcanvas/${Math.floor(
                      Math.random() * 1000
                    )}`
                  )
                }
                className="group bg-white text-black px-7 py-4 rounded-2xl font-semibold flex items-center gap-2 hover:bg-gray-200 transition shadow-2xl"
              >
                Create Local Board
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </motion.button>
            </div>
          </section>

          {/* Section Heading */}
          <div className="flex items-center justify-between mb-7">
            <div>
              <h2 className="text-2xl font-bold">
                Recent Boards [ This feature is coming soon ]
              </h2>

              <p className="text-gray-500 mt-1">
                Pick up where you left off.
              </p>
            </div>

            <button className="text-sm text-indigo-400 hover:text-indigo-300 transition">
              View all
            </button>
          </div>

          {/* Boards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-7">
            {/* Create New */}
            <motion.div
              whileHover={{ y: -5 }}
              className="group cursor-pointer"
            >
              <div
                onClick={() =>
                  router.push(
                    `/canvas/${Math.floor(
                      Math.random() * 1000
                    )}`
                  )
                }
                className="h-[260px] rounded-[30px] border-2 border-dashed border-white/10 hover:border-indigo-500/50 bg-white/[0.03] transition-all flex flex-col items-center justify-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 flex items-center justify-center mb-5 group-hover:scale-110 transition">
                  <Plus className="w-8 h-8 text-indigo-400" />
                </div>

                <h3 className="font-semibold text-lg">
                  Create Collaborative Board
                </h3>

                <p className="text-sm text-gray-500 mt-2">
                  Start from a blank canvas
                </p>
              </div>
            </motion.div>

            {/* Existing Boards */}
            {RECENT_DRAWINGS.map((drawing) => (
              <motion.div
                whileHover={{ y: -5 }}
                key={drawing.id}
                className="group cursor-pointer"
              >
                <div className="rounded-[30px] overflow-hidden border border-white/10 bg-white/[0.03] hover:bg-white/[0.05] transition-all">
                  {/* Preview */}
                  <div
                    className={`h-[190px] bg-gradient-to-br ${drawing.color} relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.08)_1px,transparent_1px)] bg-[size:26px_26px]" />

                    <div className="absolute inset-0 flex items-center justify-center">
                      <PenTool className="w-14 h-14 text-black/20" />
                    </div>

                    {drawing.starred && (
                      <div className="absolute top-4 right-4">
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-semibold text-lg group-hover:text-indigo-300 transition">
                          {drawing.title}
                        </h3>

                        <p className="text-sm text-gray-500 mt-1">
                          Edited {drawing.time}
                        </p>
                      </div>

                      <button className="w-9 h-9 rounded-xl hover:bg-white/10 flex items-center justify-center transition">
                        <LayoutGrid className="w-4 h-4 text-gray-400" />
                      </button>
                    </div>

                    {/* Users */}
                    <div className="mt-5 flex items-center justify-between">
                      <div className="flex -space-x-2">
                        {drawing.users.map((u, i) => (
                          <div
                            key={i}
                            className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 border-2 border-black flex items-center justify-center text-xs font-bold"
                          >
                            {u}
                          </div>
                        ))}
                      </div>

                      <button className="text-sm text-indigo-300 hover:text-indigo-200 transition">
                        Open
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}