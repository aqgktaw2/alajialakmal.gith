import styled from "styled-components";

import Link from "@components/link";

export const PostFooterInner = styled.div`
	width: 100%;
	max-width: 850px;
	padding-left: 4rem;
	padding-right: 4rem;
	margin: 0 auto;
`;

export const FooterLink = styled(Link)`
	white-space: nowrap;
	font-weight: 600;
	font-style: italic;
`;

export const PostFooterActions = styled.div`
	margin-top: 3rem;
	display: flex;
	justify-content: space-between;

	& > a:nth-child(2) {
		margin-left: 2rem;
	}
`;
