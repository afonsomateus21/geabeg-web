
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { scoutsTableTheme } from "../theme";
import { HeaderIconButton } from "./HeaderIconButton";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";
import type { ScoutsTableProps } from "../types/scout";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useRef, useState } from "react";
import { ScoutActionsMenu } from "./ScoutActionsMenu";
import { useClickOutside } from "../hooks/useClickOutside";
import { useNavigate } from "react-router";
import { useStudents } from "../hooks/useStudents";

export function ScoutsTable({ scouts }: ScoutsTableProps) {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  useClickOutside(menuRef, () => setOpenMenu(null));
  const navigate = useNavigate();
  const {removeStudent} = useStudents();

  const toggleMenu = (registration: string) => {
    setOpenMenu((prev) =>
      prev === registration ? null : registration
    );
  };

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
            <HeaderIconButton title="Categoria">
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
            scouts?.map((scout) => (
              <TableRow 
                key={scout.registration}
                className="bg-white"
              >
                <TableCell className="whitespace-nowrap font-medium text-gray-900">
                  {scout.name}
                </TableCell>
                <TableCell className="text-gray-900">{scout.registration}</TableCell>
                <TableCell className="text-gray-900">
                  {scout.category}
                </TableCell>
                <TableCell className="relative">
                  <button className="cursor-pointer">
                    <BsThreeDotsVertical 
                      onClick={() => toggleMenu(scout.registration)}
                      className="h-5 w-5" 
                      color="black"
                    />
                  </button>

                  {openMenu === scout.registration && (
                    <div ref={menuRef}>
                      <ScoutActionsMenu 
                        onEditMember={() => {
                          navigate(`/membros/editar/${scout.registration}`)
                        }}
                        onDeleteMember={() => removeStudent(scout.registration!)}
                      />
                    </div>
                  )}
                </TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </div>
  );
}
