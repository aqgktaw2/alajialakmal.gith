import { useRouter } from "next/router";
import Head from "next/head";
import ErrorPage from "next/error";
import { Fragment } from "react";

import { getPostBySlug, getAllPosts } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import PostBody from "@/components/postBody";
import PostHeader from "@/components/postHeader";
import RecentPosts from "@/components/sections/recentPosts";

const Post = ({ post, relatedPosts }) => {
	const router = useRouter();

	if (router.isFallback) {
		return <h1>Loading...</h1>;
	}

	if (!router.isFallback && !post?.slug) {
		return <ErrorPage statusCode={404} />;
	}

	return (
		<Fragment>
			{/* Post */}
			<article>
				<Head>
					<title>{post.title} | Next.js Blog Example</title>
					<meta property="og:image" content={post.ogImage.url} />
				</Head>
				<PostHeader
					title={post.title}
					coverImage={post.coverImage}
					date={post.date}
					author={post.author}
				/>
				<PostBody content={post.content} />
			</article>

			{/* Related Posts */}
			<RecentPosts
				posts={relatedPosts}
				showListingLink={false}
				headerText="Related Articles"
			/>
		</Fragment>
	);
};

export default Post;

export async function getStaticProps({ params }) {
	// Get the post
	const post = getPostBySlug({
		slug: params.slug,
		fields: ["title", "date", "slug", "author", "content", "ogImage", "coverImage", "tags"],
		postType: "posts",
	});
	const content = await markdownToHtml(post.content || "");

	// List at most 3 related posts
	const relatedPosts = getAllPosts({
		fields: ["title", "date", "slug", "author", "coverImage", "excerpt", "type", "tags"],
		postType: "posts",
	})
		.filter(
			(otherPost) =>
				otherPost.slug !== post.slug &&
				otherPost.tags.find((tag) => otherPost.tags.includes(tag))
		)
		.slice(0, 3);

	return {
		props: {
			post: {
				...post,
				content,
			},
			relatedPosts,
		},
	};
}

export async function getStaticPaths() {
	// List all posts' slugs
	const posts = getAllPosts({ fields: ["slug"], postType: "posts" });

	return {
		paths: posts.map((post) => {
			return {
				params: {
					slug: post.slug,
				},
			};
		}),
		fallback: false,
	};
}
