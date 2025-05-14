import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import dynamic from "next/dynamic";

import Layout from '@/components/Layout';
import Head from '@/components/Head';

import '@/styles/globals.css';
import '@/styles/themes.css';

const NextNProgress = dynamic(() => import("nextjs-progressbar"), {
  ssr: false,
});

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme) {
      document.documentElement.setAttribute('data-theme', theme);
    }
  }, []);

  return (
    <>
    <NextNProgress
        height={5}
        color="linear-gradient(to right, #efefef, #f9826c)"
        options={{ easing: "ease", speed: 500, showSpinner: false }}
      />
    <Layout>
      <Head title={`Utsav Suthar | ${pageProps.title}`} />
      <Component {...pageProps} />
    </Layout>
    </>
  );
}

export default MyApp;
