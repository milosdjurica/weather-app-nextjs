import Layout from "@/components/layout/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";

const font = Poppins({
  subsets: ["latin"],
  weight: ["500", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={font.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
