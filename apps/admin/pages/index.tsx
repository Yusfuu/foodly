import type { NextPage } from "next";
import Link from "next/link";

export type Props = {};

const Home: NextPage<Props> = () => {
  return (
    <>
      <h1>Hello go to products</h1>
      <Link href="/Seller/products/new">
        <a>Go to products</a>
      </Link>
    </>
  );
};
export default Home;
