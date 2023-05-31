import IntroductionCard from "@/components/IntroductionCard/IntroductionCard";
import MenuBar from "@/components/MenuBar/MenuBar";
import Products from "@/components/Products/Products";
import { useCartContext } from "@/context/cartContext";
import { useProducts } from "@/Hooks/Products";
import { PAGINATION_SIZE } from "@/typings/aplication";
import Head from "next/head";
import { useState, useEffect } from "react";

export default function Home() {
  const [nameFilter, setNameFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [totalPages, setTotalPages] = useState(0);
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const { state, dispatch } = useCartContext();

  const { data: results, refetch } = useProducts(
    nameFilter,
    statusFilter,
    currentPage
  );

  useEffect(() => {
    if (results) {
      setCount(results.length);
      setTotalPages(Math.ceil(results.length / PAGINATION_SIZE));
    }
  }, [results]);

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
          content="Home - Next App Created by Josue Zavala"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <IntroductionCard />
      <MenuBar />
      <Products
        results={results || []}
        count={count}
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </main>
  );
}
