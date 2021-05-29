import Timeline from "@components/timeline";
import styled, { css } from "styled-components";

export const AboutPage = styled.div`
	${({ theme }) =>
		css`
			${theme.utils.section}
		`}

	padding-top: 20rem;
`;

export const AboutPageInner = styled.div``;

export const StyledTimeline = styled(Timeline)`
	${({ theme }) =>
		css`
			${theme.utils.container}
		`}
`;

export const TechIcons = styled.div`
	margin-top: 2rem;
	display: flex;
	flex-wrap: wrap;

	& > span {
		&:not(:last-child) {
			margin-right: 1rem;
		}

		margin-bottom: 1rem;
		display: block;
		background: var(--color-text);
		padding: 0.5rem;
		display: flex;
		box-shadow: 0 0 0 2px var(--color-highlight);

		& > svg {
			margin: auto;
			width: 3rem;
			height: 3rem;
		}
	}
`;
