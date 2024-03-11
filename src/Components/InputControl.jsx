import React from "react";

export function InputControl({
  id,
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  required,
}) {
  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center gap-6">
        <label
          htmlFor={id}
          className="w-full sm:w-40 mt-2 sm:mt-0 block text-sm font-medium leading-6 text-gray-900"
        >
          {label}
        </label>
        <div className="mt-2">
          <input
            id={id}
            type={type}
            className="w-full sm:w-60 block rounded-md border-0 py-2 px-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required={required}
          />
        </div>
      </div>
    </div>
  );
}
