import React from "react";

export default function SelectControl({
  id,
  label,
  placeholder,
  register,
  error,
  touched,
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-6">
      <label
        htmlFor={id}
        className="w-full sm:w-40 mt-2 sm:mt-0 block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>

      <div>
        <select
          id={id}
          {...register}
          className={`w-full sm:w-60 block  rounded-md border ${error ? 'border-red-600' : null} py-2 px-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600`}>
          <option value="">{placeholder}</option>
          <option value="hr">HR</option>
          <option value="manager">Manager</option>
          <option value="sales">Sales</option>
        </select>
        {error && touched && (
          <p className="mt-2 text-sm text-red-600">{error}</p>
        )}
      </div>
    </div>
  );
}
