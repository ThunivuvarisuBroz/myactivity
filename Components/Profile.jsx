import React, { useState } from "react";
import Image from "next/image";
import luffy from "../public/asstes/luffy.jpg";
import { SquarePen } from "lucide-react";

function Profile() {
  const [edit, setEdit] = useState();
  const [open, setopen] = useState(false);
  return (
    <div className="  rounded-xl shadow-lg">
      <div className="flex items-center justify-between p-6 bg-white rounded-2xl">
        <div className="pr-8 border-r-2 border-amber-500/20">
          <div className="relative p-1 rounded-full bg-gradient-to-tr from-amber-400 to-yellow-200">
            <Image
              src={luffy}
              alt="Luffy profile"
              width={130}
              height={130}
              className="rounded-full object-cover aspect-square "
            />
          </div>
        </div>

        <div className="flex-1 pl-8">
          <p className="text-2xl font-extrabold text-gray-800">
            Monkey D. Luffy
          </p>
          <p className="text-sm text-gray-500 mt-1">Straw Hat Pirates</p>
          <button
            className="text-[#facc15] flex items-center"
            onClick={() => setopen(!open)}
          >
            Edit{" "}
            <span className="text-sm">
              {" "}
              <SquarePen strokeWidth={1} size={15} color="#facc15" />
            </span>
          </button>
        </div>
      </div>

      <div className="mt-10 mb-5  border-t-1  border-amber-50"></div>

      <div className="">
        <h3 className="text-white text-2xl font-black italic tracking-widest">Personal Information</h3>

      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="modal-content">
            <h2>Modal Title</h2>
            <p>This is a React-powered popup!</p>
            <button onClick={() => setopen(!open)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );

  function editProfile() {}
}

export default Profile;
