import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { RiShoppingCart2Line, RiDeleteBin2Fill } from "react-icons/ri";
import { useCartContext } from "@/context/cartContext";
import "react-toastify/dist/ReactToastify.css";

const MenuBar: React.FC = () => {
  const { state, dispatch } = useCartContext();
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState("");
  const router = useRouter();

  const handleEmptyCart = () => {
    dispatch({ type: "reset" });
    toast("Cart empty!!!");
  };

  useEffect(() => {
    if (state) {
      const { productsAdded, total } = state;
      const productsCount = productsAdded
        .map((element) => element.amount)
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
      setCartCount(productsCount);
      setCartTotal(total);
    }
  }, [state.productsAdded, state.total]);

  useEffect(() => {
    if (router.pathname) setCurrentPage(router.pathname);
  }, []);

  return (
    <div className="flex flex-wrap bg-stone-100 rounded-md w-full mt-8 py-5 mx-auto mb-5 lg:w-1/2 max-w-4xl">
      <div className="flex mx-auto gap-4">
        <Link
          href={currentPage === "/" ? "/cart" : "/"}
          className="flex gap-2 h-auto cursor-pointer"
        >
          {currentPage === "/" && <div>Ir al carrito</div>}
          {currentPage === "/cart" && <div>Regresar a Comprar</div>}
          <div className="grid grid-flow-col justify-items-center items-center">
            <RiShoppingCart2Line />({cartCount})
          </div>
          <div className="text-green-600">
            Total: ${Math.round(cartTotal * 100) / 100}
          </div>
        </Link>
        <div
          className="flex gap-2 cursor-pointer"
          onClick={() => handleEmptyCart()}
        >
          Clear Cart{" "}
          <div className="flex items-center">
            <RiDeleteBin2Fill />
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default MenuBar;
