import Head from "next/head";
import { NextUIProvider } from "@nextui-org/react";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

import "@/styles/globals.css";
import "mapbox-gl/dist/mapbox-gl.css";

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider className="bg-blue-200">
      <Head>
        <title>Climate Chronicles - Stories of Origin &amp; Impact in Our Environment.</title>
        <meta name="description" content="Explore 'The Climate Chronicles' for impactful stories on environmental origins and effects. Discover tales of change, resilience, and innovation in our fight for a sustainable planet." />
      </Head>
      <Component {...pageProps} />
      <Analytics />
      <SpeedInsights />
    </NextUIProvider>
  );
}

export default MyApp;
