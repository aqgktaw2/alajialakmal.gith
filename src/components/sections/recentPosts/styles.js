import styled, { css } from "styled-components";

import Heading from "@components/heading";

export const SectionRecentPosts = styled.section`
	${({ theme }) =>
		css`
			${theme.utils.section}
		`}
`;

export const RecentPostsHeader = styled.div`
	${({ theme }) =>
		css`
			${theme.utils.container}
		`}
	text-align: center;
	margin-bottom: 3rem;
`;

export const StyledHeading = styled(Heading)`
	font-style: italic;
	margin-bottom: 2rem;
`;

export const RecentPostsInner = styled.div`
	${({ theme }) =>
		css`
			${theme.utils.container}
		`}
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
