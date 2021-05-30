import { forwardRef } from "react";
import NextLink from "next/link";

import { StyledLink } from "./styles";

const EMAIL_REGEX =
	/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

const Link = forwardRef((props, ref) => {
	const { href, passHref = true, children, underLine = true, ...restProps } = props;

	const _href = EMAIL_REGEX.test(href) ? `mailto:${href}` : href;

	return (
		<NextLink href={_href} passHref={passHref}>
			<StyledLink {...restProps} ref={ref} underLine={underLine}>
				{children}
			</StyledLink>
		</NextLink>
	);
});

Link.displayName = "Link";

export default Link;
