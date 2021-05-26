import styled, { css } from "styled-components";

const styles = {
	1: {
		fontSize: "4rem",
		fontWeight: 800,
		textShadow: "2px 2px var(--color-highlight)",
		marginTop: "1rem",
		marginBottom: "1rem",
	},
	2: {
		fontSize: "2.75rem",
		fontWeight: 700,
		textShadow: "1px 1px var(--color-highlight)",
		marginTop: "1.25rem",
		marginBottom: "1.25rem",
	},
	3: {
		fontSize: "2rem",
		fontWeight: 500,
		textShadow: "1px 1px var(--color-highlight)",
		marginTop: "1.25rem",
		marginBottom: "1.25rem",
	},
	4: {
		fontSize: "1.6rem",
		fontWeight: 500,
		textShadow: "none",
		marginTop: "1.25rem",
		marginBottom: "1.25rem",
	},
	5: {
		fontSize: "1.4rem",
		fontWeight: 500,
		textShadow: "none",
		marginTop: "1.25rem",
		marginBottom: "1.25rem",
	},
	6: {
		fontSize: "1.2rem",
		fontWeight: 500,
		textShadow: "none",
		marginTop: "1.25rem",
		marginBottom: "1.25rem",
	},
};

export const StyledHeading = styled.h1`
	${({ level }) => css`
		font-size: ${styles[level].fontSize};
		font-weight: ${styles[level].fontWeight};
		text-shadow: ${styles[level].textShadow};
		margin-top: ${styles[level].marginTop};
		margin-bottom: ${styles[level].marginBottom};
	`}

	&::selection {
		background-color: var(--color-highlight-alt);
	}
`;
