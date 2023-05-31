import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useCartContext } from "@/context/cartContext";
import CartElement from "./CartElement";
import "react-toastify/dist/ReactToastify.css";

const CartModule: React.FC = () => {
  const [cartElements, setCartElements] = useState<JSX.Element[]>([]);

  const { state, dispatch } = useCartContext();

  const handleRemoveProduct = (id: number) => {
    const { productsAdded } = state;
    const product = productsAdded.find((element) => element.id === id);
    dispatch({ type: "removeProduct", payload: product?.id });

    toast(`${product?.name} Removed from cart !!!`);
  };

  const handleReduceProduct = (id: number) => {
    const { productsAdded } = state;
    const product = productsAdded.find((element) => element.id === id);
    dispatch({ type: "reduceProduct", payload: product?.id });

    toast(`${product?.name} amount Reduced!!!`);
  };

  const handleIncreaseProduct = (id: number) => {
    const { productsAdded } = state;
    const product = productsAdded.find((element) => element.id === id);
    dispatch({ type: "addProduct", payload: product });

    toast(`${product?.name} amount Increased !!!`);
  };

  useEffect(() => {
    if (state) {
      const { productsAdded } = state;
      const newCartElements = productsAdded.map((element) => {
        return (
          <CartElement
            key={`cartElement_${element.id}`}
            id={element.id}
            name={element.name}
            description={element.description}
            price={element.price}
            amount={element.amount}
            image={element.image}
            onAddProduct={handleIncreaseProduct}
            onReduceProduct={handleReduceProduct}
            onRemoveProduct={handleRemoveProduct}
          />
        );
      });
      setCartElements(newCartElements);
    }
  }, [state]);

  return (
    <div className="flex flex-wrap bg-stone-100 rounded-md w-full mt-8 py-5 mx-auto mb-5 lg:w-3/4 max-w-4xl">
      {cartElements && cartElements.length > 0 && (
        <div className="grid gap-3">{cartElements}</div>
      )}
      {cartElements.length === 0 && (
        <div className="h-auto mx-auto">No found any Product</div>
      )}
      <ToastContainer />
    </div>
  );
};

export default CartModule;
