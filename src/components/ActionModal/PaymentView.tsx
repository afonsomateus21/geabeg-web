import { Button } from "flowbite-react"
import type { PaymentViewProps } from "../../types/common"
import { FaPix } from "react-icons/fa6"
import { FaCreditCard, FaMoneyBillAlt } from "react-icons/fa"

export const PaymentView = ({ title, onConfirmation }: PaymentViewProps) => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-bold text-sm">{title}</h3>
    
      <div className="w-full flex items-center justify-between gap-2">
        <Button
          className="bg-black text-white hover:bg-black/75"
          onClick={ onConfirmation }
        >
          <FaPix className="mr-2 h-5 w-5" color="white" />
          Pix
        </Button>
        <Button 
          className="bg-gray-200 text-black hover:bg-gray-400"
          onClick={ onConfirmation }
        >
          <FaCreditCard className="mr-2 h-5 w-5" color="black" />
          Crédito
        </Button>
        <Button 
          className="bg-gray-200 text-black hover:bg-gray-400"
          onClick={ onConfirmation }
        >
          <FaMoneyBillAlt className="mr-2 h-5 w-5" color="black" />
          Espécie
        </Button>
      </div>
    </div>
  )
}