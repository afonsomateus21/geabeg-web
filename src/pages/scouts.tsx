import { Button, Spinner } from "flowbite-react";
import { ScoutsTable } from "../components/ScoutsTable";
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import type { FilterId } from "../types/common";
import { filters } from "../utils/constants";
import { useNavigate } from "react-router";
import { useStudents } from "../hooks/useStudents";

export const Scouts = () => {
  const [selectedFilter, setSelectedFilter] = useState<FilterId | null>(null);
  const navigate = useNavigate();
  const { students, loading } = useStudents();

  return (
    <div className="w-full h-full">
      <div className="w-full flex gap-6 p-5">
        <Button 
          size="sm"
          pill
          onClick={() => navigate("/membros/registrar")}
          className="bg-secondary hover:bg-secondary/70"
        >
          <IoMdAdd className="mr-2 h-5 w-5" />
          Adicionar
        </Button>

        <div className="flex gap-2">
          {
            filters.map((filter) => {
              const isSelected = selectedFilter === filter.id;

              return (
                <Button
                  key={filter.id}
                  size="sm"
                  outline={!isSelected}
                  onClick={() => setSelectedFilter(filter.id)}
                  className={`
                    border-secondary text-secondary
                    ${isSelected ? "bg-filter hover:bg-filter" : "bg-primary hover:bg-filter"}
                  `}
                >
                  {filter.label}
                </Button>
              );
            })
          }
        </div>
      </div>

      {
        loading ? 
          <div className="w-full h-full flex items-start justify-center">
            <Spinner aria-label="Large spinner example" size="xl" />
          </div>
        : 
        (
          students?.length === 0 ?
          <div className="w-full h-full flex items-start justify-center">
            <span>Não há dados</span>
          </div>
          :
          <ScoutsTable 
            scouts={students}
          /> 
        )         
      }
    </div>
  );
}