import { useRouter } from "next/router";

import { getAllPosts } from "@/lib/api";
import PostCard from "@/components/postCard";
import generateRssFeed from "@/lib/rss";

const Topics = ({ posts }) => {
	const router = useRouter();

	return (
		<div className="page-posts-by-topic">
			<section className="page-posts-by-topic__header">
				<h1>My articles on {router.query.slug}</h1>
			</section>
			<section className="page-posts-by-topic__inner">
				{posts.map((post, idx) => (
					<PostCard key={idx} post={post} />
				))}
			</section>
		</div>
	);
};

export default Topics;

export const getStaticProps = async ({ params }) => {
	const allPosts = getAllPosts({
		fields: ["title", "date", "slug", "author", "coverImage", "excerpt", "type", "tags"],
		postType: "posts",
	});
	const posts = allPosts.filter(post => post.tags.includes(params.slug));

	await generateRssFeed();

	return {
		props: {
			posts,
		},
		revalidate: 1,
	};
};

export const getStaticPaths = async () => {
	const paths = getAllPosts({
		fields: ["tags"],
		postType: "posts",
	})
		.map(post => post.tags)
		.flat()
		.map(tag => ({ params: { slug: tag } }));

	return {
		paths,
		fallback: false,
	};
};
