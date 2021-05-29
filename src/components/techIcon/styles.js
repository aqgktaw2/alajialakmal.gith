import styled from "styled-components";

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
