import { useRouter } from "next/router";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";

gsap.registerPlugin(ScrollTrigger);

const useScrollReveal = () => {
	const router = useRouter();

	// Batch stagger animate any element with data-gsap="reveal-bottom"
	useEffect(() => {
		gsap.set('[data-gsap="reveal-bottom"]', { y: 75, opacity: 0 });

		const triggers = ScrollTrigger.batch('[data-gsap="reveal-bottom"]', {
			onEnter(batch) {
				gsap.to(batch, {
					opacity: 1,
					y: 0,
					stagger: 0.15,
					duration: 1.5,
					ease: "elastic.out(1,1)",
				});
			},
			onLeave(batch) {
				gsap.to(batch, {
					opacity: 0,
					y: -75,
					stagger: 0.15,
					duration: 1.5,
					ease: "elastic.out(1,1)",
				});
			},
			onEnterBack(batch) {
				gsap.to(batch, {
					opacity: 1,
					y: 0,
					stagger: 0.15,
					duration: 1.5,
					ease: "elastic.out(1,1)",
				});
			},
			onLeaveBack(batch) {
				gsap.to(batch, {
					opacity: 0,
					y: 75,
					stagger: 0.15,
					duration: 1.5,
					ease: "elastic.out(1,1)",
				});
			},
			start: "top bottom-=2.5%",
			end: "bottom top+=2.5%",
		});

		return () => {
			triggers.forEach(trigger => trigger.kill());
		};
	}, [router.asPath]);

	return null;
};

export default useScrollReveal;
