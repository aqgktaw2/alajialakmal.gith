import Section from "@components/section";
import { TwitterTimelineEmbed } from "react-twitter-embed";

import { StyledEmbededInner, StyledTwitterEmbed, StyledSpotifyEmbed, EmbedHeading } from "./styles";

const SPOTIFY_IFRAME_SRC = "https://open.spotify.com/embed/playlist/3zpnaMi4PIcXSXCmxdLAN1";

const Embeded = () => {
	return (
		<Section>
			<StyledEmbededInner>
				<div>
					<EmbedHeading level={2} data-gsap="reveal-bottom">
						My discussions, inspirations, and source of knowledge.
					</EmbedHeading>

					<StyledTwitterEmbed tabIndex="-1" data-gsap="reveal-bottom" id="twitter-embeded">
						<TwitterTimelineEmbed
							sourceType="profile"
							screenName="DennyHong3"
							theme="dark"
							transparent
							borderColor="#fff"
							autoHeight
							noBoerder
							noFooter
							noScrollbar // BAD PRACTICE
							// linkColor="#fff" // NOT WORKING
							loading="lazy"
						/>
					</StyledTwitterEmbed>
				</div>

				<div>
					<EmbedHeading level={2} data-gsap="reveal-bottom">
						Coding alone at night? Well you&apos;ve found the playlist!
					</EmbedHeading>

					<StyledSpotifyEmbed tabIndex="-1" data-gsap="reveal-bottom" id="spotify-embeded">
						<iframe
							src={SPOTIFY_IFRAME_SRC}
							width="300"
							height="380"
							frameBorder="0"
							allowtransparency="true"
							allow="encrypted-media"
							loading="lazy"
						></iframe>
					</StyledSpotifyEmbed>
				</div>
			</StyledEmbededInner>
		</Section>
	);
};

export default Embeded;
