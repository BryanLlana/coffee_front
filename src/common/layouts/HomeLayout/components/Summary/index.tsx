import { useMemo } from "react";
import { useCoffeeContext } from "../../../../../context/hooks/useCoffeeContext";
import { formatMoney } from "../../../../utils";
import ProductCart from "./components/ProductCart";
import Button from "../../../../components/Button";

const Summary = () => {
  const { cart } = useCoffeeContext();

  const total = useMemo(() => {
    return cart.reduce(
      (total, product) => product.price * product.quantity + total,
      0
    );
  }, [cart]);

  return (
    <div className="md:w-72 px-3 py-2 h-screen overflow-y-scroll">
      <h2 className="text-3xl font-bold mb-2">Mi pedido</h2>
      <p className="mb-5">Aquí podrás ver el resumen y totales de tu pedido</p>

      {cart.length > 0 ? (
        <div className="flex flex-col gap-5">
          {cart.map((product) => (
            <ProductCart key={product.id} product={product} />
          ))}
          <p className="text-lg font-bold text-green-600">
            Total: {formatMoney(total)}
          </p>
          <Button fullWidth>Realizar pedido</Button>
        </div>
      ) : (
        <p className="mt-10 text-gray-500">No hay productos en tu pedido</p>
      )}
    </div>
  );
};

export default Summary;
