import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";

import Layout from "src/components/layout";
import useScrollReveal from "src/hooks/useScrollReveal";
import "../styles/main.scss";

gsap.registerPlugin(ScrollTrigger);

export default function MyApp({ Component, pageProps }) {
  useScrollReveal();

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
