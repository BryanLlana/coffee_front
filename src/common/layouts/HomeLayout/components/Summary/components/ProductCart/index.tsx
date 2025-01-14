import { FC, useEffect, useState } from "react";
import { IProductCart } from "../../../../../../../home/index/types";
import MinusCircleIcon from "../../../../../../icons/MinusCircleIcon";
import PlusCircleIcon from "../../../../../../icons/PlusCircleIcon";
import { formatMoney } from "../../../../../../utils";
import TrashIcon from "../../../../../../icons/TrashIcon";
import { useCoffeeContext } from "../../../../../../../context/hooks/useCoffeeContext";
import { toast } from "react-toastify";

interface IProductCartProps {
  product: IProductCart;
}

const ProductCart: FC<IProductCartProps> = (props) => {
  const [quantity, setQuantity] = useState<number>(props.product.quantity);
  const { deleteProductInCart, updateQuantityInCart } = useCoffeeContext();

  useEffect(() => {
    updateQuantityInCart({
      ...props.product,
      quantity,
    });
  }, [quantity]);

  return (
    <div className="p-4 shadow flex flex-col gap-3">
      <h1 className="font-bold">{props.product.name}</h1>
      <div className="flex items-center justify-between">
        <div className="flex gap-5 items-center">
          <MinusCircleIcon
            size={25}
            style={{ cursor: "pointer" }}
            onClick={() => {
              if (quantity === 0) return;
              setQuantity(quantity - 1);
            }}
          />
          <p className="text-lg">{quantity}</p>
          <PlusCircleIcon
            size={25}
            style={{ cursor: "pointer" }}
            onClick={() => {
              if (quantity >= 5) return;
              setQuantity(quantity + 1);
            }}
          />
        </div>
        <div
          className="bg-red-300 p-2 rounded-md text-red-800 cursor-pointer"
          onClick={() => {
            deleteProductInCart(props.product.id);
            toast.success("Producto eliminado correctamente");
          }}
        >
          <TrashIcon size={20} />
        </div>
      </div>

      <p>
        Precio:{" "}
        <span className="text-amber-500 font-bold">
          {formatMoney(props.product.price)}
        </span>
      </p>
      <p>
        Subtotal:{" "}
        <span className="text-gray-500 font-bold">
          {formatMoney(props.product.price * quantity)}
        </span>
      </p>
    </div>
  );
};

export default ProductCart;
