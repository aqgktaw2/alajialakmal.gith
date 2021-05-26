import React from "react";

import { StyledHeading } from "./styles";

const Heading = props => {
	const { level, children, ref, ...restProps } = props;

	return (
		<StyledHeading as={`h${level}`} ref={ref} level={level} {...restProps}>
			{children}
		</StyledHeading>
	);
};

export default Heading;
