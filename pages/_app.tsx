import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Space_Mono } from "@next/font/google";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={spaceMono.className}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
