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
  title: string;
  description: string;
  price: number;
  image: string;
};

export type PaginationProps = {
  count?: number;
  currentPage: number;
  currentSize?: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export type CartElementProps = {
  id: string;
  title: string;
  description: string;
  price: number;
  image?: string;
  amount: number;
};

export const statusCharacters = {
  alive: "Alive",
  dead: "Dead",
  unknown: "unknown",
};

export const StatusColor = {
  [statusCharacters.alive]: "text-green-500",
  [statusCharacters.dead]: "text-red-500",
  [statusCharacters.unknown]: "text-purple-400",
};

export const PAGINATION_SIZE = 20;
