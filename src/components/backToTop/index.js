import { useRef, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger.js";

import { StyledBackToTop } from "./styles";

import { IconBackTop } from "@components/icons";

gsap.registerPlugin(ScrollTrigger);

const BackToTop = () => {
	const buttonRef = useRef();
	const router = useRouter();
	const [show, setShow] = useState(false);

	useEffect(() => {
		ScrollTrigger.create({
			trigger: "main",
			start: "top top-=50",
			onUpdate(self) {
				if (self.progress > 0) return setShow(true);
				setShow(false);
			},
		});
	}, [router.asPath]);

	const handleScrollToTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
		if (window.innerWidth <= 768) return;
		[...document.querySelectorAll("button, a, input")][0].focus();
	};

	return (
		<StyledBackToTop
			ref={buttonRef}
			aria-label="back to top"
			show={show}
			onClick={handleScrollToTop}
		>
			<IconBackTop />
		</StyledBackToTop>
	);
};

export default BackToTop;
