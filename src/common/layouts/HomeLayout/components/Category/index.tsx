import { FC } from "react";
import { ICategory } from "./types";

interface ICategoryProps {
  category: ICategory;
}

const Category: FC<ICategoryProps> = (props) => {
  return (
    <div className="flex items-center gap-4 border w-full p-3 hover:bg-amber-400 cursor-pointer">
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
