import { Button } from "flowbite-react";
import { HiPencil, HiTrash } from "react-icons/hi";
import type { DonationCardProps } from "../types/donation";
import { convertToReal } from "../utils/helpers";

export const DonationCard = ({title, price, donor}: DonationCardProps) => {
  return (
    <div className="w-full bg-gray-200 rounded-xl overflow-hidden">
      <div className="flex">
        <div className="flex-1 flex flex-col">
          <div className="flex justify-between p-4">
            <div>
              <h3 className="text-lg font-semibold">{title}</h3>
              <span className="text-sm">{convertToReal(price)}</span>
            </div>

            <div className="flex gap-2">
              <Button className="h-8 w-8 p-0 rounded-full flex items-center justify-center">
                <HiPencil className="h-5 w-5" />
              </Button>
              <Button className="h-8 w-8 p-0 rounded-full flex items-center justify-center">
                <HiTrash className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <span className="text-sm p-4">Doado por: {donor}</span>
        </div>
      </div>

    </div>
  );
};




