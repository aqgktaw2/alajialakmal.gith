import { css } from "styled-components";

export default css`
	a {
		color: var(--color-text);
		font: inherit;
		text-decoration: none;
		outline: 2px solid transparent;
		transition: var(--transition-standard);
		display: inline-block;

		&:visited {
			color: var(--color-text);
		}

		&:focus {
			outline: 2px solid var(--color-highlight-alt);
		}
	}
`;
