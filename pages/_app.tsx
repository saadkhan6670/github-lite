import "../styles/globals.css";
import type { AppProps } from "next/app";
import PrimaryLayout from "../components/layouts/primary/PrimaryLayout";
import { wrapper } from "../store/store";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <PrimaryLayout>
      <Component {...pageProps} />
    </PrimaryLayout>
  );
}

export default wrapper.withRedux(MyApp);
