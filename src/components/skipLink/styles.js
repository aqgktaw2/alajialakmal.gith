import styled from "styled-components";

export const StyledSkipLink = styled.a`
	display: block;
	padding: 1rem;
	margin: 1rem;
	width: max-content;
	position: fixed;
	z-index: 1001;
	top: 0;
	left: 0;
	transition: var(--transition-standard);
	transform: translate3d(0, calc(-100% - 2rem), 0);

	&:focus {
		transform: translate3d(0, 0, 0);
	}
`;
