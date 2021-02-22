import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";
import { useRouter } from "next/router";

const useScrollReveal = () => {
	const router = useRouter();

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
					duration: 3,
					ease: "elastic.out(1.2, 0.4)",
				}),
			onLeave: (batch) =>
				gsap.to(batch, {
					opacity: 0,
					y: -50,
					duration: 3,
					ease: "elastic.out(1.2, 0.4)",
					overwrite: true,
				}),
			onEnterBack: (batch) =>
				gsap.to(batch, {
					opacity: 1,
					y: 0,
					stagger: 0.15,
					duration: 3,
					ease: "elastic.out(1.2, 0.4)",
					overwrite: true,
				}),
			onLeaveBack: (batch) =>
				gsap.to(batch, {
					opacity: 0,
					y: 50,
					duration: 3,
					ease: "elastic.out(1.2, 0.4)",
					overwrite: true,
				}),
			start: "top bottom-=10%",
			end: "bottom top+=10%",
		});

		ScrollTrigger.addEventListener("refreshInit", () =>
			gsap.set('[data-gsap="reveal-bottom"]', { y: 0, opacity: 1 })
		);
	}, [router.asPath]);

	return null;
};

export default useScrollReveal;
