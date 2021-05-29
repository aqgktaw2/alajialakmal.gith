import React from "react";

import { StyledHeading } from "./styles";

const Heading = props => {
	const { level, children, forwardedRef, ...restProps } = props;

	return (
		<StyledHeading as={`h${level}`} ref={forwardedRef} level={level} {...restProps}>
			{children}
		</StyledHeading>
	);
};

export default Heading;
