import React, { createContext, FC, useEffect, useState } from "react";
import { IProductCart } from "../home/index/types";
import { ICategory } from "../home/services/getCategories";
import { useGetCategories } from "../home/hooks/useGetCategories";

interface ICoffeeContext {
  categories: ICategory[];
  currentCategory: ICategory | null;
  setCurrentCategory: React.Dispatch<React.SetStateAction<ICategory | null>>;
  cart: IProductCart[];
  addProductInCart: (product: IProductCart) => void;
  deleteProductInCart: (id: number) => void;
  updateQuantityInCart: (product: IProductCart) => void;
  loadingCategories: boolean;
}

const CoffeeContext = createContext<ICoffeeContext>({
  categories: [],
  currentCategory: null,
  setCurrentCategory: () => {},
  cart: [],
  addProductInCart: () => {},
  deleteProductInCart: () => {},
  updateQuantityInCart: () => {},
  loadingCategories: false,
});

interface ICoffeeProvider {
  children: React.ReactNode;
}

export const CoffeeProvider: FC<ICoffeeProvider> = ({ children }) => {
  const getCategories = useGetCategories();
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [currentCategory, setCurrentCategory] = useState<ICategory | null>(
    null
  );

  useEffect(() => {
    getCategories.handle().then((categories) => {
      if (categories) {
        setCategories(categories);
        setCurrentCategory(categories[0]);
      }
    });
  }, []);

  const [cart, setCart] = useState<IProductCart[]>([]);

  const addProductInCart = (product: IProductCart) => {
    setCart([...cart, product]);
  };

  const deleteProductInCart = (id: number) => {
    const updateCart = cart.filter((p) => p.id !== id);
    setCart(updateCart);
  };

  const updateQuantityInCart = (product: IProductCart) => {
    const updateCart = cart.map((p) => (p.id === product.id ? product : p));
    setCart(updateCart);
  };

  return (
    <CoffeeContext.Provider
      value={{
        categories,
        currentCategory,
        setCurrentCategory,
        cart,
        addProductInCart,
        deleteProductInCart,
        updateQuantityInCart,
        loadingCategories: getCategories.loading,
      }}
    >
      {children}
    </CoffeeContext.Provider>
  );
};

export default CoffeeContext;
