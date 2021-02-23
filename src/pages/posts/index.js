import Link from "next/link";

import PostCard from "@/components/postCard";
import { getAllPosts } from "@/lib/api";

const Posts = ({ allPosts }) => {
	return (
		<div className="page-posts-listing">
			<div className="page-posts-listing__header">
				<h1>My Articles</h1>
			</div>
			<div className="page-posts-listing__inner">
				<section className="page-posts-listing__posts">
					{allPosts.map((post, idx) => (
						<PostCard key={idx} post={post} />
					))}
				</section>
				<aside className="page-posts-listing__sidebar">
					<h2>By Tags:</h2>
					<div className="page-posts-listing__tags">
						{[...new Set(allPosts.map((post) => post.tags).flat())].map((tag, idx) => (
							<Link key={idx} href={`/tags/${tag}`} passHref>
								<a>#{tag}</a>
							</Link>
						))}
					</div>
				</aside>
			</div>
		</div>
	);
};

export async function getStaticProps() {
	const allPosts = getAllPosts({
		fields: ["title", "date", "slug", "author", "coverImage", "excerpt", "type", "tags"],
		postType: "posts",
	});

	return {
		props: { allPosts },
	};
}

export default Posts;
