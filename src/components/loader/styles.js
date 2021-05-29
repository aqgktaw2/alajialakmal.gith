import styled from "styled-components";

export const StyledLoader = styled.svg`
	--hue1: 330;
	--hue2: 340;
	--hue3: 350;
	--hue4: 360;
	--sat: 98%;
	--lightness: 90%;

	display: block;
	height: 2.5rem;
	width: 2.5rem;

	circle:nth-of-type(1) {
		fill: hsla(var(--hue1), var(--sat), var(--lightness), 0.2);
		animation: rotateCircle1 1.5s ease-out infinite;
	}

	circle:nth-of-type(2) {
		fill: hsla(var(--hue2), var(--sat), var(--lightness), 0.2);
		animation: rotateCircle2 1.5s ease-out infinite;
	}

	circle:nth-of-type(3) {
		fill: hsla(var(--hue3), var(--sat), var(--lightness), 0.2);
		animation: rotateCircle3 1.5s ease-out infinite;
	}

	circle:nth-of-type(4) {
		fill: hsla(var(--hue4), var(--sat), var(--lightness), 0.2);
		animation: rotateCircle4 1.5s ease-out infinite;
	}

	@keyframes rotateCircle1 {
		0%,
		25% {
			transform: rotate(0deg) translateX(10px) rotate(0deg);
			fill: hsla(var(--hue1), var(--sat) * 0, var(--lightness), 0.2);
		}
		50% {
			fill: hsla(var(--hue1), var(--sat), var(--lightness), 1);
		}
		75%,
		100% {
			transform: rotate(360deg) translateX(10px) rotate(-360deg);
			fill: hsla(var(--hue1), var(--sat) * 0, var(--lightness), 0.2);
		}
	}

	@keyframes rotateCircle2 {
		0%,
		25% {
			transform: rotate(0deg) translateX(-10px) rotate(0deg);
			fill: hsla(var(--hue2), var(--sat) * 0, var(--lightness), 0.2);
		}
		50% {
			fill: hsla(var(--hue2), var(--sat), var(--lightness), 1);
		}
		75%,
		100% {
			transform: rotate(360deg) translateX(-10px) rotate(-360deg);
			fill: hsla(var(--hue2), var(--sat) * 0, var(--lightness), 0.2);
		}
	}

	@keyframes rotateCircle3 {
		0%,
		25% {
			transform: rotate(0deg) translateY(10px) rotate(0deg);
			fill: hsla(var(--hue3), var(--sat) * 0, var(--lightness), 0.2);
		}
		50% {
			fill: hsla(var(--hue3), var(--sat), var(--lightness), 1);
		}
		75%,
		100% {
			transform: rotate(360deg) translateY(10px) rotate(-360deg);
			fill: hsla(var(--hue3), var(--sat) * 0, var(--lightness), 0.2);
		}
	}

	@keyframes rotateCircle4 {
		0%,
		25% {
			transform: rotate(0deg) translateY(-10px) rotate(0deg);
			fill: hsla(var(--hue4), var(--sat) * 0, var(--lightness), 0.2);
		}
		50% {
			fill: hsla(var(--hue4), var(--sat), var(--lightness), 1);
		}
		75%,
		100% {
			transform: rotate(360deg) translateY(-10px) rotate(-360deg);
			fill: hsla(var(--hue4), var(--sat) * 0, var(--lightness), 0.2);
		}
	}
`;
