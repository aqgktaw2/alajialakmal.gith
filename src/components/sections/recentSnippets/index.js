import Button from "@components/button";
import Heading from "@components/heading";
import Link from "@components/link";
import Section from "@components/section";
import SnippetCard from "@components/snippetCard";

import { SnippetsHeader, SinppetsInner } from "./styles";

const RecentSnippets = ({ posts, showListingLink = true, title = "Lastest code snippets" }) => {
	return (
		<Section>
			<SnippetsHeader>
				<Heading level={2} data-gsap="reveal-bottom">
					{title}
				</Heading>
				{showListingLink && (
					<Link href="/snippets" passHref data-gsap="reveal-bottom" underLine={false}>
						<Button as="span">View More Snippets</Button>
					</Link>
				)}
			</SnippetsHeader>

			<SinppetsInner>
				{posts.map((post, idx) => (
					<SnippetCard post={post} key={idx} />
				))}
			</SinppetsInner>
		</Section>
	);
};

export default RecentSnippets;
