import React from "react";
import dealsdray from "../Images/dealsdray.jpg";

function Logo() {
  return (
    <div>
      <div className="md:mx-2 md:w-full md:max-w-sm">
        <img className=" ml-2 h-20" src={dealsdray} alt="Your Company" />
      </div>
    </div>
  );
}

export default Logo;
