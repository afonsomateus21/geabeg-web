import { Button, Label, Spinner, TextInput } from "flowbite-react";
import { DatePickerContainer } from "../DatePickerContainer";
import { DatePickerInput } from "../inputs/DatePickerInput";
import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import type { DonationFormInputs } from "../../types/donation";
import { HiCheck } from "react-icons/hi";
import { mountDonationPayload } from "../../utils/helpers";
import { useProducts } from "../../hooks/useProducts";
import { toast } from "react-toastify";

export const DonationForm = () => {
  const {
    register,
    handleSubmit,
    control,
  } = useForm<DonationFormInputs>();
  const { loading, createDonation } = useProducts();

  const onSubmit: SubmitHandler<DonationFormInputs> = async (data) => {
      try {
        const productPayload = mountDonationPayload(data);
  
        await createDonation(productPayload);
  
        return toast.success("Doação criada com sucesso!")
      } catch (error) {
        console.log(error);
      }
    }

  return (
    <form 
      className="w-full h-full flex flex-col"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="w-full h-full flex">
        <div className="flex-2 flex flex-col p-4">
          <div className="w-full">
            <div className="mb-2 block">
              <Label htmlFor="name">Nome</Label>
            </div>
            <TextInput 
              id="name" 
              type="text" 
              placeholder="Ex: Arroz branco" 
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
              placeholder="Ex: 3.99" 
              required 
              {...register("price")}
            />
          </div>

          <div className="w-full">
            <div className="mb-2 block">
              <Label htmlFor="description">Doador</Label>
            </div>
            <TextInput 
              id="description" 
              type="text" 
              placeholder="Ex: José Pereira" 
              required 
              {...register("donatorName")}
            />
          </div>
        </div>

        <div className="flex-1 p-4">
          <DatePickerContainer
          >
            <Controller
              name="donationDate"
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
      <div className="w-full flex justify-center mt-4">
        <Button 
          size="md"
          pill
          type="submit"
        >
          {
            loading ?
            <>
              <Spinner aria-label="Alternate spinner button example" size="md" />
              <span className="pl-3">Salvando...</span>
            </>
            :
            <>
              <HiCheck className="mr-2 h-5 w-5" />
              Salvar
            </>
          }
        </Button>
      </div>
    </form>
  );
}