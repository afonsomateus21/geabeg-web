import { createContext } from "react";
import type { PayerPayload, ProductPayload } from "../../types/product";

interface ProductContentProps {
  loading: boolean;
  products: ProductPayload[] | null;
  createProduct: (payload: ProductPayload, payers: PayerPayload[]) => Promise<void>;
  createDonation: (payload: ProductPayload) => Promise<void>;
  fetchProducts: (type: string) => Promise<void>;
}

export const ProductContext = createContext<ProductContentProps | undefined>(undefined);