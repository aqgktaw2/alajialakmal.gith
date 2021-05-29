import styled, { css } from "styled-components";

export const RepoContainer = styled.div`
	${({ theme }) =>
		css`
			${theme.utils.section}
		`}

	padding-top: 20rem;
`;

export const RepoHeader = styled.section`
	${({ theme }) =>
		css`
			${theme.utils.container}
		`}

	text-align: center;
	margin-bottom: 5rem;
`;

export const RepoPosts = styled.section`
	${({ theme }) =>
		css`
			${theme.utils.container}
		`}

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
