export default function FloatingInput({
  label,
  name,
  type = "text",
  value,
  onChange,
  ...rest
}) {
  return (
    <div className="relative border border-gray-300 rounded-md px-3 pt-4 pb-2 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-300 transition">
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder=" " // still required for floating label
        className="peer w-full border-none bg-transparent p-0 placeholder-transparent focus:outline-none"
        {...rest} // pass other props like `required`, `maxLength`, etc.
      />
      <label
        htmlFor={name}
        className="absolute left-3 top-2 text-gray-500 text-sm transition-all
          peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
          peer-focus:top-2 peer-focus:text-sm peer-focus:text-blue-600"
      >
        {label}
      </label>
    </div>
  );
}
