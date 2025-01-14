import React, { createContext, FC, useState } from "react";
import { ICategory } from "../common/layouts/HomeLayout/components/Category/types";
import { categories as categoriesDB } from "../data/categories";
import { IProductCart } from "../home/index/types";

interface ICoffeeContext {
  categories: ICategory[];
  currentCategory: ICategory | null;
  setCurrentCategory: React.Dispatch<React.SetStateAction<ICategory>>;
  cart: IProductCart[];
  addProductInCart: (product: IProductCart) => void;
  deleteProductInCart: (id: number) => void;
  updateQuantityInCart: (product: IProductCart) => void;
}

const CoffeeContext = createContext<ICoffeeContext>({
  categories: [],
  currentCategory: null,
  setCurrentCategory: () => {},
  cart: [],
  addProductInCart: () => {},
  deleteProductInCart: () => {},
  updateQuantityInCart: () => {},
});

interface ICoffeeProvider {
  children: React.ReactNode;
}

export const CoffeeProvider: FC<ICoffeeProvider> = ({ children }) => {
  const [categories] = useState<ICategory[]>(categoriesDB);
  const [currentCategory, setCurrentCategory] = useState<ICategory>(
    categoriesDB[0]
  );

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
      }}
    >
      {children}
    </CoffeeContext.Provider>
  );
};

export default CoffeeContext;
