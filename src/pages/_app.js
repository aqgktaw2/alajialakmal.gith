import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";

import Layout from "src/components/layout";
import "../styles/main.scss";

gsap.registerPlugin(ScrollTrigger);

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    gsap.set('[data-gsap="reveal-bottom"]', { y: 50, opacity: 0 });

    ScrollTrigger.batch('[data-gsap="reveal-bottom"]', {
      interval: 0.1, // time window (in seconds) for batching to occur.
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          overwrite: true,
          ease: "elastic.out(1.1, 0.45)",
          duration: 3,
        }),
      onLeave: (batch) => gsap.set(batch, { opacity: 0, y: -50, overwrite: true }),
      onEnterBack: (batch) => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, overwrite: true }),
      onLeaveBack: (batch) => gsap.to(batch, { opacity: 0, y: 50, overwrite: true }),
      start: "top bottom-=100",
      end: "bottom top",
      // markers: true,
    });

    // when ScrollTrigger does a refresh(), it maps all the positioning data which
    // factors in transforms, but in this example we're initially setting all the ".box"
    // elements to a "y" of 100 solely for the animation in which would throw off the normal
    // positioning, so we use a "refreshInit" listener to reset the y temporarily. When we
    // return a gsap.set() in the listener, it'll automatically revert it after the refresh()!
    ScrollTrigger.addEventListener("refreshInit", () =>
      gsap.set('[data-gsap="reveal-bottom"]', { y: 0 })
    );
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
