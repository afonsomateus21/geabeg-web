import { Datepicker, Label, TextInput } from "flowbite-react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { DatePickerContainer } from "./DatePickerContainer";
import { useState } from "react";

export const DonationForm = () => {
  const [open, setOpen] = useState(false);

  return (
    <form className="w-full h-full flex">
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
          />
        </div>

        <div className="w-full">
          <div className="mb-2 block">
            <Label htmlFor="price">Preço</Label>
          </div>
          <TextInput 
            id="price" 
            type="number" 
            rightIcon={IoMdCloseCircleOutline} 
            placeholder="Ex: 3.99" 
            required 
          />
        </div>

        <div className="w-full">
          <div className="mb-2 block">
            <Label htmlFor="description">Descrição</Label>
          </div>
          <TextInput 
            id="description" 
            type="text" 
            rightIcon={IoMdCloseCircleOutline} 
            placeholder="Ex: 2kg de arroz branco" 
            required 
          />
        </div>
      </div>

      <div className="flex-1 p-4">
        <DatePickerContainer
        >
          {!open ? (
            <TextInput
              placeholder="Escolha uma data"
              onFocus={() => setOpen(true)}
              readOnly
            />
          ) : (
            <Datepicker             
              inline
              language="pt-BR"
              labelTodayButton="Hoje"
              labelClearButton="Limpar"
            />
          )}
        </DatePickerContainer>
      </div>
    </form>
  );
}