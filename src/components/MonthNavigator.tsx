import { MdArrowDropUp, MdArrowDropDown } from "react-icons/md";
import { useState } from "react";

const months = [
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
];

export const MonthNavigator = () => {
  const currentMonth = new Date().getMonth();
  const [month, setMonth] = useState(currentMonth);

  const nextMonth = () => {
    if (month < 11) setMonth(m => m + 1);
  };

  const prevMonth = () => {
    if (month > 0) setMonth(m => m - 1);
  };

  return (
    <div className="flex items-center justify-between w-[150px]">
      <span className="text-lg font-medium select-none">
        {months[month]}, 2026
      </span>

      <div className="flex flex-col -space-y-1">
        <button
          onClick={nextMonth}
          disabled={month === 11}
          className="disabled:opacity-30"
        >
          <MdArrowDropUp />
        </button>

        <button
          onClick={prevMonth}
          disabled={month === 0}
          className="disabled:opacity-30"
        >
          <MdArrowDropDown />
        </button>
      </div>
    </div>
  );
};
