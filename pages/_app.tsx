import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Space_Mono } from "@next/font/google";
import Navbar from "./Navbar";
import Footer from "./Footer";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={spaceMono.className}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
