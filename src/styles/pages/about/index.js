import { StyledSection } from "@components/section/styles";
import TechIcon from "@components/techIcon";
import Timeline from "@components/timeline";
import styled, { css } from "styled-components";

export const AboutPage = styled(StyledSection)`
	padding-top: 20rem;
`;

export const AboutPageInner = styled.div``;

export const StyledTimeline = styled(Timeline)`
	${({ theme }) =>
		css`
			${theme.utils.container}
		`}
`;

export const TechIcons = styled.div`
	margin-top: 2rem;
	display: flex;
	flex-wrap: wrap;
`;

export const StyledTechIcon = styled(TechIcon)`
	margin-top: 1rem;

	&:not(:last-of-type) {
		margin-right: 1rem;
	}
`;
