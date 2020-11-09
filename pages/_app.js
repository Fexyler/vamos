import React from "react";
import { StoreProvider } from "../store";

import "../styles/app.css";
import Head from "next/head";
import SiteConfig from "../site.config";

export default function MyApp({ Component, pageProps }) {
  return (
    <StoreProvider>
      <Head>
        <title>Vamos!</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={SiteConfig.description} />
      </Head>
      <Component {...pageProps} />
    </StoreProvider>
  );
}
