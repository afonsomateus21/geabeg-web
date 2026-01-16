import type { DonationFormInputs } from "../types/donation";
import { PayerStatus, type ProductFormInputs } from "../types/product";
import { ScoutCategoryType, type Scout, type ScoutFormInputs, type StudentPayload } from "../types/scout";

export const convertToReal = (price: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);
}

export const maskCEP = (value: string) => {
  return value
    .replace(/\D/g, "")
    .replace(/^(\d{5})(\d)/, "$1-$2")
    .slice(0, 9);
}

export const maskPhone = (value: string) => {
  return value
    .replace(/\D/g, "")
    .replace(/^(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d)/, "$1-$2")
    .slice(0, 15);
}

export const maskCPF = (value: string) => {
  return value
    .replace(/\D/g, "")
    .replace(/^(\d{3})(\d)/, "$1.$2")
    .replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2")
    .slice(0, 14);
}

export const maskDate = (value: string) => {
  return value
    .replace(/\D/g, "")
    .replace(/^(\d{2})(\d)/, "$1/$2")
    .replace(/^(\d{2})\/(\d{2})(\d)/, "$1/$2/$3")
    .slice(0, 10);
}

export const unmask = (value?: string) =>
  value ? value.replace(/\D/g, "") : "";


function mapRamoToCategory(
  ramo: string
): ScoutCategoryType | undefined {
  const upper = ramo.toUpperCase();

  if (upper in ScoutCategoryType) {
    return ScoutCategoryType[upper as keyof typeof ScoutCategoryType];
  }

  return undefined;
}

export function studentPayloadToScout(
  student: StudentPayload
): Scout {
  return {
    id: student.id?.toString(),
    registration: student.student_id ?? '',
    name: student.name,
    age: student.age,
    cpf: student.cpf,
    rg: student.rg,
    birthDate: student.birthDate,
    category: mapRamoToCategory(student.ramo),
    responsible1: student.responsible1,
    responsible2: student.responsible2,
    address: {
      address: student.address?.street ?? '',
      cep: student.address?.cep ?? '',
      city: student.address?.city ?? '',
      uf: student.address?.uf ?? '',
      complement: student.address?.complement ?? '',
      landmark: student.address?.reference ?? ''
    },
    product_list: student.product_list
  };
}

export function scoutToStudentPayload(
  scout: Scout
): StudentPayload {
  return {
    id: scout.id ? Number(scout.id) : undefined,
    student_id: scout.registration,
    name: scout.name,
    age: scout.age,
    cpf: scout.cpf,
    rg: scout.rg,
    birthDate: scout.birthDate,
    ramo: scout.category ?? "",
    responsible1: scout.responsible1,
    responsible2: scout.responsible2,
    address: {
      street: scout.address?.address ?? '',
      cep: scout.address?.cep ?? '',
      city: scout.address?.city ?? '',
      uf: scout.address?.uf ?? '',
      complement: scout.address?.complement ?? '',
      reference: scout.address?.landmark ?? ''
    }
  };
}

export function mountStudentPayload(
  scoutForm: ScoutFormInputs
) {
  return {
    name: scoutForm.name,
    cpf: unmask(scoutForm.cpf),
    bith_date: scoutForm.birthDate,
    age: scoutForm.age,
    rg: scoutForm.rg,
    phone_number: unmask(scoutForm.phoneNumber),
    adress: scoutForm.address.address,
    ramo: scoutForm.category,
    parents: [
      {
        parent_name: scoutForm.responsible1.name,
        contact: unmask(scoutForm.responsible1.contact)
      },
      {
        parent_name: scoutForm.responsible2.name,
        contact: unmask(scoutForm.responsible2.contact)
      },
    ],
    date: new Date().toISOString().split("T")[0],
    cep: unmask(scoutForm.address.cep),
    uf: scoutForm.address.uf,
    city: scoutForm.address.city,
    complement: scoutForm.address.complement,
    reference: scoutForm.address.landmark
  }
}

export function mountProductPayload(productForm: ProductFormInputs) {
  return {
    name: productForm.name,
    price: productForm.price,
    description: productForm.description,
    start_date: productForm.initialDate.toISOString().split("T")[0],
    end_date: productForm.endDate.toISOString().split("T")[0],
    type: "product",
    giver_name: "Teste"
  }
}

export function mountDonationPayload(donationForm: DonationFormInputs) {
  return {
    name: donationForm.name,
    price: donationForm.price,
    description: 'Teste',
    giver_name: donationForm.donatorName,
    start_date: donationForm.donationDate.toISOString().split("T")[0],
    end_date: new Date().toISOString().split("T")[0],
    type: "donation",
  }
}

export const mountPayerPayload = (scouts: Scout[]) => {
  return scouts.map(scout => ({
    student_id: scout.registration,
    name: scout.name,
    status: PayerStatus.PENDING
  }));
}


