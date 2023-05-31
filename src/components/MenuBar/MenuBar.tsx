import { useEffect, useState } from "react";
import { RiShoppingCart2Line } from "react-icons/ri";
import { useCartContext } from "@/context/cartContext";
import Link from "next/link";

const MenuBar: React.FC = () => {
  const { state } = useCartContext();
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    if (state) {
      const { productsAdded, total } = state;
      const productsCount = productsAdded
        .map((element) => element.amount)
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0);
      setCartCount(productsCount);
      setCartTotal(total);
    }
  }, [state]);

  return (
    <div className="flex flex-wrap bg-stone-100 rounded-md w-full mt-8 py-5 mx-auto mb-5 lg:w-1/2 max-w-4xl">
      <Link href={"/cart"} className="flex gap-2 h-auto mx-auto cursor-pointer">
        <div>Ir al carrito</div>
        <div className="grid grid-flow-col justify-items-center items-center">
          <RiShoppingCart2Line />({cartCount})
        </div>
        <div className="text-green-600">
          Total: ${Math.round(cartTotal * 100) / 100}
        </div>
      </Link>
    </div>
  );
};

export default MenuBar;
