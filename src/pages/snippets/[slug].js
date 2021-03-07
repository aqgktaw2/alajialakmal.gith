import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { Fragment } from "react";

import { getPostBySlug, getAllPosts } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import PostArticle from "@/components/postArticle";
import RecentSnippets from "@/components/sections/recentSnippets";
import BlogProgress from "@/components/blogProgress";

const Snippet = ({ snippet, relatedSnippets }) => {
	const router = useRouter();

	if (router.isFallback) {
		return <h1>Loading...</h1>;
	}

	if (!router.isFallback && !snippet?.slug) {
		return <ErrorPage statusCode={404} />;
	}

	return (
		<Fragment>
			<BlogProgress />

			{/* Post */}
			<PostArticle post={snippet} />

			{/* Related Posts */}
			<RecentSnippets
				posts={relatedSnippets}
				showListingLink={false}
				headerText="Similar Articles"
			/>
		</Fragment>
	);
};

export default Snippet;

export async function getStaticProps({ params }) {
	// Get the snippet
	const snippet = getPostBySlug({
		slug: params.slug,
		fields: [
			"title",
			"date",
			"slug",
			"author",
			"content",
			"ogImage",
			"coverImage",
			"tags",
			"excerpt",
			"type",
			"readTime",
		],
		postType: "snippets",
	});
	const content = await markdownToHtml(snippet.content || "");

	// List at most 2 related snippets
	const relatedSnippets = getAllPosts({
		fields: ["title", "date", "slug", "author", "content", "ogImage", "coverImage", "tags", "type"],
		postType: "snippets",
	})
		.filter(
			otherSnippet =>
				otherSnippet.slug !== snippet.slug &&
				otherSnippet.tags.find(tag => otherSnippet.tags.includes(tag)),
		)
		.slice(0, 3);

	return {
		props: {
			snippet: {
				...snippet,
				content,
			},
			relatedSnippets,
		},
		revalidate: 1,
	};
}

export async function getStaticPaths() {
	// List all posts' slugs
	const snippets = getAllPosts({ fields: ["slug"], postType: "snippets" });

	return {
		paths: snippets.map(snippet => {
			return {
				params: {
					slug: snippet.slug,
				},
			};
		}),
		fallback: false,
	};
}
