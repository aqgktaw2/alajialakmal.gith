import styled, { css } from "styled-components";

export const IntroductionSection = styled.section`
	padding-bottom: 5rem;
	text-align: center;
	position: relative;
	z-index: 1;
	overflow: hidden;
	background: linear-gradient(180deg, rgba(7, 0, 11, 1) 0%, rgba(7, 0, 11, 0) 100%);

	${({ transparent }) => css`
		background: transparent;
		margin-top: initial;
	`}
`;

export const IntroductionHeader = styled.div`
	${({ theme }) =>
		css`
			${theme.utils.container}
		`}

	h2 {
		font-style: italic;
	}
`;

export const IntroductionInner = styled.div`
	${({ theme }) =>
		css`
			${theme.utils.container}
		`}

	p {
		width: 100%;
		max-width: 65rem;
		margin-left: auto;
		margin-right: auto;
		font-size: 2rem;
		margin-bottom: 2rem;

		a {
			${({ theme }) =>
				css`
					${theme.utils.fancyLink}
				`}

			white-space: nowrap;
			overflow: hidden;
			font-style: italic;
			font-weight: 600;
		}
	}
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
