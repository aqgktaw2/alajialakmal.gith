import Link from "next/link";

import PostCard from "@/components/postCard";
import { getAllPosts } from "@/lib/api";
import getherAllTags from "@/utils/getherAllTags";
import generateRssFeed from "@/lib/rss";

const Posts = ({ allPosts }) => {
	return (
		<div className="page-posts-listing">
			<div className="page-posts-listing__header">
				<h1>My Articles</h1>
			</div>
			<div className="page-posts-listing__inner">
				{/* Posts */}
				<section className="page-posts-listing__posts">
					{allPosts.map((post, idx) => (
						<PostCard key={idx} post={post} />
					))}
				</section>

				{/* Sidebar */}
				<aside className="page-posts-listing__sidebar">
					<h2>Topics:</h2>

					<div className="page-posts-listing__tags">
						{getherAllTags(allPosts).map((tag, idx) => (
							<Link key={idx} href={`/topics/${tag}`} passHref>
								<a>#{tag}</a>
							</Link>
						))}
					</div>
				</aside>
			</div>
		</div>
	);
};

export default Posts;

export async function getStaticProps() {
	// List all posts
	const allPosts = getAllPosts({
		fields: ["title", "date", "slug", "author", "coverImage", "excerpt", "type", "tags"],
		postType: "posts",
	});

	await generateRssFeed();

	return {
		props: {
			allPosts,
		},
		revalidate: 1,
	};
}
