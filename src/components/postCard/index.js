import Image from "next/image";
import Link from "next/link";

import formatDate from "@utils/formatDate";
import Heading from "@components/heading";
import Author from "@components/author";

import {
	StyledPostCard,
	StyledCardImage,
	StyledCardMeta,
	StyledCardBottom,
	StyledCardTags,
	ReadMoreLink,
} from "./styles";

const PostCard = ({ post, authorSize = "" }) => {
	return (
		<StyledPostCard data-gsap="reveal-bottom">
			<StyledCardImage>
				<Image src={post.coverImage} layout="fill" />
			</StyledCardImage>

			<StyledCardMeta>
				<Author author={post.author} size={authorSize} /> <span>{formatDate(post.date)}</span>
			</StyledCardMeta>

			<Link href={`/posts/${post.slug}`} passHref>
				<Heading level={3} as="a">
					{post.title}
				</Heading>
			</Link>

			<p>{post.excerpt}</p>

			<StyledCardBottom>
				<StyledCardTags>
					<Heading level={5} as="div">
						{post.tags.map((tag, idx) => (
							<Link key={idx} href={`/topics/${tag}`} passHref>
								<a>#{tag}</a>
							</Link>
						))}
					</Heading>
				</StyledCardTags>

				<Link href={`/posts/${post.slug}`} passHref>
					<ReadMoreLink>Read More</ReadMoreLink>
				</Link>
			</StyledCardBottom>
		</StyledPostCard>
	);
};

export default PostCard;
