import styled, { css } from "styled-components";

export const RecentProjectsSection = styled.section`
	${({ theme }) =>
		css`
			${theme.utils.section}
		`}
`;

export const RecentProjectsHeader = styled.div`
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

export const RecentProjectsInner = styled.div`
	${({ theme }) =>
		css`
			${theme.utils.container}
		`}
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	column-gap: 3rem;
	row-gap: 5rem;

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
	}
`;
