import type { StatusType } from "./product";

export interface ScoutsTableProps {
  scouts: Scout[] | null;
}

export interface ScoutInfoForTable {
  name: string;
  registration: string;
  age: number;
}

export const ScoutCategoryType = {
  LOBINHO: "lobinho",
  ESCOTEIRO: "escoteiro",
  SENIOR: "senior",
  PIONEIRO: "pioneiro"
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
  phoneNumber?: string;
  category?: ScoutCategoryType;
  cpf?: string;
  birthDate?: string;
  rg?: string;
  responsible1?: Responsible;
  responsible2?: Responsible;
  address?: Address;
  product_list?: ProductList[];
}

export interface ScoutFormInputs {
  observations: string;
  name: string;
  age: number;
  category: ScoutCategoryType;
  cpf: string;
  birthDate: string;
  rg: string;
  phoneNumber: string;
  responsible1: Responsible;
  responsible2: Responsible;
  address: Address;
}

export interface ScoutBasicEditFormInputs {
  name: string;
  registration: string;
  age: number;
}

export interface ScoutActionsMenuProps {
  onOpenPayment: () => void;
  onDeleteMember: () => void;
  onEditMember: () => void;
}

export interface Parent {
  parent_name: string;
  contact: string;
}

export interface ProductList {
  name: string;
  price: number;
  status: StatusType;
  product_id: string;
}

export interface Parent {
  parent_name: string;
  contact: string;
}

export interface StudentPayload {
  id?: number;
  student_id?: string;
  name: string;
  cpf?: string;
  rg?: string;
  bith_date?: string;
  age: number;
  ramo: string;
  phone_number?: string;
  adress?: string;
  cep: string;
  city: string;
  uf: string;
  complement?: string;
  reference?: string;
  parents: Parent[];
  product_list?: ProductList[];
  createdAt?: string;
  updatedAt?: string;
}

export interface ScoutBasicEditFormProps {
  scout: Scout;
}

export interface ScoutFormProps {
  scoutId?: string;
}