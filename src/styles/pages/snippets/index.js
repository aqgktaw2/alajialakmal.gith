import styled, { css } from "styled-components";

import Link from "@components/link";

export const SnippetsListsing = styled.div`
	${({ theme }) =>
		css`
			${theme.utils.section}
		`}

	padding-top: 20rem;
	padding-bottom: 20rem;
`;

export const SnippetsListsingHeader = styled.div`
	${({ theme }) =>
		css`
			${theme.utils.container}
		`}

	text-align: center;
	margin-bottom: 5rem;

	@media (max-width: 576px) {
		margin-bottom: 1rem;
	}
`;

export const SnippetsListsingInner = styled.div`
	${({ theme }) =>
		css`
			${theme.utils.container}
		`}

	display: grid;
	grid-template-columns: 1.75fr 1fr;
	gap: 5rem;

	@media (max-width: 576px) {
		grid-template-columns: 1fr;
	}
`;

export const SnippetsListsingItems = styled.section`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 1rem;

	@media (max-width: 576px) {
		grid-template-columns: 1fr;
	}
`;

export const SnippetsListsingSidebar = styled.aside`
	@media (max-width: 576px) {
		grid-row: 1 / 2;
		text-align: center;
	}
`;

export const SnippetsListsingTags = styled.div`
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
	display: flex;
	align-items: center;

	svg {
		height: 2rem;
		width: 2rem;
		margin-right: 0.5rem;
	}
`;
