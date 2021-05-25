import { useRef, useEffect } from "react";
import { useRouter } from "next/router";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";

import { IconBackTop } from "@components/icons";

gsap.registerPlugin(ScrollTrigger);

const BackToTop = () => {
	const buttonRef = useRef();
	const router = useRouter();

	useEffect(() => {
		ScrollTrigger.create({
			trigger: "main",
			start: "top top-=50",
			onUpdate(self) {
				if (self.progress > 0) {
					return buttonRef.current?.classList.add("back-to-top--show");
				}
				buttonRef.current?.classList.remove("back-to-top--show");
			},
		});
	}, [router.asPath]);

	const handleScrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
		if (window.innerWidth <= 768) return;
		[...document.querySelectorAll("button, a, input")][0].focus();
	};

	return (
		<button
			ref={buttonRef}
			aria-label="back to top"
			className="back-to-top"
			onClick={handleScrollToTop}
		>
			<IconBackTop />
		</button>
	);
};

export default BackToTop;
