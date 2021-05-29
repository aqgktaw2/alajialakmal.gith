import styled from "styled-components";

import { StyledContainer } from "@components/container/styles";

export const SnippetsHeader = styled(StyledContainer)`
	text-align: center;
	margin-bottom: 3rem;

	h2 {
		font-style: italic;
		margin-bottom: 2rem;
	}
`;

export const SinppetsInner = styled(StyledContainer)`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 2rem;

	@media (max-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 576px) {
		grid-template-columns: 1fr;
	}
`;
