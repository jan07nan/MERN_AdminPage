import React from "react";

function PageHeader({ label }) {
  return (
    <div>
      <p className="block text-lg mt-6 ml-4 font-medium leading-6 text-zinc-900">
        {label}
      </p>
    </div>
  );
}

export default PageHeader;
