export type ProductsProps = {
  results: Results[];
  count?: number;
  currentPage?: number;
  totalPages?: number;
  onPageChange: (page: number) => void;
};

export type Rating = {
  rate: number;
  count: number;
};

export type Results = {
  id: number;
  category?: string;
  description: string;
  image: string;
  price: number;
  rating?: Rating;
  title: string;
};

export type productsParam = {
  name?: string;
  status?: string;
  page?: number;
};

export type ProductsCardProps = {
  id: number;
  title: string;
  price: number;
  image: string;
  onAddProduct: (id: number) => void;
};

export type PaginationProps = {
  count?: number;
  currentPage: number;
  currentSize?: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export type CartElementProps = {
  id: number;
  title: string;
  description: string;
  price: number;
  image?: string;
  amount: number;
  onAddProduct: (id: number) => void;
  onReduceProduct: (id: number) => void;
  onRemoveProduct: (id: number) => void;
};

export type CartElement = {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  amount: number;
  category?: string;
  rating?: Rating;
};

export const PAGINATION_SIZE = 20;
