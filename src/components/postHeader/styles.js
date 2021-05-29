import styled from "styled-components";

import Author from "@components/author";
import { StyledContainer } from "@components/container/styles";

export const StyledPostHeader = styled.div`
	position: relative;
	padding: 25rem 0 15rem;

	@media (max-width: 576px) {
		padding: 20rem 0 10rem;
	}
`;

export const StyledPostCover = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;

	&::after {
		content: "";
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		background: radial-gradient(
			ellipse,
			rgba(38, 0, 62, 0.85) 0%,
			rgba(7, 0, 11, 0.95) 35%,
			rgba(7, 0, 11, 1) 75%
		);
	}

	& > div {
		height: 100%;

		img {
			object-fit: cover;
		}
	}
`;

export const StyledHeaderContent = styled(StyledContainer)`
	width: 100%;
	height: 100%;
	position: relative;
	z-index: 1;
	min-height: 25rem;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	h1 {
		width: 100%;
		max-width: 850px;
		text-align: center;
	}
`;

export const StyledHeaderMeta = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 2rem;

	@media (max-width: 576px) {
		flex-direction: column;
		align-items: center;

		& > *:not(:last-of-type) {
			margin-bottom: 1rem;
		}
	}

	& > div:last-of-type {
		display: flex;
		align-items: center;
		margin-left: 0.5rem;

		& > span {
			@media (max-width: 576px) {
				display: none;
			}
		}

		svg {
			height: 2rem;
			width: 2rem;
			margin: 0 0.25rem 0 0.5rem;
		}
	}
`;

export const HeaderAuthor = styled(Author)`
	/* margin-right: 0; */
`;
