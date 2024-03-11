export function InputControl({
  id,
  label,
  placeholder,
  type = "text",
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
      <div >
        <input
          id={id}
          type={type}
          {...register}
          placeholder={placeholder}
          className={`w-full sm:w-60 block  rounded-md border ${error ? 'border-red-600' : null} py-2 px-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600`}
        />
        {error && touched && (
          <p className="mt-2 text-sm text-red-600">{error}</p>
        )}
      </div>
    </div>
  );
}
