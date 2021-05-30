import { Fragment } from "react";

import { getAllPosts } from "@lib/api";
import getherAllTags from "@utils/getherAllTags";
import PostCard from "@components/postCard";
import Meta from "@components/meta";
import Heading from "@components/heading";

import {
	PostsListsing,
	PostListingHeader,
	PostListingInner,
	PostListsingItems,
	PostListingSidebar,
	PostListingTags,
	TagLink,
} from "@styles/pages/posts";

const Posts = ({ allPosts }) => {
	return (
		<Fragment>
			<Meta
				title="My web development articles | Denny Hong"
				description="View a list of Denny Hong's articles on web development."
			/>

			<PostsListsing as="div">
				<PostListingHeader>
					<Heading level={1}>My Articles</Heading>
				</PostListingHeader>

				<PostListingInner>
					{/* Posts */}
					<PostListsingItems>
						{allPosts.map((post, idx) => (
							<PostCard key={idx} post={post} />
						))}
					</PostListsingItems>

					{/* Sidebar */}
					<PostListingSidebar>
						<Heading level={2}>Topics:</Heading>

						<PostListingTags>
							{getherAllTags(allPosts).map((tag, idx) => (
								<TagLink key={idx} href={`/topics/${tag}`} passHref>
									#{tag}
								</TagLink>
							))}
						</PostListingTags>
					</PostListingSidebar>
				</PostListingInner>
			</PostsListsing>
		</Fragment>
	);
};

export default Posts;

export async function getStaticProps() {
	// List all posts
	const allPosts = getAllPosts({
		fields: ["title", "date", "slug", "author", "coverImage", "excerpt", "type", "tags"],
		postType: "posts",
	});

	return {
		props: {
			allPosts,
		},
		revalidate: 1,
	};
}
