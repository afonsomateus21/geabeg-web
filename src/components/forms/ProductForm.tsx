import { Button, Checkbox, Label, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow, TextInput } from "flowbite-react";
import { DatePickerContainer } from "../DatePickerContainer";
import "react-datepicker/dist/react-datepicker.css";
import { DatePickerInput } from "../inputs/DatePickerInput";
import { scoutsTableTheme } from "../../theme";
import { HeaderIconButton } from "../HeaderIconButton";
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md";
import type { ProductFormInputs, ProductFormProps } from "../../types/product";
import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import { HiCheck } from "react-icons/hi";

export const ProductForm = ({ scouts }: ProductFormProps) => {
  const {
    register,
    handleSubmit,
    control,
  } = useForm<ProductFormInputs>()

  const onSubmit: SubmitHandler<ProductFormInputs> = (data) => console.log(data)

  return (
    <form 
      className="w-full h-full flex flex-col"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="w-full flex">
        <div className="flex-3 flex flex-col p-4">
          <div className="w-full">
            <div className="mb-2 block">
              <Label htmlFor="name">Nome</Label>
            </div>
            <TextInput 
              id="name" 
              type="text" 
              placeholder="Ex: Passeio Beach Park" 
              required 
              {...register("name")}
            />
          </div>

          <div className="w-full">
            <div className="mb-2 block">
              <Label htmlFor="price">Preço</Label>
            </div>
            <TextInput 
              id="price" 
              type="number" 
              placeholder="Ex: 299.99" 
              required 
              {...register("price")}
            />
          </div>

          <div className="w-full">
            <div className="mb-2 block">
              <Label htmlFor="description">Descrição</Label>
            </div>
            <TextInput 
              id="description" 
              type="text" 
              placeholder="Ex: Diária no Beach Park" 
              required 
              {...register("description")}
            />
          </div>
        </div>

        <div className="flex-1 p-4">
          <DatePickerContainer
          >
            <Controller
              name="initialDate"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <DatePickerInput
                  title="Data inicial"
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
            
            <Controller
              name="endDate"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <DatePickerInput
                  title="Data inicial"
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
          </DatePickerContainer>
        </div>
      </div>

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
                    <Checkbox 
                      value={scout.registration}
                      {...register("scoutRegistration")}
                    />
                  </TableCell>
                </TableRow>
              </>
            ))
          }
        </TableBody>
      </Table>

      <div className="w-full flex justify-center mt-4">
        <Button 
          size="md"
          pill
          type="submit"
        >
          <HiCheck className="mr-2 h-5 w-5" />
          Salvar
        </Button>
      </div>
    </form>
  );
}