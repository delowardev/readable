import type { AppProps } from "next/app";
import "../styles/normalize.css";
import "../styles/bootstrap-grid.css";
import "../styles/scss/index.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
