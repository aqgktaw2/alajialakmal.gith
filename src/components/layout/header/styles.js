import styled, { css } from "styled-components";

export const StyledHeader = styled.header`
	padding: 3rem 0;
	position: fixed;
	z-index: 1000;
	top: 0;
	left: 0;
	right: 0;
	transition: var(--transition-standard);
	border-bottom: 2px solid transparent;
	transform: translate3d(0, 0, 0);

	/* Adjust for standalone mobile notch */
	@media screen and (display-mode: standalone) {
		padding: 5.5rem 0 3rem;
	}

	${({ isScrolled }) =>
		isScrolled &&
		css`
			padding: 1rem 0;
			background-color: var(--color-background);
			border-bottom: 2px solid var(--color-highlight);

			/* Adjust for standalone mobile notch */
			@media screen and (display-mode: standalone) {
				padding: 4rem 0 1rem;
			}
		`}
`;

export const StyledHeaderInner = styled.div`
	${({ theme }) =>
		css`
			${theme.utils.container}
		`}
`;

export const StyledHeaderTop = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 1rem;
	transition: var(--transition-standard);
	transform: translate3d(0, 0, 0);

	a {
		svg {
			transform: translate3d(0, 0, 0);
			transition: var(--transition-standard);
			width: 8.5rem;
			height: 8.5rem;
		}
	}

	${({ isScrolled }) =>
		isScrolled &&
		css`
			margin-bottom: 0;

			a {
				svg {
					width: 5rem;
					height: 5rem;
				}
			}
		`}
`;

export const StyledHeaderBottom = styled.nav`
	display: flex;
	justify-content: center;
	align-items: center;

	ul {
		display: flex;
		list-style: none;
		padding: 0;
		margin: 0;

		li {
			transform: translate3d(0, 0, 0);
			&:not(:last-child) {
				margin-right: 1.5rem;
				transition: var(--transition-standard);
			}
		}
	}

	${({ isScrolled }) =>
		isScrolled &&
		css`
			ul {
				li {
					&:not(:last-child) {
						margin-right: 0.5rem;
					}
				}
			}
		`}
`;

export const StyledNavLink = styled.a`
	${({ theme }) =>
		css`
			${theme.utils.fancyLink}
		`}

	text-transform: uppercase;
	font-weight: 500;
	padding: 0.5rem;

	${({ isActive }) =>
		isActive &&
		css`
			&::after {
				width: 100%;
			}
		`}
`;

export const StyledHeaderAlert = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	height: 3rem;
	opacity: 1;
	z-index: 99999;
	transition: var(--transition-standard);
	background-color: transparent;
	transform: translate(0, 0, 0);

	${({ isScrolled }) =>
		isScrolled &&
		css`
			background-color: var(--color-background);
			height: 0;
			opacity: 0;
			overflow: hidden;
		`}
`;

export const StyledAlertInner = styled.div`
	${({ theme }) =>
		css`
			${theme.utils.container}
		`}

	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;

	p {
		margin: 0;
		padding: 0;
		line-height: initial;
		width: max-content;
		display: flex;
		align-items: center;
		font-size: 1.2rem;

		a {
			${({ theme }) =>
				css`
					${theme.utils.fancyLink}
				`}

			font-weight: normal;
			font-size: inherit;
			display: flex;
			align-items: center;

			&:hover {
				svg {
					transform: translate3d(3px, 0, 0);
				}
			}

			svg {
				height: 1.75rem;
				width: 1.75rem;
				margin-left: 0.5rem;
				transition: var(--transition-standard);
				transform: translate3d(0, 0, 0);
			}
		}
	}
`;
