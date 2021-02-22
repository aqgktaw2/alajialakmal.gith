import Layout from "src/components/layout";
import useMobileViewport from "src/hooks/useMobileViewport";
import useScrollReveal from "src/hooks/useScrollReveal";
import "../styles/main.scss";

export default function MyApp({ Component, pageProps }) {
  useScrollReveal();
  useMobileViewport();

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
