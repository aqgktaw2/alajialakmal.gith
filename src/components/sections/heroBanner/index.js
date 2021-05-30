import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import { SOCIAL_ICON_MAP } from "@lib/constants";
import Heading from "@components/heading";
import Illutration from "./illustration";

import {
	StyledCodeBanner,
	StyledBannerInner,
	StyledBannerLeft,
	StyledBannerSocial,
	StyledBannerRight,
	StyledScrollButton,
	StyledScrollIcon,
	StyledScrollArrows,
	IconLink,
} from "./styles";

const HeroBanner = ({ content }) => {
	const { name, position, social_links } = content;

	const headingOne = useRef(null);
	const headingTwo = useRef(null);
	const illustrationWrapper = useRef(null);
	const bannerInnerRef = useRef(null);
	const scrollButtonRef = useRef(null);
	const socialIconsRef = useRef([]);

	useEffect(() => {
		headingOne.current.innerHTML = headingOne.current.innerText
			.split("")
			.map(ch => (ch === " " ? "<span>&nbsp;</span>" : `<span>${ch}</span>`))
			.join("");
		headingTwo.current.innerHTML = headingTwo.current.innerText
			.split("")
			.map(ch => (ch === " " ? "<span>&nbsp;</span>" : `<span>${ch}</span>`))
			.join("");

		const tl = gsap.timeline({
			defaults: { ease: "elastic.out(1.15,0.85)", duration: 1.5 },
		});
		tl.set(headingOne.current.querySelectorAll("span"), {
			display: "inline-block",
			opacity: 0,
			y: 65,
		})
			.set(headingTwo.current.querySelectorAll("span"), {
				display: "inline-block",
				opacity: 0,
				y: 55,
			})
			.set(illustrationWrapper.current, {
				x: -75,
				y: 75,
				scale: 0.85,
				opacity: 0,
			})
			.set(socialIconsRef.current, { y: 50, opacity: 0, transition: "initial" })
			.set(scrollButtonRef.current, { opacity: 0 })
			.set(bannerInnerRef.current, { opacity: 1 })
			.to(
				illustrationWrapper.current,
				{
					x: 0,
					y: 0,
					opacity: 1,
					scale: 1,
					duration: 3,
					clearProps: "all",
					onComplete() {
						const tl2 = gsap.timeline({
							defaults: { repeat: -1, yoyo: true, duration: 7.5 },
						});
						tl2
							.to(illustrationWrapper.current, {
								x: -15,
								y: 15,
								rotate: "1deg",
							})
							.to(illustrationWrapper.current, { x: 15, y: -15, rotate: "-1deg" });
					},
				},
				0.65,
			)
			.to(headingOne.current.querySelectorAll("span"), { y: 0, opacity: 1, stagger: 0.08 }, 0.75)
			.to(headingTwo.current.querySelectorAll("span"), { y: 0, opacity: 1, stagger: 0.05 }, 1.65)
			.to(
				socialIconsRef.current,
				{
					y: 0,
					opacity: 1,
					stagger: 0.15,
					onComplete() {
						socialIconsRef.current.forEach(
							a => (a.style.transition = "var(--transition-standard)"),
						);
					},
				},
				3.1,
			)
			.to(scrollButtonRef.current, { opacity: 1 }, "-=1.05");
	}, []);

	const appendIconsToRef = el => {
		if (!el || socialIconsRef.current.find(e => e === el)) return;
		socialIconsRef.current.push(el);
	};

	const handleScrollToNextSection = () => {
		const heroBannerHeight = [...document.querySelectorAll("section")][0].getBoundingClientRect()
			.height;
		const headerHeight = document.querySelector("#global-header").getBoundingClientRect().height;
		window.scrollTo({
			top: heroBannerHeight - headerHeight,
			behavior: "smooth",
		});
	};

	return (
		<StyledCodeBanner>
			<StyledBannerInner
				ref={bannerInnerRef}
				// Prevent gsap flicker on load
				style={{ opacity: 0 }}
			>
				{/* HEADING TEXT */}
				<StyledBannerLeft>
					<Heading level={1}>
						<span ref={headingOne}>{name}</span>
						<Heading level={2} as="span" forwardedRef={headingTwo}>
							{position}
						</Heading>
					</Heading>

					<StyledBannerSocial>
						{social_links.map(({ social_media_type, social_media_url }) => (
							<IconLink
								key={social_media_type}
								href={social_media_url}
								passHref
								aria-label={social_media_type}
								target="_blank"
								rel="noopener noreferrer"
								ref={appendIconsToRef}
								underLine={false}
							>
								{SOCIAL_ICON_MAP[social_media_type]}
							</IconLink>
						))}
					</StyledBannerSocial>
				</StyledBannerLeft>

				<StyledBannerRight>
					<div ref={illustrationWrapper}>
						<Illutration />
					</div>
				</StyledBannerRight>

				<StyledScrollButton
					aria-label="proceed to next section"
					ref={scrollButtonRef}
					onClick={handleScrollToNextSection}
				>
					<StyledScrollIcon>
						<span />
					</StyledScrollIcon>

					<StyledScrollArrows>
						<div>
							<span />
							<span />
						</div>
						<div>
							<span />
							<span />
						</div>
						<div>
							<span />
							<span />
						</div>
					</StyledScrollArrows>
				</StyledScrollButton>
			</StyledBannerInner>
		</StyledCodeBanner>
	);
};

export default HeroBanner;
