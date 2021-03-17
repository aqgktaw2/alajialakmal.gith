import Link from "next/link";
import classNames from "classnames";

import { IconSpotify, IconTwitter } from "@/components/icons";

const Introduction = ({ useHeading1 = false, linkToEmbeded = false, noBg = false }) => {
	const handleScroll = evt => {
		evt.preventDefault();
		const id = evt.target.closest("a").href.split("#")[1];
		const scrollToTarget = document.getElementById(id);
		scrollToTarget.focus();
		window.scrollTo({ top: scrollToTarget.getBoundingClientRect().top - 350, behavior: "smooth" });
		return false;
	};

	return (
		<section
			className={classNames("section-introduction", { "section-introduction--no-bg": noBg })}
		>
			<div className="section-introduction__header">
				{useHeading1 ? (
					<h1 data-gsap="reveal-bottom">About Me</h1>
				) : (
					<h2 data-gsap="reveal-bottom">Who am I? (the TL;DR version)</h2>
				)}
			</div>
			<div className="section-introduction__inner">
				<p data-gsap="reveal-bottom">
					I&apos;m a web & JavaScript developer based in Seattle, WA. I&apos;m currently focusing on
					delivering{" "}
					<Link href="/projects" passHref>
						<a>rich & responsive UI experiences</a>
					</Link>{" "}
					for web projects at scale. I am passionate about the JAM Stack, enjoy{" "}
					<Link href="/posts" passHref>
						<a>writing articles</a>
					</Link>{" "}
					and{" "}
					<Link href="/snippets" passHref>
						<a>sharing code snippets</a>
					</Link>{" "}
					with fellow developers.
				</p>

				{/* More about me button */}
				{!useHeading1 && (
					<Link href="/about" passHref>
						<a data-gsap="reveal-bottom" className="btn">
							More About Me
						</a>
					</Link>
				)}

				{/* Show link to twitter and spotify embed */}
				{linkToEmbeded && (
					<div className="section-introduction__embeded-links">
						<Link href="#twitter-embeded" passHref>
							<a data-gsap="reveal-bottom" onClick={handleScroll}>
								<IconTwitter />
							</a>
						</Link>
						<Link href="#spotify-embeded" passHref>
							<a data-gsap="reveal-bottom" onClick={handleScroll}>
								<IconSpotify />
							</a>
						</Link>
					</div>
				)}
			</div>
		</section>
	);
};

export default Introduction;
