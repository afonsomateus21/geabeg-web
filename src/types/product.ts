import type { Scout } from "./scout";

export interface ProductCardProps {
  title: string;
  price: number;
  imageUrl?: string;
}

export interface ProductFormProps {
  scouts: Scout[];
}

export interface ProductFormInputs {
  name: string;
  price: number;
  description: string;
  initialDate: Date;
  endDate: Date;
  scoutRegistration: string[];
}