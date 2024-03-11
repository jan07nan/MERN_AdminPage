import React from "react";
import dealsdray from "../Images/dealsdray.jpg";

function Logo() {
  return (
    <div className="bg-slate-100 flex items-center">
      <div className="flex-shrink-0">
        <img className="h-16 md:h-20 ml-2" src={dealsdray} alt="Your Company" />
      </div>
    </div>
  );
}

export default Logo;
