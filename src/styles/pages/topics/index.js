import styled, { css } from "styled-components";

export const TopicContainer = styled.div`
	${({ theme }) =>
		css`
			${theme.utils.section}
		`}

	padding-top: 20rem;
`;

export const TopicHeader = styled.section`
	${({ theme }) =>
		css`
			${theme.utils.container}
		`}

	text-align: center;
	margin-bottom: 5rem;
`;

export const TopicPosts = styled.section`
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
