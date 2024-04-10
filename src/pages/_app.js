import "@/styles/globals.css";
import Layout from "@/components/layout";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
