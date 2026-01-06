import { Button, Pagination } from "flowbite-react";
import { ProductCard } from "../components/ProductCard";
import { useState } from "react";
import { MonthNavigator } from "../components/MonthNavigator";
import { HiCheck } from "react-icons/hi";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";
import { HeaderIconButton } from "../components/HeaderIconButton";

export const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page: number) => setCurrentPage(page);

  return (
    <div className="w-full p-5 flex flex-col">
      <div className="w-full mb-4 flex justify-between">
        <div className="flex gap-4">
          <MonthNavigator />
          <Button 
            size="xs"
            className={`
              !bg-gray-400  
            `}
          >
            <HiCheck className="mr-2 h-5 w-5" />
            Produtos
          </Button>
          <Button   
            size="xs"
            outline
            color="dark"
            className={`
              border
            `}
          >
            <HiCheck className="mr-2 h-5 w-5" />
            Doações
          </Button>
        </div>

        <div className="flex gap-4">
          <HeaderIconButton title="Nome">
            <MdOutlineArrowDropUp className="h-5 w-5" />
            <MdOutlineArrowDropDown className="h-5 w-5" />
          </HeaderIconButton>

          <HeaderIconButton title="Data">
            <MdOutlineArrowDropDown className="h-5 w-5" />
          </HeaderIconButton>

          <HeaderIconButton title="Valor">
            <MdOutlineArrowDropUp className="h-5 w-5" />
            <MdOutlineArrowDropDown className="h-5 w-5" />
          </HeaderIconButton>
        </div>
      </div>
      {
        [1,2,3,4,5,6,7,8].map(() => (
          <div className="mb-2">
            <ProductCard />
          </div>
        ))
      }

      <div className="flex overflow-x-auto sm:justify-center">
        <Pagination currentPage={currentPage} totalPages={10} onPageChange={onPageChange} />
      </div>
    </div>
  );
}