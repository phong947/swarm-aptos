import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ThirdwebProvider } from "thirdweb/react";
import "react-tooltip/dist/react-tooltip.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}
