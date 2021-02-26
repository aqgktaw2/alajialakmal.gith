import Link from "next/link";

const SkipLink = () => {
	const handleSkip = evt => {
		evt.preventDefault();
		const main = document.querySelector("#main-content");
		[...main.querySelectorAll("a", "button", "input")][0]?.focus();
		return false;
	};

	return (
		<Link href="#main-content" passHref>
			<a className="skip-link" onClick={handleSkip}>
				Skip to main content
			</a>
		</Link>
	);
};

export default SkipLink;
