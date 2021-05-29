import styled from "styled-components";

export const StyledButton = styled.button`
	display: inline-block;
	width: max-content;
	border: none;
	background-color: transparent;
	font: inherit;
	line-height: 1;
	cursor: pointer;
	border: 1px solid var(--color-text);
	padding: 1rem 2rem;
	box-shadow: 2px 2px 0px 0px var(--color-highlight);
	border-radius: 1px;
	color: var(--color-text);
	font-weight: 600;
	transition: var(--transition-standard);
	background-color: var(--color-background);

	&:hover {
		background-color: var(--color-text);
		color: var(--color-background-alt) !important;
	}

	&:visited {
		color: var(--color-text);
	}

	&:disabled {
		opacity: 0.5;
		cursor: not-allowed;
		&:hover {
			background-color: transparent;
			color: var(--color-text) !important;
		}
	}
`;
