import { FC, useState } from "react";
import Modal from "../../../../common/components/Modal";
import { useMediaQuery } from "../../../../common/hooks/useMediaQuery";
import { IProduct } from "../../types";
import { formatMoney } from "../../../../common/utils";
import Button from "../../../../common/components/Button";
import MinusCircleIcon from "../../../../common/icons/MinusCircleIcon";
import PlusCircleIcon from "../../../../common/icons/PlusCircleIcon";
import { toast } from "react-toastify";
import { useCoffeeContext } from "../../../../context/hooks/useCoffeeContext";

interface IProductModalProps {
  show: boolean;
  onClose: () => void;
  product: IProduct;
}

const ProductModal: FC<IProductModalProps> = (props) => {
  const isDesktop = useMediaQuery((m) => m.MIN_TABLET);
  const [quantity, setQuantity] = useState<number>(0);

  const { addProductInCart } = useCoffeeContext();

  return (
    <Modal
      mounted={props.show}
      onClose={props.onClose}
      anchor={isDesktop ? "center" : "bottom"}
      rounded
      style={{
        maxWidth: isDesktop ? 600 : undefined,
        height: "auto",
        maxHeight: "unset",
        padding: 16,
      }}
    >
      <div className={`flex ${isDesktop ? "flex-row" : "flex-col"} gap-5`}>
        <img
          className={`${isDesktop ? "w-[200px]" : "w-[100%] h-[250px]"} `}
          src={`img/${props.product.image}.jpg`}
          alt="Image product"
        />
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold">{props.product.name}</h2>
          <p className="text-2xl text-amber-500 font-black">
            {formatMoney(props.product.price)}
          </p>
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
          <Button
            style={{ ...(!isDesktop && { width: "100%" }) }}
            onClick={() => {
              addProductInCart({
                id: props.product.id,
                name: props.product.name,
                price: props.product.price,
                quantity,
              });
              toast.success("Producto agregado correctamente");
              props.onClose();
            }}
            disabled={!quantity}
          >
            Agregar al pedido
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ProductModal;
