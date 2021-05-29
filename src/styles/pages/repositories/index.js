import styled from "styled-components";

import { StyledContainer } from "@components/container/styles";
import { StyledSection } from "@components/section/styles";

export const RepoContainer = styled(StyledSection)`
	padding-top: 20rem;
`;

export const RepoHeader = styled(StyledContainer)`
	text-align: center;
	margin-bottom: 5rem;
`;

export const RepoPosts = styled(StyledContainer)`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 5rem;

	@media (max-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 576px) {
		grid-template-columns: 1fr;
	}
`;
