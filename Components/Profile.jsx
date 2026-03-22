"use client";
import React, { useState } from "react";
import Image from "next/image";
import luffy from "../public/asstes/luffy.jpg";
import { SquarePen, X } from "lucide-react";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";

function Profile() {
  const [open, setopen] = useState(false);
  const [popup, setpopup] = useState(false);

  return (
    <div className="min-h-screen text-slate-200 p-4 md:p-8 bg-slate-950">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* --- PROFILE HEADER --- */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 p-6 md:p-8 bg-slate-900/50 border border-slate-800 rounded-3xl backdrop-blur-md shadow-2xl">
          <div className="relative">
            <div
              className="p-1 rounded-full bg-gradient-to-tr from-[#facc15] to-yellow-200 shadow-[0_0_20px_rgba(250,204,21,0.3)] cursor-pointer transition-transform hover:scale-105"
              onClick={() => setpopup(true)}
            >
              <Image
                src={luffy}
                alt="Luffy profile"
                width={140}
                height={140}
                className="rounded-full object-cover aspect-square border-4 border-slate-900 w-24 h-24 md:w-36 md:h-36"
              />
            </div>
          </div>

          <div className="flex-1 text-center md:text-left space-y-2">
            <h2 className="text-2xl md:text-4xl font-black italic tracking-tight text-white">
              Monkey D. <span className="text-[#facc15]">Luffy</span>
            </h2>
            <p className="text-slate-400 font-medium italic tracking-wide uppercase text-xs md:text-sm">
              Captain • Straw Hat Pirates
            </p>

            <button
              onClick={() => setopen(true)}
              className="mt-2 md:mt-4 inline-flex items-center gap-2 text-[#facc15] text-sm md:text-base hover:opacity-80 transition-opacity"
            >
              <SquarePen size={18} />
              Edit Profile
            </button>
          </div>
        </div>

        {/* --- INFO SECTION --- */}
        <div className="pt-4 md:pt-8 space-y-6">
          <h3 className="text-white text-xl md:text-2xl font-black italic tracking-widest uppercase border-l-4 border-[#facc15] pl-4">
            Personal <span className="text-[#facc15]">Information</span>
          </h3>

          <form className="bg-slate-900/40 border border-slate-800/60 p-5 md:p-10 rounded-2xl md:rounded-3xl shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              <div className="space-y-2 md:space-y-3">
                <Label className="text-slate-400 ml-1 text-sm">Gender</Label>
                <Input
                  value="Male"
                  readOnly
                  className="bg-slate-950/50 border-slate-800 text-slate-300 h-10 md:h-12 rounded-xl cursor-not-allowed text-sm"
                />
              </div>

              <div className="space-y-2 md:space-y-3">
                <Label className="text-slate-400 ml-1 text-sm">
                  Date of Birth
                </Label>
                <Input
                  value="Sep 07, 2002"
                  readOnly
                  className="bg-slate-950/50 border-slate-800 text-slate-300 h-10 md:h-12 rounded-xl cursor-not-allowed text-sm"
                />
              </div>

              <div className="space-y-2 md:space-y-3 md:col-span-2">
                <Label className="text-slate-400 ml-1 text-sm">
                  Email Address
                </Label>
                <Input
                  value="luffy@pirateking.com"
                  readOnly
                  className="bg-slate-950/50 border-slate-800 text-slate-300 h-10 md:h-12 rounded-xl cursor-not-allowed text-sm"
                />
              </div>

              <div className="space-y-2 md:space-y-3 md:col-span-2">
                <Label className="text-slate-400 ml-1 text-sm">Address</Label>
                <textarea
                  readOnly
                  className="flex min-h-[100px] md:min-h-[120px] w-full rounded-xl border border-slate-800 bg-slate-950/50 px-4 py-3 text-sm text-slate-300 cursor-not-allowed focus:outline-none"
                  value="Thousand Sunny, The Grand Line"
                />
              </div>
            </div>

            <div className="flex justify-end pt-6 md:pt-4">
              <button
                type="button"
                className="w-full md:w-auto text-[#facc15] bg-white/5 backdrop-blur-sm border border-white/10 px-8 py-2.5 cursor-pointer rounded-xl md:rounded-md hover:bg-white/10 transition-all font-bold md:font-normal"
              >
                Edit
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* --- RESPONSIVE IMAGE POPUP --- */}
      {popup && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-slate-950/95 backdrop-blur-xl cursor-zoom-out"
            onClick={() => setpopup(false)}
          />

          <div className="relative animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setpopup(false)}
              className="absolute -top-12 right-0 text-[#facc15] p-2"
            >
              <X size={32} />
            </button>

            <div className="relative rounded-full p-1.5 bg-gradient-to-br from-[#facc15] to-yellow-200 shadow-2xl">
              <Image
                src={luffy}
                alt="Enlarged Profile"
                width={400}
                height={400}
                className="rounded-full object-cover aspect-square border-4 md:border-8 border-slate-900 w-[75vw] h-[75vw] max-w-[400px] max-h-[400px]"
                priority
              />
            </div>
          </div>
        </div>
      )}

      {/* --- EDIT MODAL --- */}
      {open && (
        <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 md:p-6">
          <div
            className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            onClick={() => setopen(false)}
          />
          <div className="relative w-full max-w-md bg-slate-900 border border-slate-700 p-6 md:p-8 rounded-3xl shadow-2xl animate-in fade-in slide-in-from-bottom-4 md:slide-in-from-none duration-300">
            <button
              onClick={() => setopen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white"
            >
              <X size={24} />
            </button>

            <h2 className="text-xl md:text-2xl font-bold text-white mb-1">
              Edit Profile
            </h2>
            <p className="text-slate-400 text-sm mb-6">
              Update your personal details below.
            </p>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label className="text-sm">Display Name</Label>
                <Input
                  placeholder="Enter name..."
                  className="bg-slate-800 border-slate-700 h-11"
                />
              </div>
              <button className="w-full py-3 bg-[#facc15] text-black font-black rounded-xl mt-4 active:scale-95 transition-transform">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
