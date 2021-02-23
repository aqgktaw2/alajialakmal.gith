import Image from "next/image";
import Link from "next/link";

import formatDate from "@/utils/formatDate";
import PostCard from "../postCard";

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
					<PostCard post={post} key={idx} authorSize="sm" />
				))}
			</div>
		</section>
	);
};

export default RecentPosts;
