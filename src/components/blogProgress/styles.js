import styled from "styled-components";

export const StyledProgress = styled.div`
	position: fixed;
	z-index: 99999;
	top: 0;
	left: 0;
	height: 0.75rem;
	width: var(--progress);
	border-radius: 100rem;
	background-color: var(--color-highlight-alt);
	background: linear-gradient(90deg, var(--color-highlight) 24%, var(--color-highlight-alt) 72%);
	transition: var(--transition-standard);
`;
