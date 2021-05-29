import styled from "styled-components";

import Heading from "@components/heading";
import { StyledContainer } from "@components/container/styles";

export const RecentPostsHeader = styled(StyledContainer)`
	text-align: center;
	margin-bottom: 3rem;
`;

export const StyledHeading = styled(Heading)`
	font-style: italic;
	margin-bottom: 2rem;
`;

export const RecentPostsInner = styled(StyledContainer)`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	column-gap: 3rem;
	row-gap: 5rem;

	@media (max-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 576px) {
		grid-template-columns: 1fr;
	}
`;
