import CartModule from "@/components/Cart/CartModule";
import IntroductionCard from "@/components/IntroductionCard/IntroductionCard";
import Head from "next/head";

export default function Cart() {
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
      <CartModule />
    </main>
  );
}
