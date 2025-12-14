import React from 'react';
import { 
  Search, 
  LayoutGrid, 
  Bell, 
  Menu, 
  Plus, 
  Clock, 
  Star, 
  Users, 
  Trash2, 
  PenTool, 
  MoreHorizontal, 
  FolderPlus,
  LogOut,
  Settings
} from 'lucide-react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';

// Mock Data for Recent Drawings
const RECENT_DRAWINGS = [
  {
    id: 1,
    title: "System Architecture V2",
    time: "2 mins ago",
    color: "bg-[#e3d5c2]", // Beige
    users: ["U1", "U2"],
    starred: true
  },
  {
    id: 2,
    title: "Q4 Marketing Brainstorm",
    time: "2 hours ago",
    color: "bg-[#c2d1e3]", // Blueish
    users: ["U3"],
    starred: false
  },
  {
    id: 3,
    title: "User Journey Map",
    time: "Yesterday",
    color: "bg-[#e3c2d3]", // Pinkish
    users: [],
    starred: true
  },
  {
    id: 4,
    title: "Database Schema",
    time: "2 days ago",
    color: "bg-[#d8d8d8]", // Grey
    users: [],
    starred: false
  },
  {
    id: 5,
    title: "Logo Concepts",
    time: "Last week",
    color: "bg-[#c2e3cf]", // Greenish
    users: [],
    starred: false
  }
];

const SIDEBAR_ITEMS = [
  { icon: Clock, label: "Recent", active: true },
  { icon: Star, label: "Starred", active: false },
  { icon: Users, label: "Shared with me", active: false },
  { icon: Trash2, label: "Trash", active: false },
];

const TEAMS = [
  { label: "Design Team" },
  { label: "Engineering" }
];

export default function Dashboard() {
  return (
    <div className="flex h-screen w-screen bg-[#0f0f11] text-white overflow-hidden font-sans">
      
      {/* Sidebar */}
      <div className="w-64 shrink-0 border-r border-white/5 flex flex-col bg-[#0f0f11]">
        <div className="p-6">
          <div className="flex items-center gap-3 text-white mb-8">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <PenTool className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg tracking-tight">SketchFlow</span>
          </div>

          <button className="w-full flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white py-2.5 rounded-lg transition-colors border border-white/5 font-medium text-sm mb-8">
            <Plus className="w-4 h-4" />
            New Drawing
          </button>

          <div className="space-y-6">
            <div>
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-2">Library</h3>
              <div className="space-y-0.5">
                {SIDEBAR_ITEMS.map((item) => (
                  <button 
                    key={item.label}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      item.active 
                        ? 'bg-white/5 text-white' 
                        : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <item.icon className="w-4 h-4" />
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3 px-2">Teams</h3>
              <div className="space-y-0.5">
                {TEAMS.map((team) => (
                  <button 
                    key={team.label}
                    className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                  >
                    <Users className="w-4 h-4" />
                    {team.label}
                  </button>
                ))}
                <button className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors">
                  <Plus className="w-4 h-4" />
                  Create Team
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-auto p-4 border-t border-white/5">
          <div className="flex items-center gap-3 px-2">
            <div className="w-9 h-9 rounded-full  from-indigo-500 to-purple-500 ">
              <div className="w-full h-full rounded-full bg-[#0f0f11]">
                <img 
                  src="https://github.com/shadcn.png" 
                  alt="Profile" 
                  className="w-full h-full rounded-full"
                />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium text-white truncate">shadcn</div>
              <div className="text-xs text-gray-500 truncate">Free Plan</div>
            </div>
            <Settings className="w-4 h-4 text-gray-500 hover:text-white cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0 bg-[#0f0f11]">
        {/* Header */}
        <header className="h-16 flex items-center justify-between px-8 border-b border-white/5">
          <div className="flex-1 max-w-xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input 
                type="text" 
                placeholder="Search drawings..." 
                className="w-full bg-white/5 border border-white/5 rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-4 ml-4">
            <button className="p-2 text-gray-400 hover:text-white transition-colors">
              <LayoutGrid className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-400 hover:text-white transition-colors">
              <Bell className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* Content Scroll Area */}
        <div className="flex-1 overflow-y-auto p-8">
          
          {/* Welcome Section */}
          <div className="flex items-end justify-between mb-10">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">
                Welcome back, <span className="text-indigo-400">Designer</span>
              </h1>
              <p className="text-gray-400">Ready to create something awesome today?</p>
            </div>
            <Link href="/editor">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 rounded-lg font-medium shadow-lg shadow-indigo-500/20 flex items-center gap-2 transition-colors"
              >
                <Plus className="w-4 h-4" />
                Create New Board
              </motion.button>
            </Link>
          </div>

          {/* Recent Drawings Grid */}
          <div className="mb-6 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-white">Recent Drawings</h2>
            <button className="text-sm text-indigo-400 hover:text-indigo-300">View all</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            
            {/* New Drawing Card */}
            <Link href="/editor">
              <motion.div 
                whileHover={{ y: -2 }}
                className="group cursor-pointer"
              >
                <div className=" rounded-xl border-2 border-dashed border-white/10 hover:border-indigo-500/50 transition-all flex flex-col items-center justify-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-indigo-600/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Plus className="w-6 h-6 text-indigo-400" />
                  </div>
                  <span className="text-sm font-medium text-gray-400 group-hover:text-indigo-400">New Drawing</span>
                </div>
                {/* Spacer to align with other cards text */}
                <div className="mt-3 h-10"></div> 
              </motion.div>
            </Link>

            {/* Drawing Cards */}
            {RECENT_DRAWINGS.map((drawing) => (
              <Link key={drawing.id} href="/editor">
                <motion.div 
                  whileHover={{ y: -2 }}
                  className="group cursor-pointer"
                >
                  {/* Card Preview */}
                  <div className={` rounded-xl p-3 ${drawing.color} relative overflow-hidden`}>
                    {/* Inner dashed border area */}
                    <div className="w-full h-full border-2 border-dashed border-black/10 rounded-lg flex items-center justify-center">
                      <PenTool className="w-8 h-8 text-black/10" />
                    </div>
                    
                    {drawing.starred && (
                      <div className="absolute top-3 right-3 text-yellow-600">
                        <Star className="w-4 h-4 fill-current" />
                      </div>
                    )}
                  </div>

                  {/* Card Info */}
                  <div className="mt-3 flex items-start justify-between">
                    <div>
                      <h3 className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors">
                        {drawing.title}
                      </h3>
                      <p className="text-xs text-gray-500 mt-0.5">{drawing.time}</p>
                    </div>
                    
                    {drawing.users.length > 0 && (
                      <div className="flex -space-x-2">
                        {drawing.users.map((u, i) => (
                          <div key={i} className="w-6 h-6 rounded-full bg-indigo-500 ring-2 ring-[#0f0f11] flex items-center justify-center text-[10px] font-bold text-white">
                            {u}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              </Link>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
}