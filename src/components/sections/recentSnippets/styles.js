import styled, { css } from "styled-components";

export const RecentSnippetsSection = styled.section`
	${({ theme }) =>
		css`
			${theme.utils.section}
		`}
`;

export const SnippetsHeader = styled.div`
	${({ theme }) =>
		css`
			${theme.utils.container}
		`}
	text-align: center;
	margin-bottom: 3rem;

	h2 {
		font-style: italic;
		margin-bottom: 2rem;
	}
`;

export const SinppetsInner = styled.div`
	${({ theme }) =>
		css`
			${theme.utils.container}
		`}
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
