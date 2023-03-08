import "@/styles/globals.scss";

import { DAppProvider, Goerli } from "@usedapp/core";
import { providers } from "ethers";
import { Buffer } from "buffer";
// if (window.Buffer === undefined) window.Buffer = Buffer;

const config = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Goerli.chainId]: new providers.AlchemyProvider(
      "goerli",
      "9hgspO71lWXbmuo_q6duzQYPCz5qHp0p"
    ),
  },
};

export default function App({ Component, pageProps }) {
  return (
    <DAppProvider config={config}>
      <Component {...pageProps} />;
    </DAppProvider>
  );
}
