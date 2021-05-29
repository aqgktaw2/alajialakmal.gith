import Link from "@components/link";
import styled, { keyframes, css } from "styled-components";

export const StyledFooter = styled.footer`
	--waves-lower-height: 475px;

	@media (max-width: 768px) {
		--waves-lower-height: 650px;
	}

	position: relative;
	overflow-x: hidden;
	min-height: calc(var(--waves-lower-height) + 200px);
`;

export const StyledFooterContent = styled.div`
	position: absolute;
	z-index: 2;
	bottom: 0;
	left: 0;
	width: 100%;
`;

export const StyledFooterTop = styled.div`
	${({ theme }) =>
		css`
			${theme.utils.container}
		`}

	padding-bottom: 3rem;
	display: flex;
	align-items: center;

	@media (max-width: 768px) {
		flex-direction: column;
	}

	& > * {
		flex: 1;
	}
`;

export const StyledFooterLeft = styled.div`
	margin-right: 3rem;

	@media (max-width: 768px) {
		margin-right: initial;
		margin-bottom: 3rem;
	}
`;

export const StyledFooterRight = styled.div`
	display: flex;

	@media (max-width: 768px) {
		width: 100%;
		max-width: 450px;
		justify-content: space-between;
	}

	& > * {
		flex: 1;
	}
`;

export const StyledSiteLinks = styled.div`
	h2 {
		margin-bottom: 2rem;
	}

	ul {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	li {
		&:not(:last-child) {
			margin-bottom: 1.5rem;
		}
	}
`;

export const StyledFooterBottom = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-bottom: 3rem;

	ul {
		display: flex;
		list-style: none;
		padding: 0;
		margin: 0;
		font-size: 1.25rem;

		li:not(:last-of-type) {
			margin-right: 1rem;
		}
	}
`;

export const FeedLink = styled(Link)`
	display: flex;
	align-items: center;

	svg {
		margin-right: 0.5rem;
	}
`;

const wave = keyframes`
	0% {
    margin-left: 0;
  }
  100% {
    margin-left: -1600px;
  }
`;

const swell = keyframes`
  0%,
  100% {
    transform: translate3d(0, -25px, 0);
  }
  50% {
    transform: translate3d(0, 5px, 0);
  }
`;

export const StyledFooterWaves = styled.footer`
	height: var(--waves-lower-height);
	width: 100%;
	position: absolute;
	bottom: 0;
	left: 0;
	background: #1a002a;

	&::before {
		content: "";
		display: block;
		background: url("/assets/footer/wave.svg") repeat-x;
		position: absolute;
		z-index: 1;
		bottom: calc(var(--waves-lower-height) - 15px);
		width: 6400px;
		height: 198px;
		animation: ${wave} 12s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
		transform: translate3d(0, 0, 0);
	}

	&::after {
		content: "";
		display: block;
		bottom: calc(var(--waves-lower-height) - 30px);
		animation: ${wave} 12s cubic-bezier(0.36, 0.45, 0.63, 0.53) -0.125s infinite,
			${swell} 12s ease -1.25s infinite;
		opacity: 1;
	}
`;
