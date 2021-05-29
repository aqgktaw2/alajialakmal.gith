import { useRouter } from "next/router";
import { Fragment } from "react";

import { getAllPosts } from "@lib/api";
import SnippetCard from "@components/snippetCard";
import Meta from "@components/meta";
import Heading from "@components/heading";

import { RepoContainer, RepoHeader, RepoPosts } from "@styles/pages/repositories";

const Repositories = ({ snippets }) => {
	const router = useRouter();

	return (
		<Fragment>
			<Meta
				title={`My web development code snippets on ${router.query.slug} | Denny Hong`}
				description={`View a list of web development code snippets shared by Denny Hong that talks about ${router.query.slug}.`}
			/>

			<RepoContainer as="div">
				<RepoHeader as="section">
					<Heading level={1}>My {router.query.slug} code snippets</Heading>
				</RepoHeader>

				<RepoPosts as="section">
					{snippets.map((snippet, idx) => (
						<SnippetCard key={idx} post={snippet} />
					))}
				</RepoPosts>
			</RepoContainer>
		</Fragment>
	);
};

export default Repositories;

export const getStaticProps = async ({ params }) => {
	const allSnippets = getAllPosts({
		fields: ["title", "date", "slug", "author", "coverImage", "excerpt", "type", "tags"],
		postType: "snippets",
	});
	const snippets = allSnippets.filter(snippet => snippet.tags.includes(params.slug));

	return {
		props: {
			snippets,
		},
		revalidate: 1,
	};
};

export const getStaticPaths = async () => {
	const paths = getAllPosts({
		fields: ["tags"],
		postType: "snippets",
	})
		.map(post => post.tags)
		.flat()
		.map(tag => ({ params: { slug: tag } }));

	return {
		paths,
		fallback: false,
	};
};
