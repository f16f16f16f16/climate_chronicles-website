import Head from "next/head";
import { NextUIProvider } from "@nextui-org/react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Courier_Prime } from 'next/font/google'

import "@/styles/globals.css";
import "mapbox-gl/dist/mapbox-gl.css";
import Footer from "@/components/footer";

const courierPrime = Courier_Prime({   weight: '400', subsets: ['latin'] })

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider className={`bg-blue-200 ${courierPrime.className}`}>
      <Head>
        <title>Climate Chronicles - Stories of Origin &amp; Impact in Our Environment.</title>
        <meta name="description" content="Explore 'The Climate Chronicles' for impactful stories on environmental origins and effects. Discover tales of change, resilience, and innovation in our fight for a sustainable planet." />
      </Head>
      <Component {...pageProps} />
      <Footer/>
      <Analytics />
      <SpeedInsights />
    </NextUIProvider>
  );
}

export default MyApp;
