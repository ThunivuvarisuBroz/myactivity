"use client";
import Image from "next/image";
// import Navbar from '@/layout/Navbar'
// import Sidebar from '@/layout/Sidebar'
import { Input } from "../Components/ui/input";
import { Label } from "../Components/ui/label";

export default function Home() {
  return (
    <div>
      <form action="" className="font-black italic">
        <Label className="text-white">Enter the Task Name</Label>
      </form>
    </div>
  );
}
