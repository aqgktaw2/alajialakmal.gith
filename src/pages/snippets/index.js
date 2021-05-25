import Link from "next/link";
import { Fragment } from "react";

import { getAllPosts } from "@lib/api";
import getherAllTags from "@utils/getherAllTags";
import SnippetCard from "@components/snippetCard";
import { IconFolder } from "@components/icons";
import Meta from "@components/meta";

const Snippets = ({ allSnippets }) => {
	return (
		<Fragment>
			<Meta
				title="My web development code snippets | Denny Hong"
				description="View a list of helpful web development code snippets by Denny Hong."
			/>

			<div className="page-snippets-listing">
				<div className="page-snippets-listing__header">
					<h1>My Code Snippets</h1>
				</div>

				<div className="page-snippets-listing__inner">
					{/* Posts */}
					<section className="page-snippets-listing__snippets">
						{allSnippets.map((post, idx) => (
							<SnippetCard key={idx} post={post} />
						))}
					</section>

					{/* Sidebar */}
					<aside className="page-snippets-listing__sidebar">
						<h2>Repositories:</h2>

						<div className="page-snippets-listing__tags">
							{getherAllTags(allSnippets).map((tag, idx) => (
								<Link key={idx} href={`/repositories/${tag}`} passHref>
									<a>
										<IconFolder />
										{tag}
									</a>
								</Link>
							))}
						</div>
					</aside>
				</div>
			</div>
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
