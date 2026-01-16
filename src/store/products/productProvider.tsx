import { useEffect, useState, type ReactNode } from "react";
import { api } from "../../api";
import { ProductContext } from "./productContext";
import type { PayerPayload, ProductPayload } from "../../types/product";

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<ProductPayload[]>([]);

  const fetchProducts = async (type: string) => {
    try {
      setLoading(true);
      const response = await api.get<ProductPayload[]>("/products", {
        params: {
          type
        }
      });

      const products = response.data;
      setProducts(products);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const createProduct = async (payload: ProductPayload, payers: PayerPayload[]) => {
    try {
      setLoading(true);
      const response = await api.post("/products", payload);
      await fetchProducts("product");
      const productId = response.data.product_id;
      console.log(productId);
      await api.patch(`/products/${productId}/payments/list`, 
        {  
          payers_list: payers
        }, 
      )
      
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const createDonation = async (payload: ProductPayload) => {
    try {
      setLoading(true);
      await api.post("/products", payload);
      await fetchProducts(payload.type);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts("product");
  }, []);

  return (
    <ProductContext.Provider
      value={{
        loading,
        products,
        createProduct,
        createDonation,
        fetchProducts
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
