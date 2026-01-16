import { Button } from "flowbite-react";
import { useState, useEffect, useRef } from "react";
import { HiPencil, HiTrash } from "react-icons/hi";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdOutlineArrowDropDown } from "react-icons/md";
import type { ProductCardProps } from "../types/product";
import ImagePlaceholder from "../assets/image-placeholder.png";
import { convertToReal } from "../utils/helpers";
import { ActionModal } from "./ActionModal";
import type { Scout } from "../types/scout";

export const ProductCard = ({ product }: ProductCardProps) => {
  const [expanded, setExpanded] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [selectedPayer, setSelectedPayer] = useState<Scout | null>(null);
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const getStatusLabel = (status: string) => {
    return status === "paid" ? "Pago" : "Pendente";
  };

  const getStatusColor = (status: string) => {
    return status === "paid" ? "text-green-600 bg-green-50" : "text-yellow-600 bg-yellow-50";
  };

  const handleOpenModal = (payer: { name: string; status: string; student_id: string }) => {
    const scoutData: Scout = {
      name: payer.name,
      registration: payer.student_id,
      age: 0,
      category: undefined,
      product_list: [{
        name: product.name,
        price: product.price,
        status: payer.status as "paid" | "pending",
        product_id: product.product_id || ""
      }]
    };
    setSelectedPayer(scoutData);
    setOpenModal(true);
    setOpenMenuId(null);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpenMenuId(null);
      }
    };

    if (openMenuId) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openMenuId]);

  return (
    <>
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
            <img src={ImagePlaceholder} className="w-full h-full" alt={product.name} />
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
                bg-gray-50
                overflow-visible
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
                    flex
                    items-center
                    justify-between
                    px-5
                    py-3
                    border-b
                    border-gray-200
                    hover:bg-gray-100
                    transition-colors
                    relative
                  "
                >
                  <span className="font-medium text-gray-900 flex-1">
                    {payer.name}
                  </span>

                  <div className="flex items-center gap-3">
                    <span className={`
                      px-3 
                      py-1 
                      rounded-full 
                      text-xs 
                      font-semibold
                      ${getStatusColor(payer.status)}
                    `}>
                      {getStatusLabel(payer.status)}
                    </span>

                    <div className="relative" ref={openMenuId === payer.student_id ? menuRef : null}>
                      <Button
                        size="xs"
                        color="gray"
                        className="!p-1.5 min-w-[32px]"
                        onClick={(e) => {
                          e.stopPropagation();
                          setOpenMenuId(openMenuId === payer.student_id ? null : payer.student_id);
                        }}
                      >
                        ⋮
                      </Button>

                      {openMenuId === payer.student_id && (
                        <div 
                          className="absolute right-0 top-full mt-1 bg-white shadow-xl rounded-lg py-1 z-50 min-w-[200px] border border-gray-200"
                        >
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleOpenModal(payer);
                            }}
                            className="w-full text-left px-4 py-2 hover:bg-gray-100 text-sm font-medium text-gray-700"
                          >
                            Confirmar Pagamento
                          </button>
                        </div>
                      )}
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

      {selectedPayer && (
        <ActionModal
          openModal={openModal}
          onCloseModal={() => setOpenModal(false)}
          scout={selectedPayer}
          productId={product.product_id}
        />
      )}
    </>
  );a
};

