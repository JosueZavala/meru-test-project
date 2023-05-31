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
    <div className="bg-blue-200 rounded-md p-5 mr-5 mb-5 w-1/4 max-w-1/4 cursor-pointer">
      <Image className="" src={image} alt="" width={300} height={300} />
      <div className="text-center mt-2">
        <div>{title}</div>
        <div>{price}</div>
        <div className={StatusColor[status]}>{status}</div>
      </div>
    </div>
  );
};

export default ProductsCard;
