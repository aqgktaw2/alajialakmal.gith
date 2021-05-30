import { IconSpotify, IconTwitter } from "@components/icons";
import Heading from "@components/heading";
import Link from "@components/link";

import {
	IntroductionSection,
	IntroductionHeader,
	IntroductionInner,
	IntroductionLinks,
	IntroductionLink,
} from "./styles";
import Button from "@components/button";

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
		<IntroductionSection transparent={noBg}>
			<IntroductionHeader>
				{useHeading1 ? (
					<Heading level={1} data-gsap="reveal-bottom">
						About Me
					</Heading>
				) : (
					<Heading level={2} data-gsap="reveal-bottom">
						Who am I? (the TL;DR version)
					</Heading>
				)}
			</IntroductionHeader>

			<IntroductionInner>
				<p data-gsap="reveal-bottom">
					I&apos;m a web & JavaScript developer based in Seattle, WA. I&apos;m currently focusing on
					delivering{" "}
					<IntroductionLink href="/projects" passHref>
						rich & responsive UI experiences
					</IntroductionLink>{" "}
					for web projects at scale. I am passionate about the JAM Stack, enjoy{" "}
					<IntroductionLink href="/posts" passHref>
						writing articles
					</IntroductionLink>{" "}
					and{" "}
					<IntroductionLink href="/snippets" passHref>
						sharing code snippets
					</IntroductionLink>{" "}
					with fellow developers.
				</p>

				{/* More about me button */}
				{!useHeading1 && (
					<Link href="/about" passHref underLine={false} data-gsap="reveal-bottom">
						<Button as="span">More About Me</Button>
					</Link>
				)}

				{/* Show link to twitter and spotify embed */}
				{linkToEmbeded && (
					<IntroductionLinks>
						<Link
							href="#twitter-embeded"
							passHref
							data-gsap="reveal-bottom"
							onClick={handleScroll}
							underLine={false}
						>
							<IconTwitter />
						</Link>

						<Link
							href="#spotify-embeded"
							passHref
							data-gsap="reveal-bottom"
							onClick={handleScroll}
							underLine={false}
						>
							<IconSpotify />
						</Link>
					</IntroductionLinks>
				)}
			</IntroductionInner>
		</IntroductionSection>
	);
};

export default Introduction;
