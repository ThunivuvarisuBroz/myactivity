"use client";
import React, { useState } from "react";
import { Home, BarChart3, Settings, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Sidebar({ isMenuOpen, setIsMenuOpen }) {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <>
      {/* DESKTOP SIDEBAR */}
      <aside
        className={`relative hidden md:flex flex-col bg-[#0f172a] text-slate-300 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] 
        border-r border-white/5 shadow-2xl h-[calc(100vh-73px)] sticky top-[73px]
        ${isExpanded ? "w-72 p-6" : "w-20 p-4"}`}
      >
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="absolute -right-5 top-12 bg-[#facc15] text-[#020617] p-1 rounded-full border-4 border-[#020617] hover:scale-110 transition-transform shadow-xl z-20"
        >
          {isExpanded ? <ChevronLeft size={16} strokeWidth={3} /> : <ChevronRight size={16} strokeWidth={3} />}
        </button>

        <nav className="flex-1 space-y-2">
          <SideItem icon={<Home size={22} />} label="Home" isExpanded={isExpanded} page="/" />
          <SideItem icon={<BarChart3 size={22} />} label="Analytics" isExpanded={isExpanded} page="/analytics" />
        </nav>

        <div className="pt-6 border-t border-white/5">
          <SideItem icon={<Settings size={22} />} label="Settings" isExpanded={isExpanded} page="/settings" />
        </div>
      </aside>

      {/* MOBILE OVERLAY MENU */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-[90] bg-[#0f172a] p-8 pt-24 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col gap-8">
            <Link 
              href="/" 
              className="flex items-center gap-4 text-2xl font-bold text-[#facc15]"
              onClick={() => setIsMenuOpen(false)}
            >
              <Home size={28}/> Home
            </Link>
            <Link 
              href="/analytics" 
              className="flex items-center gap-4 text-2xl font-bold text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              <BarChart3 size={28}/> Analytics
            </Link>
            <Link 
              href="/profile" 
              className="flex items-center gap-4 text-2xl font-bold text-white"
              onClick={() => setIsMenuOpen(false)}
            >
              <Settings size={28}/> Profile
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}

function SideItem({ icon, label, active = false, isExpanded, page }) {
  return (
    <Link
      href={`${page}`}
      className={`group relative flex items-center transition-all duration-300 rounded-2xl
      ${active ? "bg-[#facc15] text-[#020617] font-bold" : "hover:bg-white/5 hover:text-white"}
      ${isExpanded ? "px-4 py-3.5 gap-4" : "p-3.5 justify-center"}`}
    >
      <div className="transition-transform group-hover:scale-110">{icon}</div>
      {isExpanded && <span className="whitespace-nowrap text-sm">{label}</span>}
      {!isExpanded && (
        <div className="absolute left-full ml-6 px-3 py-2 bg-white text-black text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity shadow-xl z-50">
          {label}
        </div>
      )}
    </Link>
  );
}