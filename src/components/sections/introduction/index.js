import { IconSpotify, IconTwitter } from "@components/icons";
import Heading from "@components/heading";
import Link from "@components/link";
import Button from "@components/button";
import toReactComponent from "@utils/toReactComponent";

import {
	IntroductionSection,
	IntroductionHeader,
	IntroductionInner,
	IntroductionLinks,
} from "./styles";

const Introduction = ({ noBg = false, content }) => {
	const {
		heading: { heading_level, heading_text },
		enable_link,
		link: { label, url },
		body_content,
		enable_scroll_to_twitter_spotify_embeds,
	} = content;

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
				<Heading level={Number(heading_level)} data-gsap="reveal-bottom">
					{heading_text}
				</Heading>
			</IntroductionHeader>

			<IntroductionInner>
				<p data-gsap="reveal-bottom">{toReactComponent(body_content)}</p>

				{/* More about me button */}
				{enable_link && (
					<Link href={url} passHref underLine={false} data-gsap="reveal-bottom">
						<Button as="span">{label}</Button>
					</Link>
				)}

				{/* Show link to twitter and spotify embed */}
				{enable_scroll_to_twitter_spotify_embeds && (
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
