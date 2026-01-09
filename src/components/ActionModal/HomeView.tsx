import { Button } from "flowbite-react"
import type { HomeViewProps } from "../../types/common"
import { FaCheck } from "react-icons/fa"
import { FiMinus } from "react-icons/fi"

export const HomeView = ({ title, onPayment, onExemption }: HomeViewProps) => {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-bold text-sm">{title}</h3>
    
      <div className="w-full flex items-center justify-between gap-2">
        <Button
          className="bg-black text-white hover:bg-black/75"
          onClick={ onPayment }
        >
          <FaCheck className="mr-2 h-5 w-5" color="white" />
          Confirmar pagamento
        </Button>
        <Button 
          className="bg-gray-200 text-black hover:bg-gray-400"
          onClick={ onExemption }
        >
          <FiMinus className="mr-2 h-5 w-5" color="black" />
          Aplicar isenção
        </Button>
      </div>
    </div>
  )
}