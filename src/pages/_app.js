import Layout from "@/components/layout";
import useMobileViewport from "@/hooks/useMobileViewport";
import useScrollReveal from "@/hooks/useScrollReveal";
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
