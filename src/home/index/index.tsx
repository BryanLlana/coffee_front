import { useState } from "react";
import { useCoffeeContext } from "../../context/hooks/useCoffeeContext";
import { products as productDB } from "../../data/products";
import Product from "./components/Product";
import { IProduct } from "./types";
import useBoolean from "../../common/hooks/useBoolean";
import ProductModal from "./components/ProductModal";
import { CircleLoader } from "react-spinners";

const HomePage = () => {
  const { currentCategory, loadingCategories } = useCoffeeContext();

  const productModal = useBoolean();
  const [productSelected, setProductSelected] = useState<IProduct | null>(null);

  const products = productDB.filter(
    (p) => p.categoryId === currentCategory?.id
  );

  return (
    <>
      {loadingCategories ? (
        <div className="my-3">
          <CircleLoader color="#5B35FF" size={30} />
        </div>
      ) : (
        <h1 className="text-4xl font-black pt-2">{currentCategory?.name}</h1>
      )}
      <p className="text-md my-2">Elige y personaliza tu pedido</p>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {loadingCategories
          ? Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="p-4 border rounded-lg animate-pulse">
                <div className="h-[280px] bg-gray-300 rounded-md"></div>
                <div className="px-5">
                  <div className="mt-4 h-6 bg-gray-300 rounded-md w-3/4"></div>
                  <div className="mt-4 h-4 bg-gray-300 rounded-md w-1/2"></div>
                  <div className="mt-4 h-10 bg-gray-300 rounded-md"></div>
                </div>
              </div>
            ))
          : products.map((product) => (
              <Product
                key={product.id}
                product={product}
                onClick={(product) => {
                  setProductSelected(product);
                  productModal.on();
                }}
              />
            ))}
      </div>
      {productModal.active && productSelected && (
        <ProductModal
          show={productModal.active}
          onClose={() => {
            productModal.off();
            setProductSelected(null);
          }}
          product={productSelected}
        />
      )}
    </>
  );
};

export default HomePage;
