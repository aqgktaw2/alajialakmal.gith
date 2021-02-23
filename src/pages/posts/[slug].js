import { useRouter } from "next/router";
import ErrorPage from "next/error";
import PostBody from "../../components/postBody";
import Header from "../../components/header";
import PostHeader from "../../components/postHeader";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../../lib/constants";
import markdownToHtml from "../../lib/markdownToHtml";
import { Fragment } from "react";

export default function Post({ post }) {
	const router = useRouter();
	if (!router.isFallback && !post?.slug) {
		return <ErrorPage statusCode={404} />;
	}
	return (
		<Fragment>
			<Header />
			{router.isFallback ? (
				<h1>Loading...</h1>
			) : (
				<article>
					<Head>
						<title>
							{post.title} | Next.js Blog Example with {CMS_NAME}
						</title>
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
			)}
		</Fragment>
	);
}

export async function getStaticProps({ params }) {
	const post = getPostBySlug({
		slug: params.slug,
		fields: ["title", "date", "slug", "author", "content", "ogImage", "coverImage"],
		postType: "posts",
	});
	const content = await markdownToHtml(post.content || "");

	return {
		props: {
			post: {
				...post,
				content,
			},
		},
	};
}

export async function getStaticPaths() {
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
