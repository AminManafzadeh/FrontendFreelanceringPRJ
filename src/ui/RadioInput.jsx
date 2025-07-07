function RadioInput({ label, name, id, register, validationSchema, errors }) {
  return (
    <div>
      <div className="flex items-center">
        <input
          className="cursor-pointer w-4 h-4 form-radio text-primary-800 focus:ring-primary-800"
          type="radio"
          name={name}
          id={id}
          value={id}
          {...register(name, validationSchema)}
        />
        <label className="mr-2" htmlFor={id}>
          {label}
        </label>
      </div>
      <div>
        {errors && errors[name] && (
          <span className="text-error">{errors[name]?.message}</span>
        )}
      </div>
    </div>
  );
}

export default RadioInput;
