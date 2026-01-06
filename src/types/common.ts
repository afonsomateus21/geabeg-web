import type { ButtonHTMLAttributes, ReactNode } from "react";
import type { filters } from "../utils/constants";

export interface HeaderIconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  children: ReactNode;
}

export type FilterId = typeof filters[number]["id"];