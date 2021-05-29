import { useEffect, useRef } from "react";
import gsap from "gsap";

import throttle from "@utils/throttle";

const BlogProgress = () => {
	const progressbarRef = useRef(null);

	useEffect(() => {
		const handleProgress = throttle(function () {
			const documentHeight = Math.max(
				document.body.scrollHeight,
				document.documentElement.scrollHeight,
				document.body.offsetHeight,
				document.documentElement.offsetHeight,
				document.body.clientHeight,
				document.documentElement.clientHeight,
			);
			const scrollTop = window.pageYOffset;
			const windowHeight = window.innerHeight;
			const progress = `${(scrollTop / (documentHeight - windowHeight)) * 100}%`;
			gsap.to(progressbarRef.current, { width: progress });
		}, 50);
		handleProgress();

		window.addEventListener("scroll", handleProgress);
		return () => {
			window.removeEventListener("scroll", handleProgress);
		};
	}, []);

	return <div className="blog-progress" ref={progressbarRef} />;
};

export default BlogProgress;
