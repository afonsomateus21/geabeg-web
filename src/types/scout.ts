export interface ScoutsTableProps {
  scouts: Scout[];
}

export interface ScoutInfoForTable {
  name: string;
  registration: string;
  age: number;
}

export const ScoutCategoryType = {
  LOBINHO: "LOBINHO",
  ESCOTEIRO: "ESCOTEIRO",
  SENIOR: "SENIOR",
  PIONEIRO: "PIONEIRO"
} as const;

export type ScoutCategoryType = typeof ScoutCategoryType[keyof typeof ScoutCategoryType];

export type Address = {
  address: string;
  cep: string;
  uf: string;
  city: string;
  complement: string;
  landmark: string;
}

export type Responsible = {
  name: string;
  contact: string;
}

export interface Scout {
  id?: string;
  registration: string;
  name: string;
  age: number;
  category?: ScoutCategoryType;
  cpf?: string;
  birthDate?: string;
  rg?: string;
  responsible1?: Responsible;
  responsible2?: Responsible;
  address?: Address;
}
