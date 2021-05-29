import { TwitterTimelineEmbed } from "react-twitter-embed";

const Embeded = () => {
	return (
		<section className="section-embeded">
			<div className="section-embeded__inner">
				<div>
					<h2 data-gsap="reveal-bottom">My discussions, inspirations, and source of knowledge.</h2>
					<div
						tabIndex="-1"
						data-gsap="reveal-bottom"
						id="twitter-embeded"
						className="section-embeded__twitter"
					>
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
					</div>
				</div>
				<div>
					<h2 data-gsap="reveal-bottom">
						Coding alone at night? Well you&apos;ve found the playlist!
					</h2>
					<div
						tabIndex="-1"
						data-gsap="reveal-bottom"
						id="spotify-embeded"
						className="section-embeded__spotify"
					>
						<iframe
							src="https://open.spotify.com/embed/playlist/3zpnaMi4PIcXSXCmxdLAN1"
							width="300"
							height="380"
							frameBorder="0"
							allowtransparency="true"
							allow="encrypted-media"
							loading="lazy"
						></iframe>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Embeded;
