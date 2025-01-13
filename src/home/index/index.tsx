import { useCoffeeContext } from "../../context/hooks/useCoffeeContext";
import { products as productDB } from "../../data/products";
import Product from "./components/Product";

const HomePage = () => {
  const { currentCategory } = useCoffeeContext();

  const products = productDB.filter(
    (p) => p.categoryId === currentCategory?.id
  );

  return (
    <>
      <h1 className="text-4xl font-black pt-2">{currentCategory?.name}</h1>
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
