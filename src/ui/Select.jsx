function Select({ value, onChange, options }) {
  return (
    <select
      className="textField__input p-2 sm:p-3 text-xs sm:text-sm bg-secondary-0 w-full min-w-0"
      value={value}
      onChange={onChange}
    >
      {options?.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
