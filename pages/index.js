import Head from 'next/head';
import TimeManager from '../components/TimeManager';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Time Manager</title>
        <meta name="description" content="A simple time manager CRUD app" />
      </Head>
      <main>
        <h1>Manager Your Time</h1>
        <TimeManager />
      </main>
    </div>
  );
} 