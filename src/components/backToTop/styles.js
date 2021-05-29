import styled, { css } from "styled-components";

export const StyledBackToTop = styled.button`
	position: fixed;
	bottom: 5rem;
	right: 5rem;
	height: 5rem;
	width: 5rem;
	box-shadow: 0 0 0 1px var(--color-highlight);
	cursor: pointer;
	color: var(--color-text);
	display: flex;
	background-color: var(--color-background-alt);
	z-index: 0;
	opacity: 0;
	transform: translateY(25px);
	visibility: hidden;
	pointer-events: none;
	transition: var(--transition-standard);

	@media (max-width: 576px) {
		bottom: 10rem;
		right: 3.5rem;
	}

	svg {
		margin: auto;
		width: 3.75rem;
		height: 3.75rem;
	}

	${({ show }) =>
		show &&
		css`
			z-index: 999;
			opacity: 1;
			transform: translateY(0);
			visibility: visible;
			pointer-events: all;
		`}
`;
