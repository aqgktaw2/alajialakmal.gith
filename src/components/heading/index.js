import React from "react";

import { StyledHeading } from "./styles";

const Heading = props => {
	const { level, children, ...restProps } = props;

	return (
		<StyledHeading as={`h${level}`} level={level} {...restProps}>
			{children}
		</StyledHeading>
	);
};

export default Heading;
