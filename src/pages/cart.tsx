import CartModule from "@/components/Cart/CartModule";
import IntroductionCard from "@/components/IntroductionCard/IntroductionCard";
import MenuBar from "@/components/MenuBar/MenuBar";
import { useCartContext } from "@/context/cartContext";
import Head from "next/head";
import { useEffect } from "react";

export default function Cart() {
  const { state, dispatch } = useCartContext();

  useEffect(() => {
    //Load from LocalStorage
    const meruCart = localStorage.getItem("meruCart");
    if (meruCart) {
      const loadedState = JSON.parse(meruCart);
      dispatch({ type: "loadFromLocalStorage", payload: loadedState });
    }
  }, []);

  return (
    <main className={`flex min-h-screen flex-col items-center p-4 sm:p-8`}>
      <Head>
        <title>Meru Test Project</title>
        <meta
          name="description"
          content="Cart - Next App Created by Josue Zavala"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <IntroductionCard />
      <MenuBar />
      <CartModule />
    </main>
  );
}
