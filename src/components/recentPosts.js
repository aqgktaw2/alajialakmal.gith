import Image from "next/image";
import Link from "next/link";

import formatDate from "@/utils/formatDate";

const RecentPosts = ({ posts, showListingLink = true, headerText = "Lastest blog posts" }) => {
	return (
		<section className="section-recent-posts">
			<div className="section-recent-posts__header">
				<h2 data-gsap="reveal-bottom">{headerText}</h2>
				{showListingLink && (
					<Link href="/posts" passHref>
						<a data-gsap="reveal-bottom" className="btn">
							View More Articles
						</a>
					</Link>
				)}
			</div>
			<div className="section-recent-posts__inner">
				{posts.map((post, idx) => (
					<div key={idx} data-gsap="reveal-bottom" className="post-card">
						<div className="post-card__image">
							<Image src={post.coverImage} width={556} height={278} />
						</div>
						<p>{formatDate(post.date)}</p>
						<Link href={`/posts/${post.slug}`} passHref>
							<a className="h3">{post.title}</a>
						</Link>
						<p className="post-card__excerpt">{post.excerpt}</p>
						<Link href={`/posts/${post.slug}`} passHref>
							<a className="post-card__link">Read More</a>
						</Link>
					</div>
				))}
			</div>
		</section>
	);
};

export default RecentPosts;
