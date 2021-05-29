import styled, { css } from "styled-components";

export const StyledSection = styled.section`
	${({ theme }) =>
		css`
			${theme.utils.section}
		`}
`;
