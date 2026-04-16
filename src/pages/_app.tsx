import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Fredoka } from "next/font/google";

const fredoka = Fredoka({
  variable: "--fonte-padrao",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={fredoka.variable}>
      <Component {...pageProps} />
    </main>
  )

}
