import { FC } from "react";
import { ICategory } from "./types";
import { useCoffeeContext } from "../../../../../context/hooks/useCoffeeContext";

interface ICategoryProps {
  category: ICategory;
}

const Category: FC<ICategoryProps> = (props) => {
  const { currentCategory, setCurrentCategory } = useCoffeeContext();

  const onClickCategory = () => {
    setCurrentCategory(props.category);
  };

  return (
    <div
      onClick={onClickCategory}
      className={`${
        currentCategory?.id === props.category.id ? "bg-amber-400" : "bg-white"
      } flex items-center gap-4 border w-full p-3 hover:bg-amber-400 cursor-pointer`}
    >
      <img
        src={`img/icono_${props.category.icon}.svg`}
        alt="Image icon"
        className="w-12"
      />
      <p className="text-lg font-bold truncate">{props.category.name}</p>
    </div>
  );
};

export default Category;
