import styled, { css } from "styled-components";

export const StyledTimeline = styled.section`
	${({ theme }) =>
		css`
			${theme.utils.section}
		`}

	position: relative;

	&::after {
		content: "";
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		top: 0;
		width: 3px;
		height: 100%;
		background-color: #fff;
		border-radius: 2px;

		@media (max-width: 768px) {
			left: 100%;
		}
	}
`;

export const StyleTimelineItemInner = styled.div`
	position: relative;
	padding: 3rem;
	border: 1px solid var(--color-text);
	border-radius: 2px;
	box-shadow: 4px 4px 0px 0px var(--color-highlight);
	background-color: var(--color-background);
	flex: 0 0 calc(50% - 5rem);
	width: calc(50% - 5rem);

	@media (max-width: 768px) {
		flex: 0 0 calc(100% - 5rem);
		width: 100%;
	}

	&::after {
		position: absolute;
		content: "";
		display: block;
		right: -25px;
		top: 50%;
		transform: translateY(-50%);
		width: 0;
		height: 0;
		border-top: 10px solid transparent;
		border-left: 10px solid var(--color-highlight);
		border-right: 10px solid transparent;
		border-bottom: 10px solid transparent;
	}
`;

export const StyledTimelineItem = styled.div`
	position: relative;
	display: flex;
	z-index: 1;

	&:not(:first-of-type) {
		margin-top: -7.5rem;

		@include media("<=md") {
			margin-top: 5rem;
		}
	}

	&:nth-of-type(even) {
		justify-content: flex-end;

		${StyleTimelineItemInner} {
			&::after {
				left: -20px;
				border-left: 10px solid transparent;
				border-right: 10px solid #fff;
			}
		}

		@media (max-width: 768px) {
			justify-content: flex-start;

			${StyleTimelineItemInner} {
				&::after {
					left: initial;
					border-left: 10px solid var(--color-highlight);
					border-right: 10px solid transparent;
				}
			}
		}
	}
`;

export const StyleTimelineItemIcon = styled.span`
	background-color: var(--color-highlight);
	display: block;
	width: max-content;
	width: 5rem;
	height: 5rem;
	border-radius: 50%;
	display: flex;
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	z-index: 1;

	@media (max-width: 768px) {
		left: 100%;
	}

	svg {
		height: 3rem;
		width: 3rem;
		margin: auto;
	}
`;
