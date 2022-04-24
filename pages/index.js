import ProductList from "../components/ProductList";
import {
  getProductsEarringsCollection,
  getProductsInCollection,
  getProductsNecklacesCollection,
  getProductsRingCollection,
} from "../lib/shopify";

import Hero from "../components/Hero";
import Head from "next/head";
import FrontPage from "../components/FrontPage";
import FirstCollectionList from "../components/firstcollection/FirstCollectionList";
import SecoundCollectionList from "../components/secoundcollection/SecoundCollectionList";
import ThirdCollectionList from "../components/thirdcollection/ThirdCollectionList";

export default function Home({ products, rings, earrings, necklaces }) {
  return (
    <div style={{ backgroundColor: "#000" }} className="relative body">
      <Head>
        <title>Tataroski</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          httpEquiv="Content-Type"
          content="text/html; charset=ISO-8859-1"
        />
        <meta
          name="description"
          content="STORY WHO WEARS WOW 3W is a newly established direct-to-consumer
          fashion accessories brand, which means undefined fashion. We hope to
          create the unique one for everyone. We love every passion and interest
          on Earth because it is a reference to the UNIQUENESS of everything."
        />
        <meta property="og:title" content="Tataroski" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.buildnextshop.com" />
        <meta
          property="og:image"
          content="https://www.buildnextshop.com/share.png"
        />
        <meta
          property="og:description"
          content="STORY WHO WEARS WOW 3W is a newly established direct-to-consumer
          fashion accessories brand, which means undefined fashion. We hope to
          create the unique one for everyone. We love every passion and interest
          on Earth because it is a reference to the UNIQUENESS of everything."
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Tataroski" />
      </Head>
      <div className="wrap">
        <Hero products={products} />
        <FrontPage />
        <ProductList products={products} />
        {/* <SecoundCollectionList earrings={earrings} />
        <ThirdCollectionList necklaces={necklaces} />
        <FirstCollectionList rings={rings} /> */}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const products = await getProductsInCollection();
  // const rings = await getProductsRingCollection();
  // const earrings = await getProductsEarringsCollection();
  // const necklaces = await getProductsNecklacesCollection();

  return {
    props: { products },
    // will be passed to the page component as props
  };
}
