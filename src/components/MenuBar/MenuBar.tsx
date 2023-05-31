import Link from "next/link";
import { RiShoppingCart2Line } from "react-icons/ri";

const MenuBar: React.FC = () => {
  return (
    <div className="flex flex-wrap bg-stone-100 rounded-md w-full mt-8 py-5 mx-auto mb-5 lg:w-1/2 max-w-4xl">
      <Link href={"/cart"} className="flex gap-2 h-auto mx-auto cursor-pointer">
        <div>Ir al carrito</div>
        <div className="grid justify-items-center items-center">
          <RiShoppingCart2Line />
        </div>
      </Link>
    </div>
  );
};

export default MenuBar;
