import Link from "next/link";

const Introduction = ({ useHeading1 = false }) => {
	return (
		<section className="section-introduction">
			<div className="section-introduction__header">
				{useHeading1 ? (
					<h1>About Me</h1>
				) : (
					<h2 data-gsap="reveal-bottom">Who am I? (the TL;DR version)</h2>
				)}
			</div>
			<div className="section-introduction__inner">
				<p data-gsap="reveal-bottom">
					I&apos;m a web & JavaScript developer based in Seattle, WA. I&apos;m currently focusing on
					delivering{" "}
					<Link href="/projects" passHref>
						<a>rich & responsive UI experiences</a>
					</Link>{" "}
					for web projects across all scales. I am passionate about the JAM Stack, enjoy{" "}
					<Link href="/posts" passHref>
						<a>writing articles</a>
					</Link>{" "}
					and{" "}
					<Link href="/posts" passHref>
						<a>sharing code snippets</a>
					</Link>{" "}
					with fellow developers.
				</p>

				{/* More about me button */}
				{!useHeading1 && (
					<Link href="/about" passHref>
						<a data-gsap="reveal-bottom" className="btn">
							More About Me
						</a>
					</Link>
				)}
			</div>
		</section>
	);
};

export default Introduction;
