import { useCartContext } from "@/context/cartContext";
import { ProductsProps, Results } from "@/typings/aplication";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Pagination from "../Pagination/pagination";
import ProductsCard from "./ProductsCard";
import "react-toastify/dist/ReactToastify.css";

const Products: React.FC<ProductsProps> = ({
  results,
  count = 0,
  currentPage = 1,
  totalPages = 10,
  onPageChange,
}) => {
  const [products, setProducts] = useState<Results[]>([]);
  const [productsCards, setProductsCards] = useState<JSX.Element[]>([]);

  const { state, dispatch } = useCartContext();

  const handleAddProduct = (id: number) => {
    const product = products.find((element) => element.id === id);
    dispatch({ type: "addProduct", payload: product });

    toast(`${product?.name} Added to cart !!!`);
  };

  const createProducts = () => {
    if (results && results.length <= 0) return;
    const _products = results.map((product) => {
      return {
        id: product.id,
        name: product.name,
        description: product.description,
        price: product.price,
        image: product.image,
      };
    });
    setProducts(_products);
  };

  const createProductsCards = () => {
    if (!products) return;
    const _productsCards = products.map((product: Results) => {
      return (
        <ProductsCard
          key={`product_${product.id}`}
          id={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
          onAddProduct={handleAddProduct}
        />
      );
    });
    setProductsCards(_productsCards);
  };

  useEffect(() => {
    createProducts();
  }, [results]);

  useEffect(() => {
    createProductsCards();
  }, [products]);

  return (
    <div className="flex flex-wrap bg-stone-100 rounded-md w-full mt-8 py-5 mx-auto mb-5 lg:w-1/2 max-w-4xl">
      {products && products.length > 0 && (
        <>
          <Pagination
            count={count}
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={onPageChange}
          />
          <div className="flex flex-wrap w-full h-auto pl-5 mb-5 mt-5 justify-center">
            {productsCards}
          </div>
          <Pagination
            count={count}
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={onPageChange}
          />
        </>
      )}
      {products.length === 0 && (
        <div className="h-auto mx-auto">No found any Products</div>
      )}
      <ToastContainer />
    </div>
  );
};

export default Products;
