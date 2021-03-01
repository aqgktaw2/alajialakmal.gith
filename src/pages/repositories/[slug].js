import { useRouter } from "next/router";

import { getAllPosts } from "@/lib/api";
import SnippetCard from "@/components/snippetCard";

const Repositories = ({ snippets }) => {
	const router = useRouter();

	return (
		<div className="page-snippets-by-repository">
			<section className="page-snippets-by-repository__header">
				<h1>My {router.query.slug} code snippets</h1>
			</section>
			<section className="page-snippets-by-repository__inner">
				{snippets.map((snippet, idx) => (
					<SnippetCard key={idx} post={snippet} />
				))}
			</section>
		</div>
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
