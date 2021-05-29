import styled, { css } from "styled-components";

import Link from "@components/link";
import { StyledContainer } from "@components/container/styles";

export const IntroductionSection = styled.section`
	padding-bottom: 5rem;
	text-align: center;
	position: relative;
	z-index: 1;
	overflow: hidden;
	background: linear-gradient(180deg, rgba(7, 0, 11, 1) 0%, rgba(7, 0, 11, 0) 100%);

	${({ transparent }) =>
		transparent &&
		css`
			background: transparent;
			margin-top: initial;
		`}
`;

export const IntroductionHeader = styled(StyledContainer)`
	h2 {
		font-style: italic;
	}
`;

export const IntroductionInner = styled(StyledContainer)`
	p {
		width: 100%;
		max-width: 65rem;
		margin-left: auto;
		margin-right: auto;
		font-size: 2rem;
		margin-bottom: 2rem;
	}
`;

export const IntroductionLink = styled(Link)`
	white-space: nowrap;
	overflow: hidden;
	font-style: italic;
	font-weight: 600;
`;

export const IntroductionLinks = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	a {
		padding: 0.25rem 1rem;
		svg {
			height: 3rem;
			width: 3rem;
			transition: var(--transition-standard);
		}

		&:hover {
			svg {
				color: var(--color-highlight);
			}
		}
	}
`;
