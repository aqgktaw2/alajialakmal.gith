import styled from "styled-components";

export const StyledImage = styled.div`
	width: 100%;
	position: relative;

	img {
		object-fit: cover;
	}

	&::after {
		content: "";
		display: block;
		padding-bottom: var(--aspectRatio);
	}
`;
