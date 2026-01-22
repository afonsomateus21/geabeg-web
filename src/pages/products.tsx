import { Button, Spinner } from "flowbite-react";
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
import { useProducts } from "../hooks/useProducts";
import { useStudents } from "../hooks/useStudents";

export const Products = () => {
  const [selectedFilter, setSelectedFilter] = useState<ProductPageFilterId>("product");
  const [openModal, setOpenModal] = useState(false);
  const { loading, products, fetchProducts } = useProducts();
  const { students } = useStudents();

  const onCloseModal = () => setOpenModal(false);

  const handleChooseFilter = (id: "product" | "donation") => {
    setSelectedFilter(id);
    fetchProducts(id);
  }

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
                    hover:bg-secondary/70
                    border-bg-secondary
                    ${selectedFilter === filter.id && 'bg-secondary'}  
                  `}
                  outline={selectedFilter !== filter.id}
                  onClick={() => handleChooseFilter(filter.id)}
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
          className="bg-secondary hover:bg-secondary/70"
        >
          <IoMdAdd className="mr-2 h-5 w-5" />
          Adicionar
        </Button>
      </div>
      {
        loading 
        ?
          <div className="w-full h-full flex items-start justify-center">
            <Spinner aria-label="Large spinner example" size="xl" />
          </div>
        :
        (
          selectedFilter === "product" 
          ? (
            products?.length === 0 
            ? 
            <div className="w-full flex justify-center">
              Não há produtos para mostrar
            </div>
            : 
            products?.map((product) => (
              <div className="mb-2">
                <ProductCard 
                  key={product.id}
                  product={product}
                />
              </div>
            ))
          )          
          : (
            products?.length === 0
            ? 
            <div className="w-full flex justify-center">
              Não há doações para mostrar
            </div>
            : 
            products?.map((product) => (
              <div className="mb-2">
                <DonationCard 
                  key={product.id}
                  product={product}
                />
              </div>
            ))
          )
        )
      }

      <FormModal
        openModal={openModal}
        onCloseModal={onCloseModal}
        title={selectedFilter === "product" ? "Novo produto" : "Nova doação"}
      >
        {
          selectedFilter === "product" 
          ? <ProductForm 
              scouts={students}
            />
          : <DonationForm />
        }
      </FormModal>  
    </div>
  );
}