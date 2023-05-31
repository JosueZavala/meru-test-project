import { Results } from "@/typings/aplication";
import { useEffect, useState } from "react";
import CartElement from "./CartElement";

const CartModule: React.FC = () => {
  const [products, setProducts] = useState<Results[]>([]);
  const [productsCards, setProductsCards] = useState<JSX.Element[]>([]);

  return (
    <div className="flex flex-wrap bg-stone-100 rounded-md w-full mt-8 py-5 mx-auto mb-5 lg:w-3/4 max-w-4xl">
      {/*       {products && products.length > 0 && (
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
      )} */}
      {/* {products.length === 0 && (
        <div className="h-auto mx-auto">No found any Product</div>
      )} */}
      <CartElement
        id={1}
        title="Producto Prueba 1"
        description="Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday"
        price={20.0}
        amount={20}
      />
    </div>
  );
};

export default CartModule;
