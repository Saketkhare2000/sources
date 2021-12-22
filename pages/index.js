import Head from "next/head";
import Header from "../components/Header";
import Tabs from "../components/Tabs";

export default function Home() {
  return (
    <div className="bg-neutral-900">
      <Head>
        <title>Sources</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Tabs />
    </div>
  );
}
