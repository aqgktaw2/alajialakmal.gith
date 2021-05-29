import styled from "styled-components";

import { StyledContainer } from "@components/container/styles";

export const RecentProjectsHeader = styled(StyledContainer)`
	text-align: center;
	margin-bottom: 3rem;

	h2 {
		font-style: italic;
		margin-bottom: 2rem;
	}
`;

export const RecentProjectsInner = styled(StyledContainer)`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	column-gap: 3rem;
	row-gap: 5rem;

	@media (max-width: 576px) {
		grid-template-columns: 1fr;
	}
`;
