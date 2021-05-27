import styled from "styled-components";

import Link from "@components/link";

export const StyledProjectCard = styled.div`
	padding: 2rem;
	display: flex;
	border: 1px solid var(--color-text);
	box-shadow: 4px 4px 0px 0px var(--color-highlight);
	background-color: var(--color-background);
`;

export const StyledProjectInfo = styled.div`
	flex: 0.75;
	display: flex;
	flex-direction: column;
	margin-right: 1rem;
`;

export const InfoLink = styled(Link)`
	font-weight: 600;
	font-style: italic;

	svg {
		width: 1.5rem;
		margin-left: 0.5rem;
	}
`;

export const StyledProjectActions = styled.div`
	margin-top: auto;
`;

export const StyledProjectTech = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin: 2rem 0;
`;

export const TechIconWrapper = styled.div`
	width: 3.75rem;
	height: 3.75rem;
	display: flex;
	background-color: var(--color-text);
	box-shadow: 0 0 0 2px var(--color-highlight);
	transform: scale(1) translate3d(0, 0, 0);
	backface-visibility: hidden;
	transition: var(--transition-standard);

	&:hover {
		transform: scale(1.05) translate3d(0, 0, 0);
	}

	& > svg {
		margin: auto;
		width: 2.75rem;
	}
`;

export const TechLink = styled(Link)`
	margin-bottom: 1rem;

	&:not(:last-of-type) {
		margin-right: 1rem;
	}
`;

export const StyledProjectImage = styled.div`
	flex: 1;
	position: relative;
	overflow-y: hidden;

	img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		transition: 5.5s 0.1s ease;
		object-fit: cover;
	}

	&::after {
		content: "";
		display: block;
		padding-bottom: 200%;
	}

	${StyledProjectCard}:hover & img {
		transform: translateY(-50%);
	}
`;
