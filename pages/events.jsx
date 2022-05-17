import { GamesList } from '@/page-components/GamesList';
import Head from 'next/head';

const EventsPage = () => {
  return (
    <>
      <Head>
        <title>Today's schdule</title>
      </Head>
      <GamesList />
    </>
  );
};

export default EventsPage;
