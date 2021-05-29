import Link from "next/link";

import { StyledSkipLink } from "./styles";

const SkipLink = () => {
	const handleSkip = evt => {
		evt.preventDefault();
		const main = document.querySelector("#main-content");
		[...main.querySelectorAll("a, button, input")][0]?.focus();
		return false;
	};

	return (
		<Link href="#main-content" passHref>
			<StyledSkipLink onClick={handleSkip}>Skip to main content</StyledSkipLink>
		</Link>
	);
};

export default SkipLink;
