import { useRouter } from "next/router";
import { Fragment } from "react";

import { getAllPosts } from "@lib/api";
import PostCard from "@components/postCard";
import Meta from "@components/meta";
import Heading from "@components/heading";

import { TopicContainer, TopicHeader, TopicPosts } from "@styles/pages/topics";

const Topics = ({ posts }) => {
	const router = useRouter();

	return (
		<Fragment>
			<Meta
				title={`My web development articles on ${router.query.slug} | Denny Hong`}
				description={`View a list of web development articles written by Denny Hong that talks about ${router.query.slug}.`}
			/>

			<TopicContainer>
				<TopicHeader>
					<Heading level={1}>My articles on {router.query.slug}</Heading>
				</TopicHeader>

				<TopicPosts>
					{posts.map((post, idx) => (
						<PostCard key={idx} post={post} />
					))}
				</TopicPosts>
			</TopicContainer>
		</Fragment>
	);
};

export default Topics;

export const getStaticProps = async ({ params }) => {
	const allPosts = getAllPosts({
		fields: ["title", "date", "slug", "author", "coverImage", "excerpt", "type", "tags"],
		postType: "posts",
	});
	const posts = allPosts.filter(post => post.tags.includes(params.slug));

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
