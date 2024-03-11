function RadioControl({
    id,
    label,
    register,
    error,
    touched,
  }) {
  return (
    <div className="flex flex-row mr-6 mt-2">
      <label
        htmlFor={id}
        className="w-full sm:w-40 mt-2 sm:mt-0 block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="text-sm flex flex-row gap-4 ">
        <div>
          <input {...register} type="radio" value="Male" />
          <label>Male</label>
        </div>
        <div>
          <input {...register} type="radio" value="Female" />
          <label>Female</label>
        </div>
        {error && touched && (
          <p className="mt-2 text-sm text-red-600">{error}</p>
        )}
      </div>
    </div>
  );
}
export default RadioControl;
