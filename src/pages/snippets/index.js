import { Fragment } from "react";

import { getAllPosts } from "@lib/api";
import getherAllTags from "@utils/getherAllTags";
import SnippetCard from "@components/snippetCard";
import { IconFolder } from "@components/icons";
import Heading from "@components/heading";
import Meta from "@components/meta";

import {
	SnippetsListsing,
	SnippetsListsingHeader,
	SnippetsListsingInner,
	SnippetsListsingItems,
	SnippetsListsingSidebar,
	SnippetsListsingTags,
	TagLink,
} from "@styles/pages/snippets";

const Snippets = ({ allSnippets }) => {
	return (
		<Fragment>
			<Meta
				title="My web development code snippets | Denny Hong"
				description="View a list of helpful web development code snippets by Denny Hong."
			/>

			<SnippetsListsing>
				<SnippetsListsingHeader>
					<Heading level={1}>My Code Snippets</Heading>
				</SnippetsListsingHeader>

				<SnippetsListsingInner>
					{/* Posts */}
					<SnippetsListsingItems>
						{allSnippets.map((post, idx) => (
							<SnippetCard key={idx} post={post} />
						))}
					</SnippetsListsingItems>

					{/* Sidebar */}
					<SnippetsListsingSidebar>
						<Heading level={2}>Repositories:</Heading>

						<SnippetsListsingTags>
							{getherAllTags(allSnippets).map((tag, idx) => (
								<TagLink key={idx} href={`/repositories/${tag}`} passHref>
									<IconFolder />
									{tag}
								</TagLink>
							))}
						</SnippetsListsingTags>
					</SnippetsListsingSidebar>
				</SnippetsListsingInner>
			</SnippetsListsing>
		</Fragment>
	);
};

export default Snippets;

export const getStaticProps = async () => {
	const allSnippets = getAllPosts({
		fields: ["title", "excerpt", "coverImage", "date", "author", "ogImage", "tags", "type", "slug"],
		postType: "snippets",
	});

	return {
		props: {
			allSnippets,
		},
		revalidate: 1,
	};
};
