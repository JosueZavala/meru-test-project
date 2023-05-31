import { ProductsCardProps, StatusColor } from "@/typings/aplication";
import { NextPage } from "next";
import Image from "next/image";

const ProductsCard: React.FC<ProductsCardProps> = ({
  title,
  description,
  price,
  image = "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
}) => {
  return (
    <div className="flex flex-col justify-between bg-blue-200 rounded-md p-5 mr-5 mb-5 w-1/4 max-w-1/4">
      <Image className="" src={image} alt="" width={300} height={300} />
      <div className="text-center mt-2">
        <div>{title.slice(0, 29)}</div>
        <div className="text-green-600 text-lg">${price}</div>
        <div className="cursor-pointer w-full p-2 rounded-full border border-gray-300 bg-white">Add to Cart</div>
        {/* <div className={StatusColor[status]}>{status}</div> */}
      </div>
    </div>
  );
};

export default ProductsCard;
