import styled from "styled-components";

import Link from "@components/link";
import { StyledContainer } from "@components/container/styles";
import { StyledSection } from "@components/section/styles";

export const PostsListsing = styled(StyledSection)`
	padding-top: 20rem;
	padding-bottom: 20rem;
`;

export const PostListingHeader = styled(StyledContainer)`
	text-align: center;
	margin-bottom: 5rem;

	@media (max-width: 576px) {
		margin-bottom: 1rem;
	}
`;

export const PostListingInner = styled(StyledContainer)`
	display: grid;
	grid-template-columns: 2fr 1fr;
	grid-template-columns: 1.75fr 1fr;
	gap: 5rem;

	@media (max-width: 576px) {
		grid-template-columns: 1fr;
	}
`;

export const PostListsingItems = styled.section`
	display: grid;
	gap: 5rem;
`;

export const PostListingSidebar = styled.aside`
	@media (max-width: 576px) {
		grid-row: 1 / 2;
		text-align: center;
	}
`;

export const PostListingTags = styled.div`
	display: flex;
	flex-wrap: wrap;

	@media (max-width: 576px) {
		justify-content: center;
	}
`;

export const TagLink = styled(Link)`
	font-weight: 600;
	font-style: italic;
	padding: 0.25rem 0.5rem;
`;
