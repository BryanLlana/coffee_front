import React, { createContext, FC, useState } from "react";
import { ICategory } from "../common/layouts/HomeLayout/components/Category/types";
import { categories as categoriesDB } from "../data/categories";

interface ICoffeeContext {
  categories: ICategory[];
  currentCategory: ICategory | null;
  setCurrentCategory: React.Dispatch<React.SetStateAction<ICategory>>;
}

const CoffeeContext = createContext<ICoffeeContext>({
  categories: [],
  currentCategory: null,
  setCurrentCategory: () => {},
});

interface ICoffeeProvider {
  children: React.ReactNode;
}

export const CoffeeProvider: FC<ICoffeeProvider> = ({ children }) => {
  const [categories] = useState<ICategory[]>(categoriesDB);
  const [currentCategory, setCurrentCategory] = useState<ICategory>(
    categoriesDB[0]
  );

  return (
    <CoffeeContext.Provider
      value={{ categories, currentCategory, setCurrentCategory }}
    >
      {children}
    </CoffeeContext.Provider>
  );
};

export default CoffeeContext;
