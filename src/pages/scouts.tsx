import { Button, Pagination } from "flowbite-react";
import { ScoutsTable } from "../components/ScoutsTable";
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import type { FilterId } from "../types/common";
import { filters } from "../utils/constants";
import { useNavigate } from "react-router";

export const Scouts = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFilter, setSelectedFilter] = useState<FilterId | null>(null);
  const navigate = useNavigate();

  const onPageChange = (page: number) => setCurrentPage(page);

  return (
    <div className="w-full h-full">
      <div className="w-full flex gap-6 p-5">
        <Button 
          size="sm"
          pill
          onClick={() => navigate("/escoteiros/registrar")}
        >
          <IoMdAdd className="mr-2 h-5 w-5" />
          Adicionar
        </Button>

        <div className="flex gap-2">
          {
            filters.map((filter) => (
              <Button
                key={filter.id}
                size="sm"
                outline={selectedFilter !== filter.id}
                onClick={() => setSelectedFilter(filter.id)}
              >
                {filter.label}
              </Button>
            ))
          }
        </div>
      </div>

      <ScoutsTable 
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

      <div className="flex overflow-x-auto sm:justify-center">
        <Pagination currentPage={currentPage} totalPages={10} onPageChange={onPageChange} />
      </div>
    </div>
  );
}