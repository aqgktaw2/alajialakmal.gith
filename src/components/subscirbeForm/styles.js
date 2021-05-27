import Heading from "@components/heading";
import styled from "styled-components";

export const StyledForm = styled.form`
	background-color: darken($color-highlight-alt, 27.5);
	width: 100%;
	max-width: 450px;
	padding: 4rem;
	display: flex;
	flex-direction: column;
	border: 1px solid var(--color-text);
	box-shadow: 4px 4px 0px 0px var(--color-highlight);
`;

export const LabelHeading = styled(Heading)`
	margin-top: 0;
`;

export const StyledInput = styled.input`
	margin-bottom: 2rem;
`;
