import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <div className="flex flex-row gap-9 ml-60">
        <div className="text-slate-500 p-2 text-lg font-bold flex flex-row gap-16 cursor-pointer">
          <Link to="/">
            <button class=" min-h-2 p-2 hover:bg-slate-200 active:bg-slate-300  rounded-md">
              Home
            </button>
          </Link>
          <br></br>
          <Link to="/Employee-list">
            {" "}
            <button class=" min-h-2 p-2 hover:bg-slate-200 active:bg-slate-300  rounded-md">
              Employee details
            </button>{" "}
          </Link>
        </div>
        <div className="text-lg font-bold flex flex-row ml-80  gap-16">
          <p className="mt-4">Janani</p>
          <button class=" flex w-45 justify-center rounded-md bg-indigo-600 px-3 mt-4 mb-4 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
