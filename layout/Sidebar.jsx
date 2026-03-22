"use client";
import React, { useState } from "react";
import { Home, Trophy, Users, BarChart3, Settings, ChevronLeft, ChevronRight } from "lucide-react";

export default function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <aside
      className={`relative h-screen bg-[#0f172a] text-slate-300 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] 
      border-r border-white/5 shadow-2xl flex flex-col
      ${isExpanded ? "w-72 p-6" : "w-20 p-4"}`}
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="absolute -right-5 top-12 bg-[#facc15] text-[#020617] p-1 rounded-full border-4 border-[#020617] hover:scale-110 transition-transform shadow-xl"
      >
        {isExpanded ? <ChevronLeft size={16} strokeWidth={3} /> : <ChevronRight size={16} strokeWidth={3} />}
      </button>

     
      <nav className="flex-1 space-y-2">
        <SideItem icon={<Home size={22} />} label="Home" active isExpanded={isExpanded} />
        <SideItem icon={<BarChart3 size={22} />} label="Analytics" isExpanded={isExpanded} />
        {/* <SideItem icon={<Users size={22} />} label="My Teams" isExpanded={isExpanded} badge="3" />
        <SideItem icon={<Trophy size={22} />} label="Leagues" isExpanded={isExpanded} /> */}
      </nav>

     
      {/* <div className="pt-6 border-t border-white/5">
        <SideItem icon={<Settings size={22} />} label="Settings" isExpanded={isExpanded} />
      </div> */}
    </aside>
  );
}


function SideItem({ icon, label, active = false, isExpanded, badge }) {
  return (
    <a
      href="#"
      className={`group relative flex items-center transition-all duration-300 rounded-2xl
      ${active 
        ? "bg-[#facc15] text-[#020617] font-bold shadow-lg shadow-yellow-500/10" 
        : "hover:bg-white/5 hover:text-white"
      }
      ${isExpanded ? "px-4 py-3.5 gap-4" : "p-3.5 justify-center"}`}
    >
      <div className={`${active ? "scale-110" : "group-hover:scale-110"} transition-transform`}>
        {icon}
      </div>

      {isExpanded && (
        <div className="flex flex-1 justify-between items-center animate-in fade-in slide-in-from-left-2 duration-500">
          <span className="whitespace-nowrap tracking-wide">{label}</span>
          {badge && (
            <span className={`text-[10px] px-2 py-0.5 rounded-full ${active ? "bg-black/10" : "bg-red-500 text-white"}`}>
              {badge}
            </span>
          )}
        </div>
      )}

      
      {!isExpanded && (
        <div className="absolute left-full ml-6 px-3 py-2 bg-white text-black text-xs font-bold rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity shadow-xl whitespace-nowrap z-50">
          {label}
        </div>
      )}
    </a>
  );
}