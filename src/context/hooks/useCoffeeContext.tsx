import { useContext } from "react";
import CoffeeContext from "../CoffeeProvider";

export const useCoffeeContext = () => {
  const context = useContext(CoffeeContext);
  return context;
};
