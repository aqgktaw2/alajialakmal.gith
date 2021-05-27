import Button from "@components/button";
import Link from "@components/link";

import SnippetCard from "@components/snippetCard";

import { RecentSnippetsSection, SnippetsHeader, SinppetsInner } from "./styles";

const RecentSnippets = ({ posts, showListingLink = true, title = "Lastest code snippets" }) => {
	return (
		<RecentSnippetsSection>
			<SnippetsHeader>
				<h2 data-gsap="reveal-bottom">{title}</h2>
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
		</RecentSnippetsSection>
	);
};

export default RecentSnippets;
