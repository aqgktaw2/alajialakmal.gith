import styled from "styled-components";

export const StyledPostBody = styled.div`
	background: linear-gradient(180deg, rgba(7, 0, 11, 1) 0%, rgba(7, 0, 11, 0) 10%);

	.next-image {
		position: relative;
		img {
			object-fit: cover;
		}
		&::after {
			display: block;
			content: "";
			padding-bottom: 56.25%;
		}
	}
`;

export const StyledPostInner = styled.div`
	width: 100%;
	max-width: 850px;
	padding: 4rem 4rem 0 4rem;
	margin: 0 auto;

	h2 {
		margin-top: 4.8rem;
		margin-bottom: 2.4rem;
	}

	h3 {
		margin-top: 3.2rem;
		margin-bottom: 1.2rem;
	}

	h4 {
		margin-top: 2.4rem;
		margin-bottom: 0.8rem;
	}

	p {
		margin-top: 2rem;
		margin-bottom: 2rem;
	}

	& > pre {
		background-color: var(--color-background-alt);
		border: 1px solid var(--color-text);
		box-shadow: 4px 4px 0px 0px var(--color-highlight);
		margin-top: 2.4rem;
		margin-bottom: 2.4rem;

		/* For Syntax Highlighter generated pre tag */
		& > pre {
			margin: 0 !important;
			padding: 2rem 2rem 0.5rem 2rem !important;
			background-color: var(--color-background-alt) !important;
		}

		code {
			tab-size: 4;
			width: 100%;
			display: block;
			overflow-x: auto;
			line-height: 1.75;
			font-size: 1.35rem;

			@media (max-width: 768px) {
				tab-size: 2;
			}
		}
	}

	a {
		/* TODO */
		/* @include link(); */
		font-style: italic;
		font-weight: 600;
	}

	img {
		margin-top: 2rem;
		margin-bottom: 2rem;
	}

	blockquote {
		& > *:first-child {
			margin-top: 0;
		}

		border-left: 3px solid var(--color-highlight);
		padding: 2rem;
		background-color: lighten($color-background-alt, 2.5);
	}

	ol {
		list-style: decimal;
		margin-top: 2rem;
		margin-bottom: 2rem;
		padding-left: 2.25rem;

		li {
			margin-top: 0.8rem;
			margin-bottom: 0.8rem;
		}
	}
`;
