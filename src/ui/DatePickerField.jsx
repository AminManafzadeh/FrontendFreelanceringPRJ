import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

function DatePickerField({ label, date, setDate }) {
  return (
    <div>
      <span className="mb-2 block text-secondary-700">{label}</span>
      <DatePicker
        value={date}
        onChange={(date) => setDate(date)}
        inputClass="textField__input"
        containerClassName="w-full"
        format="YYYY/MM/DD"
        calendarPosition="bottom-center"
        calendar={persian}
        locale={persian_fa}
      />
    </div>
  );
}

export default DatePickerField;
