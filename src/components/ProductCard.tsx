import { Button } from "flowbite-react";
import { useState } from "react";
import { HiPencil, HiTrash } from "react-icons/hi";
import { IoIosAddCircleOutline } from "react-icons/io";
import { MdOutlineArrowDropDown } from "react-icons/md";

export const ProductCard = () => {
  const [expanded, setExpanded] = useState(false);

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
          imagem
        </div>

        <div className="flex-1 flex flex-col">
          <div className="flex justify-between p-4">
            <div>
              <h3 className="text-lg font-semibold">Produto 1</h3>
              <span className="text-sm">R$23,50</span>
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
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="flex justify-between px-5 py-2 border-b text-sm"
              >
                <span>Augustinho Gomes Junior</span>
                <span>553659</span>
                <span>8 anos</span>
                <span>⋮</span>
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




