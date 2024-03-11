import React from "react";

function Button({ value }) {
  return (
    <div>
      <button
        type="submit"
        className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-400 focus:ring-opacity-50"
      >
        {value}
      </button>
    </div>
  );
}

export default Button;
