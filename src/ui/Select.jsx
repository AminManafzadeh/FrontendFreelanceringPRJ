function Select({ value, onChange, options }) {
  return (
    <select
      className="textField__input p-2 text-xs bg-secondary-0"
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
