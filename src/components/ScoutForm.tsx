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
              placeholder="Ex: José Silva" 
              required 
            />
          </div>
          <div className="flex-1">
            <div className="mb-2 block">
              <Label htmlFor="age">Idade</Label>
            </div>
            <TextInput id="age" type="number" placeholder="Ex: 12" required />
          </div>
          <div className="flex-2">
            <div className="mb-2 block">
              <Label htmlFor="category">Categoria</Label>
            </div>
            <TextInput id="category" type="text" placeholder="Ex: Escoteiro" required />
          </div>
        </div>

        <div className="flex w-full gap-2">
          <div className="flex-1">
            <div className="mb-2 block">
              <Label htmlFor="cpf">CPF</Label>
            </div>
            <TextInput 
              id="cpf" 
              type="text" 
              placeholder="Ex: 11111111111" 
              required 
            />
          </div>
          <div className="flex-1">
            <div className="mb-2 block">
              <Label htmlFor="birthdate">Data de Nascimento</Label>
            </div>
            <TextInput id="birthdate" type="text" placeholder="Ex: 01/01/2014" required />
          </div>
          <div className="flex-1">
            <div className="mb-2 block">
              <Label htmlFor="rg">RG</Label>
            </div>
            <TextInput id="rg" type="text" placeholder="Ex: 111111111" required />
          </div>
        </div>

        <div className="flex w-full gap-2">
          <div className="flex-1">
            <div className="mb-2 block">
              <Label htmlFor="address">Endereço</Label>
            </div>
            <TextInput 
              id="address" 
              type="text" 
              placeholder="Ex: Av. Washington Soares, 2000" 
              required 
            />
          </div>
        </div>

        <div className="flex w-full gap-2">
          <div className="flex-4">
            <div className="mb-2 block">
              <Label htmlFor="responsible1">Responsável 1</Label>
            </div>
            <TextInput 
              id="responsible1" 
              type="text" 
              placeholder="Ex: Paula Souza" 
              required 
            />
          </div>
          <div className="flex-1">
            <div className="mb-2 block">
              <Label htmlFor="contact1">Contato</Label>
            </div>
            <TextInput id="contact1" type="text" placeholder="Ex: 85999999999" required />
          </div>
        </div>

        <div className="flex w-full gap-2">
          <div className="flex-4">
            <div className="mb-2 block">
              <Label htmlFor="responsible1">Responsável 2</Label>
            </div>
            <TextInput 
              id="responsible1" 
              type="text" 
              placeholder="Ex: Rogério Souza" 
              required 
            />
          </div>
          <div className="flex-1">
            <div className="mb-2 block">
              <Label htmlFor="contact2">Contato</Label>
            </div>
            <TextInput id="contact2" type="text" placeholder="Ex: 85999999999" required />
          </div>
        </div>

        <div className="flex w-full gap-2">
          <div className="flex-1">
            <div className="mb-2 block">
              <Label htmlFor="cep">CEP</Label>
            </div>
            <TextInput 
              id="cep" 
              type="text" 
              placeholder="Ex: 60111-111" 
              required 
            />
          </div>
          <div className="flex-1">
            <div className="mb-2 block">
              <Label htmlFor="uf">UF</Label>
            </div>
            <TextInput id="ufc" type="text" placeholder="" required />
          </div>
          <div className="flex-1">
            <div className="mb-2 block">
              <Label htmlFor="city">Cidade</Label>
            </div>
            <TextInput id="city" type="text" placeholder="" required />
          </div>
        </div>

        <div className="flex w-full gap-2 items-end">
          <div className="flex-1">
            <div className="mb-2 block">
              <Label htmlFor="complement">Complemento</Label>
            </div>
            <TextInput 
              id="complement" 
              type="text" 
              placeholder="Ex: Apto 505" 
              required 
            />
          </div>
          <div className="flex-1">
            <div className="mb-2 block">
              <Label htmlFor="landmark">Ponto de Referência</Label>
            </div>
            <TextInput id="landmark" type="text" placeholder="Ex: Casa rosa" required />
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