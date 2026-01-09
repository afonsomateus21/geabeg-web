import type { ButtonHTMLAttributes, ReactNode } from "react";
import type { actionModalButtonOptions, filters, productPageFilters } from "../utils/constants";
import type { Scout } from "./scout";

export interface HeaderIconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  children: ReactNode;
}

export type FilterId = typeof filters[number]["id"];

export type ProductPageFilterId = typeof productPageFilters[number]["id"];

export interface GeneralModalProps {
  title?: string;
  openModal: boolean;
  onCloseModal: () => void;
}

export interface FormModalProps extends GeneralModalProps {
  children: ReactNode;
}

export const ScoutActionType = {
  PAYMENT: "PAYMENT",
  EXEMPTION: "EXEMPTION"
} as const;

export type ScoutActionType = typeof ScoutActionType[keyof typeof ScoutActionType];

export interface DataPickerContainerProps {
  children: ReactNode;
}

export type ActionModalView =
  | "HOME"
  | "PAYMENT"
  | "EXEMPTION"
  | "CONFIRMATION_MESSAGE";

export interface ActionModalProps extends GeneralModalProps {
  scout: Scout;
}

export interface HomeViewProps {
  title: string;
  onPayment: () => void;
  onExemption: () => void;
}

export interface PaymentViewProps {
  title: string;
  onConfirmation: () => void;
}

export interface ConfirmationViewProps {
  title: string;
}

export type ActionModalButtonOptionsId = typeof actionModalButtonOptions[number]["id"];