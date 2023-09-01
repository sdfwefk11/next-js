import Layout from "../../components/Layout";
import "../styles/globals.css";

export default function MainStyle({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
