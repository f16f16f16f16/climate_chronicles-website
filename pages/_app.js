import "@/styles/globals.css";
import 'mapbox-gl/dist/mapbox-gl.css';
import {NextUIProvider} from '@nextui-org/react'
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider className="bg-blue-200">
      <Component {...pageProps} />
      <Analytics />
      <SpeedInsights />
    </NextUIProvider>
  )
}

export default MyApp;