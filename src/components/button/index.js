import React from "react";

import { StyledButton } from "./styles";

const Button = props => {
	const { children, forwardedRef, ...restProps } = props;
	return (
		<StyledButton {...restProps} ref={forwardedRef}>
			{children}
		</StyledButton>
	);
};

export default Button;
