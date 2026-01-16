import { Button } from "flowbite-react";
import { useState } from "react";
import { HiPencil, HiTrash } from "react-icons/hi";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdOutlineArrowDropDown } from "react-icons/md";
import type { ProductCardProps } from "../types/product";
import ImagePlaceholder from "../assets/image-placeholder.png";
import { convertToReal } from "../utils/helpers";
import { useStudents } from "../hooks/useStudents";

export const ProductCard = ({ product }: ProductCardProps) => {
  const [expanded, setExpanded] = useState(false);
  const { onConfirmPayment } = useStudents();

  const getStatusLabel = (status: string) => {
    return status === "paid" ? "Pago" : "Pendente";
  };

  const getStatusColor = (status: string) => {
    return status === "paid" ? "text-green-600" : "text-yellow-600";
  };

  const handleConfirmPayment = async (studentId: string, currentStatus: string) => {
    if (!product.product_id) return;
    
    const newStatus = currentStatus === "paid" ? "pending" : "paid";
    await onConfirmPayment(product.product_id, studentId, newStatus);
  };

  return (
    <div className="w-full bg-gray-200 rounded-xl overflow-hidden">
      <div className="flex">
        <div 
          className={`
            w-[120px] 
            shrink-0 
            bg-red-300 
            flex 
            items-center 
            justify-center
            ${expanded ? 'rounded-t-xl rounded-r-xl' : 'rounded-xl'}
          `}>
          <img src={ImagePlaceholder} className="w-full h-full" />
        </div>

        <div className="flex-1 flex flex-col">
          <div className="flex justify-between p-4">
            <div>
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <span className="text-sm">{convertToReal(product.price)}</span>
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

          {!expanded && (
            <div className="flex justify-between items-center px-4 pb-3">
              <button className="flex items-center gap-1 text-sm">
                <IoIosAddCircleOutline />
                Adicionar Aluno
              </button>

              <button onClick={() => setExpanded(true)}>
                <MdOutlineArrowDropDown size={22} />
              </button>
            </div>
          )}
        </div>
      </div>

      {expanded && (
        <>
          <div
            className={`
              bg-gray-300
              overflow-hidden
              transition-all
              duration-300
              ease-in-out
              ${expanded ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"}
            `}
          >
            {product.payers_list?.map((payer) => (
              <div
                key={payer.student_id}
                className="
                  grid
                  grid-cols-[2fr_1fr_40px]
                  items-center
                  px-5
                  py-2
                  border-b
                  text-sm
                "
              >
                <span className="break-words">
                  {payer.name}
                </span>

                <span className={`font-semibold ${getStatusColor(payer.status)}`}>
                  {getStatusLabel(payer.status)}
                </span>

                <div className="text-right relative group">
                  <button className="cursor-pointer hover:bg-gray-400 rounded p-1">
                    ⋮
                  </button>
                  <div className="hidden group-hover:block absolute right-0 mt-1 bg-white shadow-lg rounded-lg py-1 z-10 min-w-[200px]">
                    <button
                      onClick={() => handleConfirmPayment(payer.student_id, payer.status)}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm"
                    >
                      {payer.status === "paid" ? "Marcar como Pendente" : "Confirmar Pagamento"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between items-center px-5 py-3 bg-gray-100">
            <button className="flex items-center gap-1 text-sm">
              <IoIosAddCircleOutline />
              Adicionar Aluno
            </button>

            <button onClick={() => setExpanded(false)}>
              <MdOutlineArrowDropDown 
                size={22} 
                className={`
                  transition-transform
                  duration-300
                  ${expanded ? "rotate-180" : ""}
                `}
              />
            </button>
          </div>
        </>
      )}
    </div>
  );
};




