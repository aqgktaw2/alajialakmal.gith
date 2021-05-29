import styled, { css } from "styled-components";

export const TechContainer = styled.div`
	${({ theme }) =>
		css`
			${theme.utils.section}
		`}

	padding-top: 20rem;
`;

export const TechHeader = styled.section`
	${({ theme }) =>
		css`
			${theme.utils.container}
		`}

	text-align: center;
	margin-bottom: 5rem;
`;

export const TechPosts = styled.section`
	${({ theme }) =>
		css`
			${theme.utils.container}
		`}

	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 5rem;

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
	}
`;
