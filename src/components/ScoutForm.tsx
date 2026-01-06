import { Button, Label, Textarea, TextInput } from "flowbite-react";
import { HiCheck } from "react-icons/hi";

export const ScoutForm = () => {
  return (
    <form className="flex w-full h-full py-5 pr-5">
      <div className="flex-1 flex flex-col items-center h-full gap-5  ">
        <div className="h-[237px] w-[223px] bg-yellow-300 rounded-xl">
        </div>
        <div className="w-[223px] flex-1 min-h-0 flex flex-col">
          <div className="mb-2 block">
            <Label 
              htmlFor="comment"
              className="font-bold text-xl"
            >
              Tipo sanguíneo / Alergias / Observações:
            </Label>
          </div>
          <Textarea 
            className="max-w-md flex-1 min-h-0 flex flex-col"
            id="comment" 
            placeholder="Escreva..." 
          />
        </div>
      </div>

      <div className="flex-5 flex flex-col items-center justify-evenly gap-3 h-full border border-black rounded-2xl p-4">
        <div className="flex w-full gap-2">
          <div className="flex-5">
            <div className="mb-2 block">
              <Label htmlFor="name">Nome</Label>
            </div>
            <TextInput 
              id="name" 
              type="text" 
              placeholder="Nome..." 
              required 
            />
          </div>
          <div className="flex-1">
            <div className="mb-2 block">
              <Label htmlFor="email1">Idade</Label>
            </div>
            <TextInput id="email1" type="number" placeholder="" required />
          </div>
          <div className="flex-2">
            <div className="mb-2 block">
              <Label htmlFor="email1">Categoria</Label>
            </div>
            <TextInput id="email1" type="email" placeholder="name@flowbite.com" required />
          </div>
        </div>

        <div className="flex w-full gap-2">
          <div className="flex-1">
            <div className="mb-2 block">
              <Label htmlFor="name">CPF</Label>
            </div>
            <TextInput 
              id="name" 
              type="text" 
              placeholder="Nome..." 
              required 
            />
          </div>
          <div className="flex-1">
            <div className="mb-2 block">
              <Label htmlFor="email1">Data de Nascimento</Label>
            </div>
            <TextInput id="email1" type="number" placeholder="" required />
          </div>
          <div className="flex-1">
            <div className="mb-2 block">
              <Label htmlFor="email1">RG</Label>
            </div>
            <TextInput id="email1" type="email" placeholder="name@flowbite.com" required />
          </div>
        </div>

        <div className="flex w-full gap-2">
          <div className="flex-1">
            <div className="mb-2 block">
              <Label htmlFor="name">Endereço</Label>
            </div>
            <TextInput 
              id="name" 
              type="text" 
              placeholder="Nome..." 
              required 
            />
          </div>
        </div>

        <div className="flex w-full gap-2">
          <div className="flex-4">
            <div className="mb-2 block">
              <Label htmlFor="name">Responsável 1</Label>
            </div>
            <TextInput 
              id="name" 
              type="text" 
              placeholder="Nome..." 
              required 
            />
          </div>
          <div className="flex-1">
            <div className="mb-2 block">
              <Label htmlFor="email1">Contato</Label>
            </div>
            <TextInput id="email1" type="number" placeholder="" required />
          </div>
        </div>

        <div className="flex w-full gap-2">
          <div className="flex-4">
            <div className="mb-2 block">
              <Label htmlFor="name">Responsável 2</Label>
            </div>
            <TextInput 
              id="name" 
              type="text" 
              placeholder="Nome..." 
              required 
            />
          </div>
          <div className="flex-1">
            <div className="mb-2 block">
              <Label htmlFor="email1">Contato</Label>
            </div>
            <TextInput id="email1" type="number" placeholder="" required />
          </div>
        </div>

        <div className="flex w-full gap-2">
          <div className="flex-1">
            <div className="mb-2 block">
              <Label htmlFor="name">CEP</Label>
            </div>
            <TextInput 
              id="name" 
              type="text" 
              placeholder="Nome..." 
              required 
            />
          </div>
          <div className="flex-1">
            <div className="mb-2 block">
              <Label htmlFor="email1">UF</Label>
            </div>
            <TextInput id="email1" type="number" placeholder="" required />
          </div>
          <div className="flex-1">
            <div className="mb-2 block">
              <Label htmlFor="email1">Cidade</Label>
            </div>
            <TextInput id="email1" type="email" placeholder="name@flowbite.com" required />
          </div>
        </div>

        <div className="flex w-full gap-2 items-end">
          <div className="flex-1">
            <div className="mb-2 block">
              <Label htmlFor="name">Complemento</Label>
            </div>
            <TextInput 
              id="name" 
              type="text" 
              placeholder="Nome..." 
              required 
            />
          </div>
          <div className="flex-1">
            <div className="mb-2 block">
              <Label htmlFor="email1">Ponto de Referência</Label>
            </div>
            <TextInput id="email1" type="number" placeholder="" required />
          </div>
        </div>

        <Button 
            size="md"
            pill
          >
            <HiCheck className="mr-2 h-5 w-5" />
            Salvar
          </Button>
      </div>
    </form>
  );
}