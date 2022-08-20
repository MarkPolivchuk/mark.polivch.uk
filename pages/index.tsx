import type {NextPage} from 'next';
import Head from 'next/head';
import {Heading} from '@components';

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

      <main>
        <section className="text-center bg-black min-h-screen flex flex-1 flex-col justify-center items-center p-4">
          <Heading>Mark Polivchuk</Heading>
          <p className="text-white text-2xl my-4">
            Senior software developer from Calgary, AB
          </p>
        </section>
        <section className="text-center bg-blue-500 min-h-screen flex flex-1 flex-col justify-center items-center p-4">
          <Heading>Mark Polivchuk</Heading>

          <p className="text-white text-2xl my-4">
            Senior software developer from Calgary, AB
          </p>
        </section>
        <section className="text-center bg-red-500 min-h-screen flex flex-1 flex-col justify-center items-center p-4">
          <Heading>Mark Polivchuk</Heading>

          <p className="text-white text-2xl my-4">
            Senior software developer from Calgary, AB
          </p>
        </section>
      </main>
    </div>
  );
};

export default Home;
