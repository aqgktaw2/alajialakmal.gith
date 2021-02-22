import { Router } from "next/router";
import NProgress from "nprogress";

import Layout from "@/components/layout";
import useMobileViewport from "@/hooks/useMobileViewport";
import useScrollReveal from "@/hooks/useScrollReveal";
import "../styles/main.scss";

// Progress
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function MyApp({ Component, pageProps }) {
  useScrollReveal();
  useMobileViewport();

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
