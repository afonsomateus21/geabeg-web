import type { ConfirmationViewProps } from "../../types/common";
import { FaCheckCircle } from "react-icons/fa";

export const ConfirmationView = ({ title }: ConfirmationViewProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <h3 className="font-bold text-lg">{ title }</h3>
    
      <FaCheckCircle className="h-7 w-7" />
    </div>
  );
}