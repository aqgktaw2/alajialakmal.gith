import { StyledHeading } from "@components/heading/styles";
import styled from "styled-components";

export const StyledSnippetCard = styled.div`
	position: relative;
	padding: 4.5rem;
`;

export const StyledShape = styled.div`
	position: absolute;
	left: 0;
	width: 100%;
	top: 0;
	height: 100%;
	transition: var(--transition-standard);

	svg {
		width: 100%;
		height: auto;
	}

	${StyledSnippetCard}:hover > & {
		transform: rotate(15deg);
	}
`;

export const StyledSnippetBody = styled.a`
	display: block;
	border-radius: 15px;
	overflow: hidden;
	box-shadow: 0 0 0 4px var(--color-highlight);
	position: relative;
	z-index: 1;
	transition: var(--transition-standard);

	${StyledSnippetCard}:hover > & {
		transform: scale(1.1);
	}
`;

export const StyledSnippetInfo = styled.div`
	position: absolute;
	left: 0;
	bottom: 0;
	width: 100%;
	background-color: rgba(7, 0, 11, 0.5);
	text-align: center;
`;

export const SnippetHeading = styled(StyledHeading)`
	margin: 0.5rem 0;
`;
