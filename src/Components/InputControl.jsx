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
      <div className="flex flex-row gap-6">
        <label
          htmlFor={id}
          className="w-40 mt-2 block text-sm font-medium leading-6 text-gray-900"
        >
          {label}
        </label>
        <div className="mt-2">
          <input
            id={id}
            type={type}
            className=" w-60 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder: p-2  text-gray-800 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
