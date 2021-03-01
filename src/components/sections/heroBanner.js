import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";

import userBannerCanvasAnim from "@/hooks/useBannerCanvasAnim";
import { SOCIAL_ITEMS } from "@/lib/constants";

const HeroBanner = () => {
	userBannerCanvasAnim();

	const headingOne = useRef();
	const headingTwo = useRef();
	const illustrationWrapper = useRef();

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
			.set(".section-code-banner__social a", { y: 50, opacity: 0, transition: "initial" })
			.set(".section-code-banner__mouse", { opacity: 0 })
			.set(".section-code-banner__inner", { opacity: 1 })
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
				".section-code-banner__social a",
				{
					y: 0,
					opacity: 1,
					stagger: 0.15,
					onComplete() {
						document
							.querySelectorAll(".section-code-banner__social a")
							.forEach(a => (a.style.transition = "var(--transition)"));
					},
				},
				3.1,
			)
			.to(".section-code-banner__mouse", { opacity: 1 }, "-=1.05");
	}, []);

	const handleScrollToNextSection = () => {
		const heroBannerHeight = [...document.querySelectorAll("section")][0].getBoundingClientRect()
			.height;
		const headerHeight = document.querySelector(".global-header").getBoundingClientRect().height;
		window.scrollTo({
			top: heroBannerHeight - headerHeight,
			behavior: "smooth",
		});
	};

	return (
		<section className="section-code-banner">
			<canvas className="section-code-banner__background" />
			<div className="section-code-banner__inner" style={{ opacity: 0 }}>
				<div className="section-code-banner__left">
					<h1 ref={headingOne}>Denny Hong</h1>
					<h2 ref={headingTwo}>Web & JavaScript Developer</h2>
					<div className="section-code-banner__social">
						{SOCIAL_ITEMS.map(({ href, icon, label }, idx) => (
							<Link key={idx} href={href} passHref>
								<a aria-label={label} target="_blank" rel="noopener noreferrer">
									{icon}
								</a>
							</Link>
						))}
					</div>
				</div>

				<div className="section-code-banner__right">
					<div className="section-code-banner__right-inner" ref={illustrationWrapper}>
						<SvgIllustration />
					</div>
				</div>

				<button
					aria-label="proceed to next section"
					className="section-code-banner__mouse"
					onClick={handleScrollToNextSection}
				>
					<div className="section-code-banner__mouse-icon">
						<span className="section-code-banner__mouse-wheel" />
					</div>
					<div className="section-code-banner__arrows">
						<div className="section-code-banner__arrow">
							<span />
							<span />
						</div>
						<div className="section-code-banner__arrow">
							<span />
							<span />
						</div>
						<div className="section-code-banner__arrow">
							<span />
							<span />
						</div>
					</div>
				</button>
			</div>
		</section>
	);
};

export default HeroBanner;

const SvgIllustration = props => (
	<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 730 830" {...props}>
		<g id="background-illustrationWrapper">
			<path
				id="Vector"
				fill="url(#paint0_linear)"
				d="M729.7 452.537c-12.7-7.4-21.9-7.6-27.6-.6-5.7 6.9-8.5 18.6-8.5 35.1v88.9c0 16.9-1.6 30.9-4.7 42-3.1 11.5-8.4 19.7-15.7 24.5-7.1 4.9-16.7 6.2-28.9 3.9-11.9-2.2-26.8-8.4-44.6-18.7l-8.5-4.9v-70l10.6 6.1c12.7 7.4 21.2 8.3 25.5 2.9 4.5-5.2 6.8-16.1 6.8-32.6v-78.3c0-20.4 2-36.5 6-48.4 4-11.9 11.9-19.4 23.8-22.8-11.9-17.1-19.8-33.8-23.8-50.2-4-16.4-5.9-34.8-5.9-55.2v-78.3c0-16.5-2.3-29.9-6.8-40.4-4.2-10.3-12.7-19.1-25.5-26.5l-10.6-6.1v-70l8.5 4.9c17.8 10.3 32.7 21.2 44.6 32.8 12.2 11.7 21.8 24.2 28.9 37.3 7.4 13.3 12.6 27.5 15.7 42.6 3.1 14.7 4.7 30.6 4.7 47.4v88.9c0 16.5 2.8 31.5 8.5 44.9 5.7 13.5 14.9 23.9 27.6 31.2l-.1 69.6z"
				opacity="0.07"
			></path>
			<path
				id="Vector_2"
				fill="url(#paint1_linear)"
				d="M407.2 195.037c12.7 7.4 21.9 7.6 27.6.6 5.7-6.9 8.5-18.6 8.5-35.1v-88.9c0-16.9 1.6-30.9 4.7-42 3.1-11.5 8.2-19.8 15.3-24.7 7.4-4.8 17-6.1 28.9-3.9 12.2 2.3 27.2 8.6 45 18.9l8.5 4.9v70l-10.6-6.1c-12.7-7.4-21.4-8.4-25.9-3.2-4.2 5.4-6.4 16.3-6.4 32.8v78.3c0 20.4-2 36.5-6 48.4-4 11.8-11.9 19.4-23.8 22.8 11.9 17.1 19.8 33.8 23.8 50.2 4 16.4 5.9 34.8 5.9 55.2v78.3c0 16.5 2.1 29.9 6.4 40.2 4.5 10.5 13.2 19.4 25.9 26.7l10.6 6.1v70l-8.5-4.9c-17.8-10.3-32.8-21.3-45-33-11.9-11.6-21.5-24-28.9-37.3-7.1-13.1-12.2-27.2-15.3-42.4-3.1-14.7-4.7-30.6-4.7-47.4v-88.9c0-16.5-2.8-31.5-8.5-44.9-5.7-13.5-14.9-23.9-27.6-31.2l.1-69.5z"
				opacity="0.07"
			></path>
			<path
				id="Vector_3"
				fill="url(#paint2_linear)"
				d="M689.7 482.537c-12.7-7.4-21.9-7.6-27.6-.6-5.7 6.9-8.5 18.6-8.5 35.1v88.9c0 16.9-1.6 30.9-4.7 42-3.1 11.5-8.4 19.7-15.7 24.5-7.1 4.9-16.7 6.2-28.9 3.9-11.9-2.2-26.8-8.4-44.6-18.7l-8.5-4.9v-70l10.6 6.1c12.7 7.4 21.2 8.3 25.5 2.9 4.5-5.2 6.8-16.1 6.8-32.6v-78.3c0-20.4 2-36.5 6-48.4 4-11.9 11.9-19.4 23.8-22.8-11.9-17.1-19.8-33.8-23.8-50.2-4-16.4-5.9-34.8-5.9-55.2v-78.3c0-16.5-2.3-29.9-6.8-40.4-4.2-10.3-12.7-19.1-25.5-26.5l-10.6-6.1v-70l8.5 4.9c17.8 10.3 32.7 21.2 44.6 32.8 12.2 11.7 21.8 24.2 28.9 37.3 7.4 13.3 12.6 27.5 15.7 42.6 3.1 14.7 4.7 30.6 4.7 47.4v88.9c0 16.5 2.8 31.5 8.5 44.9 5.7 13.5 14.9 23.9 27.6 31.2l-.1 69.6z"
				opacity="0.4"
			></path>
			<path
				id="Vector_4"
				fill="url(#paint3_linear)"
				d="M367.2 225.037c12.7 7.4 21.9 7.6 27.6.6 5.7-6.9 8.5-18.6 8.5-35.1v-88.9c0-16.9 1.6-30.9 4.7-42 3.1-11.5 8.2-19.8 15.3-24.7 7.4-4.8 17-6.1 28.9-3.9 12.2 2.3 27.2 8.6 45 18.9l8.5 4.9v70l-10.6-6.1c-12.7-7.4-21.4-8.4-25.9-3.2-4.2 5.4-6.4 16.3-6.4 32.8v78.3c0 20.4-2 36.5-6 48.4-4 11.8-11.9 19.4-23.8 22.8 11.9 17.1 19.8 33.8 23.8 50.2 4 16.4 5.9 34.8 5.9 55.2v78.3c0 16.5 2.1 29.9 6.4 40.2 4.5 10.5 13.2 19.4 25.9 26.7l10.6 6.1v70l-8.5-4.9c-17.8-10.3-32.8-21.3-45-33-11.9-11.6-21.5-24-28.9-37.3-7.1-13.1-12.2-27.2-15.3-42.4-3.1-14.7-4.7-30.6-4.7-47.4v-88.9c0-16.5-2.8-31.5-8.5-44.9-5.7-13.5-14.9-23.9-27.6-31.2l.1-69.5z"
				opacity="0.4"
			></path>
			<path
				id="Vector_5"
				fill="url(#paint4_linear)"
				d="M145.2 12.237l170.9 98.7-.1 409.3-170.9-98.7.1-409.3z"
				opacity="0.15"
			></path>
			<path id="BtnLeft" fill="#a30292" d="M113.1 75.137l135.9 78.5v37.7l-135.9-78.5v-37.7z"></path>
			<path
				id="Vector_6"
				fill="#fff"
				d="M166.3 238.737l130.6 75.4v58.6l-130.6-75.4v-58.6z"
				opacity="0.15"
			></path>
			<path
				id="Vector_7"
				fill="#fff"
				d="M166.2 167.837l130.8 75.5v13.6l-130.8-75.4v-13.7z"
				opacity="0.15"
			></path>
			<path
				id="Vector_8"
				fill="#fff"
				d="M166.2 194.437l113.1 65.3v13.6l-113.1-65.3v-13.6z"
				opacity="0.15"
			></path>
			<path
				id="Vector_9"
				fill="url(#paint5_linear)"
				d="M145.2 12.237l170.9 98.7v54.9l-170.9-98.7v-54.9z"
				opacity="0.2"
			></path>
			<path
				id="Vector_10"
				fill="#fff"
				d="M187.9 64.637c0 8.3-4.9 12.2-10.9 8.8-6-3.5-10.8-13-10.8-21.3s4.9-12.2 10.9-8.8c5.9 3.5 10.8 13 10.8 21.3z"
				opacity="0.2"
			></path>
			<path
				id="Vector_11"
				fill="url(#paint6_linear)"
				d="M355.2 391.737l170.9 98.7-.1 409.3-170.9-98.7.1-409.3z"
				opacity="0.15"
			></path>
			<path id="BtnRight" fill="#a30292" d="M335 450 l135.9 78.4v37.6l-136-78.4.1-37.6z"></path>
			<path
				id="Vector_12"
				fill="#fff"
				d="M376.3 549.737l130.7 75.5v58.5l-130.7-75.5v-58.5z"
				opacity="0.15"
			></path>
			<path
				id="Vector_13"
				fill="#fff"
				d="M376.1 633.337l130.8 75.5v13.6l-130.8-75.4v-13.7z"
				opacity="0.15"
			></path>
			<path
				id="Vector_14"
				fill="#fff"
				d="M376.1 657.937l113.1 65.3v13.6l-113.1-65.3v-13.6z"
				opacity="0.15"
			></path>
			<path
				id="Vector_15"
				fill="url(#paint7_linear)"
				d="M355.2 391.737l170.9 98.7v54.9l-170.9-98.7v-54.9z"
				opacity="0.2"
			></path>
			<path
				id="Vector_16"
				fill="#fff"
				d="M397.9 444.237c0 8.3-4.9 12.2-10.9 8.8-6-3.5-10.8-13-10.8-21.3s4.9-12.2 10.9-8.8c5.9 3.4 10.8 13 10.8 21.3z"
				opacity="0.2"
			></path>
			<g id="Msg">
				<path
					id="Vector_17"
					fill="url(#paint8_linear)"
					d="M325.6 448.437l-297.5-171.7.1 155.1 271.3 156.6 26.3 38.9-.2-178.9z"
					opacity="0.3"
				></path>
				<path
					id="Vector_18"
					fill="#fff"
					d="M249.1 442.037l-65.2-37.6v13.6l65.2 37.6v-13.6z"
					opacity="0.15"
				></path>
				<path
					id="Vector_19"
					fill="#fff"
					d="M249.1 469.337l-161.4-93.2v13.6l161.5 93.2-.1-13.6z"
					opacity="0.15"
				></path>
				<path
					id="Vector_20"
					fill="#fff"
					d="M249.2 496.637l-194.9-112.5v13.6l194.9 112.5v-13.6z"
					opacity="0.15"
				></path>
				<path
					id="Vector_21"
					fill="#a30292"
					d="M265.2 465.537c0 12.8 7.6 27.5 16.9 32.9 9.3 5.4 16.9-.6 16.9-13.4s-7.6-27.5-16.9-32.9c-9.4-5.4-16.9.6-16.9 13.4z"
				></path>
			</g>
			<path
				id="Vector_22"
				fill="#fff"
				d="M57.5 167.837l-39.4-22.8v-13.3l39.4 22.8c3.2 1.9 7.9 5.6 11.9 11.4 4.3 6.2 7.4 14 7.4 22.5 0 9.4-2.4 14.7-6.9 16.3-4.3 1.4-9.3-1-12.4-2.8l-16.2-9.4-.1-.1c-1.4-.8-3.6-1.6-5.3-1.1-1.4.4-3.1 1.9-3.1 7.1 0 5.2 1.6 8.4 3 10.3 1.7 2.4 3.9 4.1 5.3 4.8l.2.1 49.6 28.6v13.3l-49.3-28.5c-3.4-1.8-8.3-5.5-12.5-11.4-4.6-6.5-7.8-14.7-7.8-23.9 0-9.1 3.2-13.8 7.7-15.1 4.2-1.2 9.1.6 12.5 2.6l16.1 9.3c2.3 1.3 4.1 1.9 5.2 1.5.9-.3 2.5-1.6 2.5-8.3 0-4.4-1.4-7.2-2.8-9.2-1.6-2.2-3.7-4-5-4.7z"
				opacity="0.15"
			></path>
			<path
				id="Vector_23"
				fill="#a30292"
				d="M29.8 146.437c0 11.4-6.7 16.7-14.9 12-8.2-4.7-14.9-17.8-14.9-29.2 0-11.4 6.7-16.7 14.9-12 8.2 4.8 14.9 17.9 14.9 29.2z"
			></path>
			<path
				id="Vector_24"
				fill="#a30292"
				d="M108.8 256.437c0 11.4-6.7 16.7-14.9 12-8.2-4.7-14.9-17.8-14.9-29.2 0-11.4 6.7-16.7 14.9-12 8.2 4.8 14.9 17.9 14.9 29.2z"
			></path>
			<path
				id="Plus"
				fill="url(#paint9_linear)"
				d="M215.1 604.137c6 3.5 10.8 11.8 10.8 18.8v30.5l20.2 11.6c6 3.5 10.8 11.8 10.8 18.8 0 6.9-4.9 9.7-10.8 6.3l-20.2-11.6v30.5c0 6.9-4.9 9.7-10.8 6.3-6-3.5-10.8-11.8-10.8-18.8v-30.5l-20.2-11.6c-6-3.5-10.8-11.8-10.8-18.8 0-6.9 4.9-9.7 10.8-6.3l20.2 11.6v-30.5c0-7 4.8-9.8 10.8-6.3z"
				opacity="0.2"
			></path>
		</g>
		<defs>
			<linearGradient
				id="paint0_linear"
				x1="792.614"
				x2="545.984"
				y1="73.156"
				y2="500.603"
				gradientUnits="userSpaceOnUse"
			>
				<stop stopColor="#fff"></stop>
				<stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
			</linearGradient>
			<linearGradient
				id="paint1_linear"
				x1="674.027"
				x2="427.396"
				y1="2.884"
				y2="430.332"
				gradientUnits="userSpaceOnUse"
			>
				<stop stopColor="#fff"></stop>
				<stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
			</linearGradient>
			<linearGradient
				id="paint2_linear"
				x1="752.614"
				x2="505.984"
				y1="103.156"
				y2="530.603"
				gradientUnits="userSpaceOnUse"
			>
				<stop stopColor="#fff"></stop>
				<stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
			</linearGradient>
			<linearGradient
				id="paint3_linear"
				x1="634.026"
				x2="387.396"
				y1="32.884"
				y2="460.332"
				gradientUnits="userSpaceOnUse"
			>
				<stop stopColor="#fff"></stop>
				<stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
			</linearGradient>
			<linearGradient
				id="paint4_linear"
				x1="319.201"
				x2="155.933"
				y1="112.69"
				y2="395.554"
				gradientUnits="userSpaceOnUse"
			>
				<stop stopColor="#fff"></stop>
				<stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
			</linearGradient>
			<linearGradient
				id="paint5_linear"
				x1="203.837"
				x2="255.85"
				y1="13.073"
				y2="160.55"
				gradientUnits="userSpaceOnUse"
			>
				<stop stopColor="#fff"></stop>
				<stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
			</linearGradient>
			<linearGradient
				id="paint6_linear"
				x1="529.193"
				x2="365.925"
				y1="492.215"
				y2="775.079"
				gradientUnits="userSpaceOnUse"
			>
				<stop stopColor="#fff"></stop>
				<stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
			</linearGradient>
			<linearGradient
				id="paint7_linear"
				x1="413.829"
				x2="465.842"
				y1="392.598"
				y2="540.075"
				gradientUnits="userSpaceOnUse"
			>
				<stop stopColor="#fff"></stop>
				<stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
			</linearGradient>
			<linearGradient
				id="paint8_linear"
				x1="260.732"
				x2="107.081"
				y1="386.369"
				y2="506.673"
				gradientUnits="userSpaceOnUse"
			>
				<stop stopColor="#fff"></stop>
				<stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
			</linearGradient>
			<linearGradient
				id="paint9_linear"
				x1="235.959"
				x2="183.587"
				y1="643.1"
				y2="684.405"
				gradientUnits="userSpaceOnUse"
			>
				<stop stopColor="#fff"></stop>
				<stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
			</linearGradient>
		</defs>
	</svg>
);
