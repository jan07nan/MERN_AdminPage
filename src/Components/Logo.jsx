import React from "react";
import dealsdray from "../Images/dealsdray.jpg";

function Logo() {
  return (
    <div>
      <div className="sm:mx-2 mt-2 sm:w-full sm:max-w-sm">
        <img className=" ml-2 h-14" src={dealsdray} alt="Your Company" />
      </div>
    </div>
  );
}

export default Logo;
