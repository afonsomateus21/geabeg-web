import DatePicker from "react-datepicker"
import type { DatePickerInputProps } from "../../types/common"

export const DatePickerInput = ({
  title,
  value,
  onChange,
}: DatePickerInputProps) => {
  return (
    <div className="relative border-2 border-gray-300 pl-4 pt-4 pb-2">
      <label className="absolute -top-3 left-2 bg-gray-200 px-2">
        {title}
      </label>

      <DatePicker
        selected={value}
        onChange={onChange}
        dateFormat="dd/MM/yyyy"
        className="outline-0 max-w-[120px]"
      />
    </div>
  );
};