import { FC, useMemo } from "react";
import { IProduct } from "../../types";
import { formatMoney } from "../../../../common/utils";
import Button from "../../../../common/components/Button";
import { useCoffeeContext } from "../../../../context/hooks/useCoffeeContext";

interface IProductProps {
  product: IProduct;
  onClick: (product: IProduct) => void;
}

const Product: FC<IProductProps> = (props) => {
  const { cart } = useCoffeeContext();

  const existsProductInCart = useMemo(() => {
    return cart.some((p) => p.id === props.product.id);
  }, [cart]);

  return (
    <div className="border p-3 shadow bg-white flex flex-col">
      <img
        src={`img/${props.product.image}.jpg`}
        alt="Image product"
        className="w-full"
      />
      <div className="p-5 flex flex-col gap-3 justify-between flex-1">
        <h3 className="text-xl font-bold">{props.product.name}</h3>
        <p className="font-black text-2xl text-amber-500">
          {formatMoney(props.product.price)}
        </p>
        <Button
          style={{ width: "100%" }}
          onClick={() => {
            props.onClick(props.product);
          }}
          disabled={existsProductInCart}
        >
          Agregar
        </Button>
      </div>
    </div>
  );
};

export default Product;
