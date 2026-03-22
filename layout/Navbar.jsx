'use client'
import React from "react";
import { CircleUserRound, Trophy } from "lucide-react";
import Link from "next/link";
function Navbar() {
  return (
    <div className="flex justify-between p-5">
      <div className="text-3xl uppercase font-black italic">
        My<span className="text-[#facc15]">Activity</span>
      </div>
      {/* <div>
        <ul>
          <li>Home</li>
        </ul>
      </div> */}
      <div>
        <button title="profile"  className="cursor-pointer">
          <Link href={'/profile'}>
          <CircleUserRound
            size={40}
            color="#ffd356"
            strokeWidth={0.75}
            absoluteStrokeWidth
          /></Link>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
