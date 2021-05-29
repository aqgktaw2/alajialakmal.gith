import Link from "@components/link";
import styled from "styled-components";

export const StyledPostCard = styled.div`
	padding: 2rem;
	border: 1px solid var(--color-text);
	box-shadow: 4px 4px 0px 0px var(--color-highlight);
	background-color: var(--color-background);

	display: flex;
	flex-direction: column;
`;

export const StyledCardImage = styled.div`
	position: relative;

	img {
		object-fit: cover;
	}

	&::after {
		padding-bottom: 50%;
		content: "";
		display: block;
	}
`;

export const StyledCardMeta = styled.div`
	margin-top: 1rem;
	display: flex;
	align-items: center;
`;

export const StyledCardBottom = styled.div`
	margin-top: auto;
`;

export const StyledCardTags = styled.div`
	margin-top: 0;
	display: flex;
	flex-wrap: wrap;
`;

export const TagLink = styled(Link)`
	font-weight: 600;
	font-style: italic;

	&:not(:last-child) {
		margin-right: 1rem;
	}
`;
