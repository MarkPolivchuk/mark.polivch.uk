import type {NextPage} from 'next';
import Head from 'next/head';
import {Bowling} from 'components/Bowling';
import {Cats} from 'components/Cats';
import {Work} from 'components/Work';
import {Landing} from 'components/Landing';
import {Location} from 'components/Location';

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
        <Landing />
        <Location />
        <Work />
        <Cats />
        <Bowling />
      </main>
    </div>
  );
};

export default Home;
