import styled from "styled-components";

import { StyledContainer } from "@components/container/styles";
import { StyledSection } from "@components/section/styles";

export const TopicContainer = styled(StyledSection)`
	padding-top: 20rem;
`;

export const TopicHeader = styled(StyledContainer)`
	text-align: center;
	margin-bottom: 5rem;
`;

export const TopicPosts = styled(StyledContainer)`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 5rem;

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
	}
`;
