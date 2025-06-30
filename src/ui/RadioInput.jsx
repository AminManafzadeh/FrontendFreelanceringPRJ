function RadioInput({ label, value, onChange, name, id, checked }) {
  return (
    <div className="flex items-center">
      <input
        className="cursor-pointer w-4 h-4 form-radio text-primary-800 focus:ring-primary-800"
        type="radio"
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        checked={checked}
      />
      <label className="mr-2" htmlFor="OWNER">
        {label}
      </label>
    </div>
  );
}

export default RadioInput;
