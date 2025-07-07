function TextField({
  register,
  label,
  name,
  type = "text",
  required,
  validationSchema,
  errors,
}) {
  return (
    <div>
      <label className="block mb-2 text-secondary-700" htmlFor={name}>
        {label} {required && <span className="text-error">*</span>}
      </label>
      <input
        id={name}
        {...register(name, validationSchema)}
        className="textField__input "
        type={type}
        name={name}
        autoComplete="off"
      />
      {errors && errors[name] && (
        <span className="text-error block text-sm mt-2">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}

export default TextField;
