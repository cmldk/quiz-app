import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Quiz Uygulaması</title>
        <meta name="description" content="Quiz uygulaması ile testleri çöz" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
