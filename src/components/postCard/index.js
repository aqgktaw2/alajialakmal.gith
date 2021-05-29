// import Image from "next/image";

import formatDate from "@utils/formatDate";
import Heading from "@components/heading";
import Author from "@components/author";
import Link from "@components/link";

import {
	StyledPostCard,
	StyledCardMeta,
	StyledCardBottom,
	StyledCardTags,
	TagLink,
} from "./styles";
import Image from "@components/Image";

const PostCard = ({ post, authorSize = "" }) => {
	return (
		<StyledPostCard data-gsap="reveal-bottom">
			<Image aspectRatio={2 / 1} src={post.coverImage} alt={`Cover Image for ${post.title}`} />

			<StyledCardMeta>
				<Author author={post.author} size={authorSize} /> <span>{formatDate(post.date)}</span>
			</StyledCardMeta>

			<Link href={`/posts/${post.slug}`} passHref underLine={false}>
				<Heading level={3} as="span">
					{post.title}
				</Heading>
			</Link>

			<p>{post.excerpt}</p>

			<StyledCardBottom>
				<StyledCardTags>
					<Heading level={5} as="div">
						{post.tags.map((tag, idx) => (
							<TagLink key={idx} href={`/topics/${tag}`} passHref>
								#{tag}
							</TagLink>
						))}
					</Heading>
				</StyledCardTags>

				<Link href={`/posts/${post.slug}`} passHref>
					Read More
				</Link>
			</StyledCardBottom>
		</StyledPostCard>
	);
};

export default PostCard;
