import Image from "next/image";
import Link from "next/link";

import formatDate from "@/utils/formatDate";
import Author from "./author";

const PostCard = ({ post, authorSize = "" }) => {
	return (
		<div data-gsap="reveal-bottom" className="post-card">
			<div className="post-card__image">
				<Image src={post.coverImage} width={556} height={278} />
			</div>

			<div className="post-card__meta">
				<Author author={post.author} size={authorSize} />{" "}
				<span>{formatDate(post.date)}</span>
			</div>

			<Link href={`/posts/${post.slug}`} passHref>
				<a className="h3">{post.title}</a>
			</Link>

			<p className="post-card__excerpt">{post.excerpt}</p>

			<div className="post-card__lower">
				<div className="post-card__tags">
					{post.tags.map((tag) => (
						<Link href={`/tags/${tag}`} passHref>
							<a>#{tag}</a>
						</Link>
					))}
				</div>

				<Link href={`/posts/${post.slug}`} passHref>
					<a className="post-card__link">Read More</a>
				</Link>
			</div>
		</div>
	);
};

export default PostCard;
