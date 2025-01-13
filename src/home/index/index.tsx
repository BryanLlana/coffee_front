import { products } from "../../data/products";
import Product from "./components/Product";

const HomePage = () => {
  return (
    <>
      <h1 className="text-2xl font-black pt-2">Inicio</h1>
      <p className="text-md my-2">Elige y personaliza tu pedido</p>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default HomePage;
