import { StyledHeading } from "@components/heading/styles";
import styled, { css } from "styled-components";

export const StyledEmbeded = styled.section`
	${({ theme }) =>
		css`
			${theme.utils.section}
		`}
`;

export const StyledEmbededInner = styled.div`
	${({ theme }) =>
		css`
			${theme.utils.container}
		`}

	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 5rem;

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
	}
`;

export const EmbedHeading = styled(StyledHeading)`
	text-align: center;
	margin-bottom: 3rem;
	font-style: italic;
`;

const embed = css`
	position: relative;
	border: 1px solid var(--color-text);
	box-shadow: 4px 4px 0px 0px var(--color-highlight);
	background-color: var(--color-background);
	overflow: hidden;

	& > iframe {
		position: absolute !important;
		top: 0 !important;
		left: 0 !important;
		width: 100% !important;
		height: 100% !important;
	}

	&::after {
		content: "";
		display: block;
		padding-bottom: 100%;
	}
`;

export const StyledTwitterEmbed = styled.div`
	& > div {
		${embed}
	}
`;

export const StyledSpotifyEmbed = styled.div`
	${embed}
`;
