import { RiDeleteBin2Line } from "react-icons/ri";
import { CartElementProps } from "@/typings/aplication";
import Image from "next/image";

const CartElement: React.FC<CartElementProps> = ({
  id,
  name,
  description,
  price = 0,
  image = "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  amount = 0,
  onAddProduct,
  onReduceProduct,
  onRemoveProduct,
}) => {
  return (
    <div className="flex flex-row w-11/12 rounded-2xl mx-auto bg-gray-700 text-white p-2 gap-4">
      <div className="flex items-center basis-1/8">
        <Image
          className="rounded-2xl"
          src={image}
          width={90}
          height={90}
          alt="test Image"
        />
      </div>

      <div className="basis-3/5">
        <div className="flex flex-col gap-2 p-2">
          <div className="text-2xl">{name}</div>
          <div className="text-sm text-slate-300">{description}</div>
        </div>
      </div>

      <div className="flex items-center basis-1/5">
        <div className="flex flex-col w-full gap-2">
          <div>Price: ${price}</div>
          <div>
            Amount:{" "}
            <span
              onClick={() => onReduceProduct(id)}
              className="mx-2 cursor-pointer"
            >
              -
            </span>
            {amount}{" "}
            <span
              onClick={() => onAddProduct(id)}
              className="ml-2 cursor-pointer"
            >
              +
            </span>
          </div>
          <div>SubTotal: ${price * amount}</div>
        </div>
      </div>
      <div className="flex items-center">
        <RiDeleteBin2Line
          className="cursor-pointer"
          onClick={() => onRemoveProduct(id)}
        />
      </div>
    </div>
  );
};

export default CartElement;
