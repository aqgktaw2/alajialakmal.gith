import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import debounce from "src/utils/debounce";

const ProjectCard = () => {
	const imageContainerRef = useRef();
	const projectCardRef = useRef();

	useEffect(() => {
		const matchHeight = debounce(function () {
			gsap.to(imageContainerRef.current, {
				height: imageContainerRef.current.getBoundingClientRect().width * 2,
			});
		}, 100);
		matchHeight();
		window.addEventListener("resize", matchHeight);
		return () => {
			window.removeEventListener("resize", matchHeight);
		};
	}, []);

	return (
		<div data-gsap="reveal-bottom" className="project-card">
			<div ref={projectCardRef} className="project-card__info">
				<h3 className="project-card__title">Signals Analytics</h3>
				<p>
					<Link href="https://www.signals-analytics.com/">
						<a target="_blank" rel="noopener noreferrer">
							Signals Analytics
						</a>
					</Link>{" "}
					is a fast-growing business intelligence company that needs a new website with a
					modern design that fits its brand. Together with my teammates, we delivered and
					are actively maintaining a feature-complete website experience with futuristic
					looking UI elements.
				</p>
				<Link href={`/projects/signals-analytics`} passHref>
					<a className="btn">Read More</a>
				</Link>
			</div>

			<div ref={imageContainerRef} className="project-card__image">
				<img src="/signals.png" alt="signals" />
			</div>
		</div>
	);
};

export default ProjectCard;
