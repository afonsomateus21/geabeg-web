import { Button, Label, Select, Spinner, Textarea, TextInput } from "flowbite-react";
import { useForm, useWatch, type SubmitHandler } from "react-hook-form";
import { HiCheck } from "react-icons/hi";
import type { ScoutFormInputs } from "../../types/scout";
import { scoutCategories, ufs } from "../../utils/constants";
import { useEffect } from "react";
import { viaCepAPI } from "../../services/api";
import { maskCEP, maskCPF, maskDate, maskPhone, mountStudentPayload } from "../../utils/helpers";
import { InputImage } from "../inputs/InputImage";
import { useStudents } from "../../hooks/useStudents";
import { toast } from "react-toastify";

export const ScoutForm = () => {
  const {
    register,
    control,
    setValue,
    handleSubmit,
  } = useForm<ScoutFormInputs>();

  const cep = useWatch({
    control,
    name: "address.cep",
  });

  const { loading, createStudent } = useStudents();
 
  useEffect(() => {
    if (!cep) return;

    const cleanCEP = cep.replace(/\D/g, "");

    if (cleanCEP.length !== 8) return;

    async function searchAddressByCep() {
      try {
        const response = await viaCepAPI.get(`${cleanCEP}/json`);

        const data = response.data;

        setValue("address.city", data.localidade);
        setValue("address.uf", data.uf);
        setValue("address.address", data.logradouro);
      } catch (err) {
        console.error("Erro ao buscar CEP", err);
      }
    }

  searchAddressByCep();
}, [cep, setValue]);


  const onSubmit: SubmitHandler<ScoutFormInputs> = async (data) => {
    console.log("entrou")
    console.log(data)
    try {
      const payload = mountStudentPayload(data);

      await createStudent(payload);

      return toast.success("Estudante criado com sucesso!");
    } catch (error) {
      console.log(error);
      return toast.error("Erro ao criar estudante!");
    }
  }

  return (
    <form 
      className="flex w-full h-full py-5 pr-5"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex-1 flex flex-col items-center h-full gap-5  ">
        <InputImage />
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
            {...register("observations")}
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
              {...register("name")}
            />
          </div>
          <div className="flex-1">
            <div className="mb-2 block">
              <Label htmlFor="age">Idade</Label>
            </div>
            <TextInput 
              id="age" 
              type="number" 
              placeholder="Ex: 12" 
              required 
              {...register("age")}
            />
          </div>
          <div className="flex-2">
            <div className="mb-2 block">
              <Label htmlFor="category">Categoria</Label>
            </div>
            <Select 
              id="scout-types"
              required
              defaultValue=""
              {...register("category")}
            >
              <option value="" disabled>
                Selecione uma categoria
              </option>
              {
                scoutCategories.map((category, index) => (
                  <option 
                    key={`${category.label}-${index}`}
                    value={category.value}
                  >
                    {category.label}
                  </option>
                ))
              }
            </Select>
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
              placeholder="Ex: 111.111.111-11" 
              required 
              {...register("cpf", {
                onChange: (e) => {
                  e.target.value = maskCPF(e.target.value);
                },
              })}
            />
          </div>
          <div className="flex-1">
            <div className="mb-2 block">
              <Label htmlFor="birthdate">Data de Nascimento</Label>
            </div>
            <TextInput
              type="text"
              placeholder="DD/MM/AAAA"
              {...register("birthDate")}
              onChange={(e) => {
                e.target.value = maskDate(e.target.value);
              }}
            />
          </div>
          <div className="flex-1">
            <div className="mb-2 block">
              <Label htmlFor="rg">RG</Label>
            </div>
            <TextInput 
              id="rg" 
              type="text" 
              placeholder="Ex: 111111111" 
              required
              {...register("rg")}
            />
          </div>
        </div>

        <div>
          <div className="flex-1">
            <div className="mb-2 block">
              <Label htmlFor="contact1">Telefone</Label>
            </div>
            <TextInput 
              id="contact1" 
              type="text" 
              placeholder="Ex: (85) 99999-9999" 
              required
              {...register("phoneNumber", {
                onChange: (e) => {
                  e.target.value = maskPhone(e.target.value);
                },
              })}
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
              {...register("responsible1.name")}
            />
          </div>
          <div className="flex-1">
            <div className="mb-2 block">
              <Label htmlFor="contact1">Contato</Label>
            </div>
            <TextInput 
              id="contact1" 
              type="text" 
              placeholder="Ex: (85) 99999-9999" 
              required
              {...register("responsible1.contact", {
                onChange: (e) => {
                  e.target.value = maskPhone(e.target.value);
                },
              })}
            />
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
              {...register("responsible2.name")}
            />
          </div>
          <div className="flex-1">
            <div className="mb-2 block">
              <Label htmlFor="contact2">Contato</Label>
            </div>
            <TextInput 
              id="contact2" 
              type="text" 
              placeholder="Ex: (85) 99999-9999" 
              required 
              {...register("responsible2.contact", {
                onChange: (e) => {
                  e.target.value = maskPhone(e.target.value);
                },
              })}
            />
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
              {...register("address.cep", {
                onChange: (e) => {
                  e.target.value = maskCEP(e.target.value);
                },
              })}
            />
          </div>
          <div className="flex-1">
            <div className="mb-2 block">
              <Label htmlFor="uf">UF</Label>
            </div>
            <Select 
              id="uf"
              required
              defaultValue=""
              {...register("address.uf")}
            >
              <option value="" disabled>
                Selecione uma UF
              </option>
              {
                ufs.map((uf, index) => (
                  <option 
                    key={index}
                    value={uf}
                  >
                    {uf}
                  </option>
                ))
              }
            </Select>
          </div>
          <div className="flex-1">
            <div className="mb-2 block">
              <Label htmlFor="city">Cidade</Label>
            </div>
            <TextInput 
              id="city" 
              type="text" 
              placeholder="" 
              required 
              {...register("address.city")}
            />
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
              {...register("address.address")}
            />
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
              {...register("address.complement")}
            />
          </div>
          <div className="flex-1">
            <div className="mb-2 block">
              <Label htmlFor="landmark">Ponto de Referência</Label>
            </div>
            <TextInput 
              id="landmark" 
              type="text" 
              placeholder="Ex: Casa rosa" 
              required
              {...register("address.landmark")} 
            />
          </div>
        </div>

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