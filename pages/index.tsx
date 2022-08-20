import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Mark Polivchuk</title>
        <meta
          name="description"
          content="Senior software developer from Calgary, AB"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="text-center bg-black min-h-screen flex flex-1 flex-col justify-center items-center p-4">
        <h1 className="text-white text-6xl font-bold">Mark Polivchuk</h1>

        <p className="text-white text-2xl my-4">
          Senior software developer from Calgary, AB
        </p>
      </main>
    </div>
  );
};

export default Home;
