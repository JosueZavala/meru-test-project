import { useCartContext } from "@/context/cartContext";
import { ProductsProps, Results } from "@/typings/aplication";
import { useEffect, useState } from "react";
import Pagination from "../Pagination/pagination";
import ProductsCard from "./ProductsCard";

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


  const createProducts = () => {
    const _products = results.map((product) => {
      return {
        id: product.id,
        title: product.title,
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
          title={product.title}
          description={product.description}
          price={product.price}
          image={product.image}
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
    </div>
  );
};

export default Products;
