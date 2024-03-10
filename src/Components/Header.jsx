import React from "react";

function Header() {
  return (
    <div>
      <div className="flex flex-row gap-9 ml-60">
        <div className="text-slate-500 p-2 text-lg font-bold flex flex-row gap-16 cursor-pointer">
          <button class=" min-h-2 p-2 hover:bg-slate-200 active:bg-slate-300  rounded-md">
            Home
          </button>
          <br></br>
          <button class=" min-h-2 p-2 hover:bg-slate-200 active:bg-slate-300  rounded-md">
            Employee details
          </button>
        </div>
        <div className="text-lg font-bold flex flex-row ml-80  gap-16">
          <p className="mt-4">Janani</p>
          <button class=" min-h-2 p-2 hover:bg-slate-200 active:bg-slate-300 rounded-md">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
