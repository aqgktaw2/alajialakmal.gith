import Link from "@components/link";
import Button from "@components/button";
import PostCard from "@components/postCard";

import { SectionRecentPosts, RecentPostsHeader, RecentPostsInner, StyledHeading } from "./styles";

const RecentPosts = ({ posts, showListingLink = true, headerText = "Lastest blog posts" }) => {
	return (
		<SectionRecentPosts>
			<RecentPostsHeader>
				<StyledHeading level={2} data-gsap="reveal-bottom">
					{headerText}
				</StyledHeading>

				{showListingLink && (
					<Link href="/posts" passHref data-gsap="reveal-bottom" underLine={false}>
						<Button as="span">View More Articles</Button>
					</Link>
				)}
			</RecentPostsHeader>

			<RecentPostsInner>
				{posts.map((post, idx) => (
					<PostCard post={post} key={idx} authorSize="sm" />
				))}
			</RecentPostsInner>
		</SectionRecentPosts>
	);
};

export default RecentPosts;
