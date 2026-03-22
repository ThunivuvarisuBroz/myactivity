'use client'
import React from "react";
import Profile from "../../Components/Profile";

function Page() {
  return (
    <div className="mx-4 md:mx-10 mt-6 md:mt-20">
      <div className="w-full border-white md:border-1 p-0 md:p-5 rounded-2xl">
        <Profile />
      </div>
    </div>
  );
}

export default Page;