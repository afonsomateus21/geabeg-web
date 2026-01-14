import { Button, Pagination } from "flowbite-react";
import { ProductCard } from "../components/ProductCard";
import { useState } from "react";
import { MonthNavigator } from "../components/MonthNavigator";
import { HiCheck } from "react-icons/hi";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";
import { HeaderIconButton } from "../components/HeaderIconButton";
import type { ProductPageFilterId } from "../types/common";
import { productPageFilters } from "../utils/constants";
import { DonationCard } from "../components/DonationCard";
import { IoMdAdd } from "react-icons/io";
import { FormModal } from "../components/forms/FormModal";
import { DonationForm } from "../components/forms/DonationForm";
import { ProductForm } from "../components/forms/ProductForm";

export const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFilter, setSelectedFilter] = useState<ProductPageFilterId>("products");
  const [openModal, setOpenModal] = useState(false);

  const onPageChange = (page: number) => setCurrentPage(page);

  const onCloseModal = () => setOpenModal(false);

  return (
    <div className="w-full p-5 flex flex-col">
      <div className="w-full flex flex-col gap-4 items-start mb-4">
        <div className="w-full flex gap-4 justify-between">
          <div className="flex gap-4">
            <MonthNavigator />
            {
              productPageFilters.map((filter) => (
                <Button 
                  size="xs"
                  className={`
                    hover:bg-gray-600
                    border-bg-gray-400
                    ${selectedFilter === filter.id && 'bg-gray-400'}  
                  `}
                  outline={selectedFilter !== filter.id}
                  onClick={() => setSelectedFilter(filter.id)}
                  color="gray"
                >
                  {selectedFilter == filter.id && <HiCheck className="mr-2 h-5 w-5" />}
                  {filter.label}
                </Button>
              ))
            }
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

        <Button 
          size="sm"
          pill
          onClick={() => setOpenModal(true)}
        >
          <IoMdAdd className="mr-2 h-5 w-5" />
          Adicionar
        </Button>
      </div>
      {
        selectedFilter === "products" 
        ? [1,2,3,4,5,6,7,8].map((_, index) => (
          <div className="mb-2">
            <ProductCard 
              key={index}
              title="Produto 1"
              price={23.9}
            />
          </div>
        ))
        : [1,2,3,4,5,6,7,8].map((_, index) => (
          <div className="mb-2">
            <DonationCard 
              key={index}
              title="Produto 1"
              price={23.9}
              donor="Anselmo Luiz"
            />
          </div>
        ))
      }

      <div className="flex overflow-x-auto sm:justify-center">
        <Pagination currentPage={currentPage} totalPages={10} onPageChange={onPageChange} />
      </div>
      <FormModal
        openModal={openModal}
        onCloseModal={onCloseModal}
        title={selectedFilter === "products" ? "Novo produto" : "Nova doação"}
      >
        {
          selectedFilter === "products" 
          ? <ProductForm 
              scouts={[
                {
                  name: "Afonso Mateus",
                  registration: "111111",
                  age: 10
                },
                {
                  name: "Gabriel Cavalcante",
                  registration: "111111",
                  age: 10
                },
                {
                  name: "Davi Lisboa",
                  registration: "111111",
                  age: 10
                },
                {
                  name: "Gabriel Farias",
                  registration: "111111",
                  age: 10
                }
              ]}
            />
          : <DonationForm />
        }
      </FormModal>  
    </div>
  );
}