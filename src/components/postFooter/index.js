import TwitterShareButton from "@components/twitterShareButton";
import EditPostButton from "@components/editPostButton";

import { PostFooterInner, FooterLink, PostFooterActions } from "./styles";

const postFooter = ({ post }) => {
	return (
		<div>
			<PostFooterInner>
				<hr />

				<p data-gsap="reveal-bottom">
					Thanks for reading this {post.type.slice(0, post.type.length - 1)}! Help spread it or
					start a conversation by sharing it on Twitter!{" "}
					{post.type !== "projects" &&
						`If you find any part of the
					${post.type.slice(0, post.type.length - 1)} inaccurate please don't hesitate to help
					edit it!`}{" "}
					Lastly, don&apos;t fotget to{" "}
					<FooterLink href="#subscribe">subscribe to my newsletter </FooterLink>
					for notifications on future {post.type.slice(0, post.type.length - 1)}s and code snippets!
				</p>

				<PostFooterActions>
					<TwitterShareButton {...post} />
					{post.type !== "projects" && <EditPostButton post={post} />}
				</PostFooterActions>
			</PostFooterInner>
		</div>
	);
};

export default postFooter;
