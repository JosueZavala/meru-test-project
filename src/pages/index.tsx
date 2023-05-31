import IntroductionCard from "@/components/IntroductionCard/IntroductionCard";
import Products from "@/components/Products/Products";
import { useProducts } from "@/Hooks/Products";
import Head from "next/head";
import { useState, useEffect } from "react";

export default function Home() {
  const [nameFilter, setNameFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [totalPages, setTotalPages] = useState(0);
  const [count, setCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const { data: results, refetch } = useProducts(
    nameFilter,
    statusFilter,
    currentPage
  );

  debugger;
  //const results: [] = [];

  useEffect(() => {
    if (results) console.log(results);
  }, [results]);

  return (
    <main className={`flex min-h-screen flex-col items-center p-4 sm:p-8`}>
      <Head>
        <title>Meru Test Project</title>
        <meta name="description" content="Next App Created by Josue Zavala" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <IntroductionCard />
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
