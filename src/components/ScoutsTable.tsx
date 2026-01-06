
import { Button, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { scoutsTableTheme } from "../theme";
import { HeaderIconButton } from "./HeaderIconButton";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";
import { HiPencil, HiTrash } from "react-icons/hi";

export function ScoutsTable() {
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
          <TableRow className="bg-white">
            <TableCell className="whitespace-nowrap font-medium text-gray-900 ">
              Davi Lisboa
            </TableCell>
            <TableCell>11111</TableCell>
            <TableCell>21</TableCell>
            <TableCell className="flex gap-3">
              <Button className="h-8 w-8 p-0 rounded-full flex items-center justify-center">
                <HiPencil className="h-5 w-5" />
              </Button>
              <Button className="h-8 w-8 p-0 rounded-full flex items-center justify-center">
                <HiTrash className="h-5 w-5" />
              </Button>
            </TableCell>
          </TableRow>
          <TableRow className="bg-white">
            <TableCell className="whitespace-nowrap font-medium text-gray-900 ">
              John Doe
            </TableCell>
            <TableCell>22222</TableCell>
            <TableCell>25</TableCell>
            <TableCell className="flex gap-3">
              <Button className="h-8 w-8 p-0 rounded-full flex items-center justify-center">
                <HiPencil className="h-5 w-5" />
              </Button>
              <Button className="h-8 w-8 p-0 rounded-full flex items-center justify-center">
                <HiTrash className="h-5 w-5" />
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
