import styled, { css } from "styled-components";

export const StyledLink = styled.a`
	${({ theme, underLine }) =>
		!!underLine &&
		css`
			${theme.utils.fancyLink}
		`}
`;
