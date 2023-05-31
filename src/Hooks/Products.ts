import { productsParam } from "@/typings/aplication";
import { useQuery } from "react-query";
import { httpClient } from "../utils/http";

export const useProducts = (
  name = "",
  status = "",
  page = 1,
  refetchOnWindowFocus = false
) => {
  const params: productsParam = {};
  if (page > 1) {
    params["page"] = page;
  }
  if (name) {
    params["name"] = name;
  }
  if (status) {
    params["status"] = status;
  }

  return useQuery(
    "Products",
    async () =>
      httpClient
        .get(`/products/`, { params })
        .then((res) => res.data)
        .catch((error) => console.log(error)),
    { refetchOnWindowFocus }
  );
};
