import { getSession } from "next-auth/client";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";
import Head from "next/head";
import { ExclamationCircleIcon } from "@heroicons/react/solid";
import { useDispatch } from "react-redux";
import { myProducts } from "../slices/basketSlice";

export default function Home({ products }) {
  const dispatch = useDispatch();

  if (products) {
    dispatch(myProducts(products));
  }
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Online Shopping site in India</title>
      </Head>
      {/*Header*/}
      <Header products={products} />

      <main className="max-w-screen-2xl mx-auto">
        {/*Banner*/}
        <Banner />

        {/* Product Feed*/}
        <ProductFeed products={products} />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  return {
    props: {
      products,
      session,
    },
  };
  // GET >>> https://fakestoreapi.com/products
}
