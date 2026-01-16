
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { scoutsTableTheme } from "../theme";
import { HeaderIconButton } from "./HeaderIconButton";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";
import type { Scout, ScoutsTableProps } from "../types/scout";
import { BsThreeDotsVertical } from "react-icons/bs";
import { ActionModal } from "./ActionModal";
import { useRef, useState } from "react";
import { ScoutActionsMenu } from "./ScoutActionsMenu";
import { useClickOutside } from "../hooks/useClickOutside";
import { paymentCategories } from "../utils/constants";

export function ScoutsTable({ scouts }: ScoutsTableProps) {
  const [openModal, setOpenModal] = useState(false);
  const [selectedScout, setSelectedScout] = useState<Scout | null>(null);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);
  useClickOutside(menuRef, () => setOpenMenu(null));

  const toggleMenu = (registration: string) => {
    setOpenMenu((prev) =>
      prev === registration ? null : registration
    );
  };

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
            <HeaderIconButton title="Pagamento">
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
                  {scout.product_list?.some(p => p.status !== "paid")
                    ? paymentCategories.find(c => c.value === "pending")?.label
                    : paymentCategories.find(c => c.value === "paid")?.label
                  }
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
                        onOpenPayment={() => {
                          handleOpenModal(scout);
                          setOpenMenu(null);
                        }}
                        onEditMember={() => console.log("Editar", scout)}
                        onDeleteMember={() => console.log("Excluir", scout)}
                      />
                    </div>
                  )}
                </TableCell>
              </TableRow>
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
