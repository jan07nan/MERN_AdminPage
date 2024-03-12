import React from "react";
import { Link } from "react-router-dom";

function Header({user}) {
 

  return (
    <div className="bg-slate-100 ml-80 flex gap-6 justify-between items-center py-4 px-6 text-zinc">
      <div className="flex gap-24">
        <Link to="/" className="hover:text-blue-500">
          Home
        </Link>
        <Link to="/dashboard" className="hover:text-blue-500">
          Dashboard
        </Link>
        <Link to="/Employee-list" className="hover:text-blue-500">
          Employee details
        </Link>
      </div>
      <div className="flex gap-14 ml-80 items-center">
        <p className="mr-4">{user?.Name}</p>
        <Link to="/">
          <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-400 focus:ring-opacity-50">
            Logout
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
