import type { AppProps } from "next/app";
import {ThirdwebProvider } from "@thirdweb-dev/react";
import { Sepolia } from '@thirdweb-dev/chains';
import "../styles/globals.css";
import HeadComponent from '../components/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider activeChain={Sepolia}>
      <HeadComponent/>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;