import type { Scout } from "./scout";

export interface ProductCardProps {
  product: ProductPayload;
}

export interface DonationCardProps {
  product: ProductPayload;
}

export interface ProductFormProps {
  scouts: Scout[] | null;
}

export interface ProductFormInputs {
  name: string;
  price: number;
  description: string;
  initialDate: Date;
  endDate: Date;
  scoutRegistration: string[];
}

export type ProductType = "product" | "donation";

export interface ProductPayload {
  id?: number;
  product_id?: string;

  name: string;
  description?: string;

  price: number;

  start_date?: string; 
  end_date?: string; 

  type: string;

  giver_name?: string;

  payers_list?: PayerPayload[] | null;

  createdAt?: string;
  updatedAt?: string;
}

export const PayerStatus = {
  PENDING: "pending",
  PAID: "paid",
  NOT_PAID: "not_paid",
  ISENTO: "isento",
} as const;

export type StatusType =
  typeof PayerStatus[keyof typeof PayerStatus];

export interface PayerPayload {
  student_id: string;
  name: string;
  status: StatusType;
}