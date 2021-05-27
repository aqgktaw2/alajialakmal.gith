import styled, { css, keyframes } from "styled-components";

export const StyledCodeBanner = styled.section`
	${({ theme }) =>
		css`
			${theme.utils.section}
		`}

	min-height: 100vh;
	min-height: calc(var(--vh, 1vh) * 100);
	position: relative;
	overflow: hidden;
	background: var(--color-background);
	background: radial-gradient(ellipse, rgba(17, 0, 28, 0.25) 5%, rgba(7, 0, 11, 1) 35%);
`;

export const StyledBannerInner = styled.div`
	${({ theme }) =>
		css`
			${theme.utils.container}
		`}

	align-items: center;
	position: relative;
	z-index: 1;

	display: flex;

	min-height: calc(100% - 10rem);
	min-height: calc((var(--vh, 1vh) * 100) - 10rem);

	& > * {
		flex: 1;
	}

	@media (max-width: 768px) {
		flex-direction: column;
		justify-content: center;
	}
`;

export const StyledBannerLeft = styled.div`
	margin-bottom: 5rem;
	position: relative;
	display: flex;
	flex-direction: column;

	@media (max-width: 768px) {
		justify-content: flex-end;
		margin-bottom: 3rem;
		text-align: center;
		margin-top: 12rem;

		@media (min-height: 925px) {
			margin-bottom: 9rem;
		}
	}

	h1 {
		font-style: italic;

		& > span {
			display: block;
		}

		& > span.h1 {
			@media (max-width: 365px) {
				font-size: 4rem;
			}
		}

		& > span.h2 {
			margin-top: 0;
		}
	}
`;

export const StyledBannerSocial = styled.div`
	display: flex;
	margin-left: -1rem;

	@media (max-width: 768px) {
		justify-content: center;
		margin-left: initial;
	}

	a {
		padding: 1rem;
		color: var(--color-text);
		transition: var(--transition-standard);

		&:hover {
			color: var(--color-highlight);
		}

		&:not(:last-child) {
			margin-right: 1rem;
		}
	}
`;

export const StyledBannerRight = styled.div`
	position: relative;
	z-index: 5;

	@media (max-width: 768px) {
		margin-bottom: 5rem;
	}

	& > div {
		width: 100%;
		max-width: 450px;
		margin-left: auto;

		@media (max-width: 768px) {
			width: 90%;
			margin-right: auto;
		}
	}
`;

const floatingAnim = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(20px);
  }
`;

const blippingAnim = keyframes`
  0% {
    opacity: 0.3;
  }
  100% {
    opacity: 0.1;
  }
`;

export const StyledIllustration = styled.svg`
	width: 100%;
	height: auto;

	#background-illustration {
		#Msg {
			animation: ${floatingAnim} 3s infinite alternate;
		}
		#BtnLeft {
			animation: ${floatingAnim} 3s 1s infinite alternate;
		}
		#BtnRight {
			animation: ${floatingAnim} 3s 2s infinite backwards alternate;
		}
		#Plus {
			animation: ${blippingAnim} 3s infinite alternate;
		}
	}
`;

export const StyledScrollButton = styled.button`
	position: absolute;
	left: 50%;
	bottom: 0;
	transform: translate3d(-50%, 25%, 0) scale(0.75);
	cursor: pointer;
	z-index: 0;
	padding: 0 1rem;
	opacity: 0;

	&:hover {
		transform: translate3d(-50%, 25%, 0) scale(0.8);
	}
`;

const scrollWheelAnim = keyframes`
  0% {
    margin-top: 2px;
    opacity: 0;
  }
  30% {
    opacity: 1;
  }
  100% {
    margin-top: 20px;
    opacity: 0;
  }
`;

export const StyledScrollIcon = styled.div`
	width: 25px;
	height: 45px;
	border: 2px solid rgba(255, 250, 254, 0.9);
	border-radius: 15px;
	position: relative;
	text-align: center;
	margin: 10px auto;
	background-color: var(--color-background);

	& > span {
		height: 6px;
		margin: 2px auto 0;
		display: block;
		width: 3px;
		background-color: rgba(255, 250, 254, 0.9);
		border-radius: 50%;
		animation: 1.6s ease infinite ${scrollWheelAnim};
	}
`;

const opacityAnim = keyframes`
  0% {
    opacity: 0.3;
  }
  100% {
    opacity: 0.1;
  }
`;

export const StyledScrollArrows = styled.div`
	margin: 0 auto;
	width: 16px;
	position: relative;

	& > div {
		position: relative;
		display: block;
		height: 10px;
		animation: 1s infinite;
		animation-name: ${opacityAnim};
		opacity: 0.25;

		&:nth-child(1) {
			animation-delay: 0;
		}

		&:nth-child(2) {
			animation-delay: 0.25s;
		}

		&:nth-child(3) {
			animation-delay: 0.5s;
		}

		& > span {
			position: absolute;
			display: block;
			width: 10px;
			height: 2px;
			background-color: rgba(255, 250, 254, 0.9);

			&:nth-child(2n-1) {
				left: 0px;
				transform: rotate(45deg);
			}

			&:nth-child(2n) {
				right: 0px;
				transform: rotate(-45deg);
			}
		}
	}
`;
