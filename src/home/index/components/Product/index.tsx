import { FC } from "react";
import { IProduct } from "../../types";
import { formatMoney } from "../../../../common/utils";
import Button from "../../../../common/components/Button";

interface IProductProps {
  product: IProduct;
}

const Product: FC<IProductProps> = (props) => {
  return (
    <div className="border p-3 shadow bg-white">
      <img
        src={`img/${props.product.image}.jpg`}
        alt="Image product"
        className="w-full"
      />
      <div className="p-5">
        <h3 className="text-xl font-bold">{props.product.name}</h3>
        <p className="mt-1 font-black text-2xl text-amber-500">
          {formatMoney(props.product.price)}
        </p>
        <Button style={{ width: "100%" }}>Agregar</Button>
      </div>
    </div>
  );
};

export default Product;
