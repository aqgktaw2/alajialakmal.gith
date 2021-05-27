import NextLink from "next/link";

import { StyledLink } from "./styles";

const Link = props => {
	const { href, passHref = true, children, forwardedRef, underLine = true, ...restProps } = props;
	return (
		<NextLink href={href} passHref={passHref}>
			<StyledLink {...restProps} ref={forwardedRef} underLine={underLine}>
				{children}
			</StyledLink>
		</NextLink>
	);
};

export default Link;
