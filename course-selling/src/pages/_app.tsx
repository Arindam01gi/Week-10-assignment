import "@/styles/globals.css";
import { AppBar } from "@/components/AppBar";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
    <AppBar />
    <Component {...pageProps} />
  </>
  );
}
