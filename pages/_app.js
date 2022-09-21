import "../styles/globals.css";
import Seo from "./Seo";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps, canonical }) {
  return (
    <Layout>
      <Seo canonical={canonical} />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
