
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { scoutsTableTheme } from "../theme";
import { HeaderIconButton } from "./HeaderIconButton";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";
import type { Scout, ScoutsTableProps } from "../types/scout";
import { BsThreeDotsVertical } from "react-icons/bs";
import { ActionModal } from "./ActionModal";
import { useState } from "react";

export function ScoutsTable({ scouts }: ScoutsTableProps) {
  const [openModal, setOpenModal] = useState(false);
  const [selectedScout, setSelectedScout] = useState<Scout | null>(null);

  const handleOpenModal = (scout: Scout) => {
    setOpenModal(true);
    setSelectedScout(scout);
  }

  const onCloseModal = () => setOpenModal(false);

  return (
    <div className="overflow-x-auto">
      <Table 
        striped 
        hoverable
        theme={scoutsTableTheme}
      >
        <TableHead className="!w-full">
          <TableHeadCell>
            <HeaderIconButton title="Nome">
              <MdOutlineArrowDropDown className="h-5 w-5" />
            </HeaderIconButton>
          </TableHeadCell>
          <TableHeadCell>
            <HeaderIconButton title="Matrícula">
              <MdOutlineArrowDropUp className="h-5 w-5" />
              <MdOutlineArrowDropDown className="h-5 w-5" />
            </HeaderIconButton>
          </TableHeadCell>
          <TableHeadCell>
            <HeaderIconButton title="Idade">
              <MdOutlineArrowDropUp className="h-5 w-5" />
              <MdOutlineArrowDropDown className="h-5 w-5" />
            </HeaderIconButton>
          </TableHeadCell>
          <TableHeadCell>
            <span className="sr-only">Edit</span>
          </TableHeadCell>
        </TableHead>
        <TableBody className="divide-y">
          {
            scouts.map((scout) => (
              <>
                <TableRow 
                  key={scout.registration}
                  className="bg-white"
                >
                  <TableCell className="whitespace-nowrap font-medium text-gray-900">
                    {scout.name}
                  </TableCell>
                  <TableCell className="text-gray-900">{scout.registration}</TableCell>
                  <TableCell className="text-gray-900">{scout.age} anos</TableCell>
                  <TableCell>
                    <button className="cursor-pointer">
                      <BsThreeDotsVertical 
                        onClick={() => handleOpenModal(scout)}
                        className="h-5 w-5" 
                        color="black"
                      />
                    </button>
                  </TableCell>
                </TableRow>
              </>
            ))
          }
        </TableBody>
      </Table>
      {
        selectedScout && (
          <ActionModal 
            openModal={openModal}
            onCloseModal={onCloseModal}
            scout={selectedScout!}
          />
        )
      }
    </div>
  );
}
