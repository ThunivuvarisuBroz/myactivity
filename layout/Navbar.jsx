"use client";
import React from "react";
import { CircleUserRound, Menu, X } from "lucide-react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/Components/ui/tooltip";

function Navbar({ isMenuOpen, setIsMenuOpen }) {
  return (
    <nav className="sticky top-0 z-[100] bg-[#0f172a] border-b border-slate-800">
      <div className="flex justify-between items-center p-4 md:px-8">
        
        <div className="text-2xl md:text-3xl uppercase font-black italic">
          <span className="text-white">My</span>
          <span className="text-[#facc15]">Activity</span>
        </div>

        {/* Desktop Profile Link */}
        <div className="hidden md:flex items-center gap-6">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href={"/profile"} className="cursor-pointer hover:opacity-80 transition-opacity">
                  <CircleUserRound
                    size={40}
                    color="#ffd356"
                    strokeWidth={0.75}
                  />
                </Link>
              </TooltipTrigger>
              <TooltipContent className="bg-[#facc15] text-black border-none font-bold shadow-lg">
                <p>Profile</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-[#facc15] p-2 hover:bg-white/5 rounded-lg transition-colors"
          >
            {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;