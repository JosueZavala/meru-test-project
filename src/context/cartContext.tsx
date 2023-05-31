import { CartElementProps, Results } from "@/typings/aplication";
import { createContext, useContext, useReducer } from "react";

type State = {
  productsAdded: CartElementProps[];
  total: number;
};

const initialValues: State = {
  productsAdded: [],
  total: 0,
};

const actions = {
  addProduct: (state: State, productToAdd: Results): State => {
    const { productsAdded, total } = state;
    const { id, title, description, price, image } = productToAdd;
    const newProduct = {
      id,
      title,
      description,
      price,
      image,
      amount: 1,
    };
    let newTotal = total + productToAdd.price;

    const product = productsAdded.find(
      (element) => element.id === productToAdd.id
    );

    if (product?.id) {
      product.amount++;
    } else {
      productsAdded.push(newProduct);
    }

    return { ...state, productsAdded, total: newTotal };
  },
};

type OAction = typeof actions;
type TAction = {
  [K in keyof OAction]: { type: K; payload?: Parameters<OAction[K]>[1] };
};
type Action = TAction[keyof TAction];
type Dispatch = (action: Action) => void;

type CartContextProps = {
  state: State;
  dispatch: Dispatch;
};

type CartProviderProps = { children: React.ReactNode };

const CartContext = createContext<CartContextProps | undefined>(undefined);

const cartReducer = (state: State, action: Action): State => {
  if (action.type in actions) {
    return actions[action.type](state, action.payload as any);
  }
  return state;
};

const CartProvider = ({ children }: CartProviderProps) => {
  const [state, dispatch] = useReducer(cartReducer, initialValues);
  const value = { state, dispatch };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

const useCartContext = (): CartContextProps => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("Error initializing Cart Context!");
  }
  return context;
};

export { CartProvider, useCartContext };
