import { useContext } from "react";
import { ProductContext } from "../store/products/productContext";

export const useProducts = () => {
  const context = useContext(ProductContext);

  if (!context) {
    throw new Error("useProducts must be used inside a ProductProvider");
  }

  return context;
};