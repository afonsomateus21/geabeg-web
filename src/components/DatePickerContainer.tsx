import { CiCalendar } from "react-icons/ci";
import type { DataPickerContainerProps } from "../types/common";

export const DatePickerContainer = ({ children }: DataPickerContainerProps) => {
  return (
    <div className="h-full flex flex-col bg-gray-200 rounded-xl">
      <header className="w-full flex justify-between items-center border-b p-3 border-gray-400">
        <h3>Escolha a data</h3>
        <CiCalendar />
      </header>
      <main className="flex items-center gap-4 justify-center pt-7 p-3">
        {children}
      </main>
    </div>
  );
}