function TextField({ value, onChange, label, name, type }) {
  return (
    <div>
      <label className="block mb-2" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        value={value}
        onChange={onChange}
        className="textField__input "
        type={type}
        name={name}
        autoComplete="off"
      />
    </div>
  );
}

export default TextField;
