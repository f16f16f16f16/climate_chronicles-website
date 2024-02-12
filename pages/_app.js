import "@/styles/globals.css";
import 'mapbox-gl/dist/mapbox-gl.css';
import {NextUIProvider} from '@nextui-org/react'

function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider className="bg-blue-200">
      <Component {...pageProps} />
    </NextUIProvider>
  )
}

export default MyApp;