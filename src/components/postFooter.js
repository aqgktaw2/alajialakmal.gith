import TwitterShareButton from "@/components/twitterShareButton";
import EditPostButton from "@/components/editPostButton";

const postFooter = ({ post }) => {
	return (
		<div className="post-footer">
			<div className="post-footer__inner">
				<hr />
				<p data-gsap="reveal-bottom">
					Thanks for reading this {post.type.slice(0, post.type.length - 1)}! Help spread it or
					start a conversation by sharing it on Twitter!{" "}
					{post.type !== "projects" &&
						`If you find any part of the
					${post.type.slice(0, post.type.length - 1)} inaccurate please don't hesitate to help
					edit it!`}{" "}
					Lastly, don&apos;t fotget to <a href="#subscribe">subscribe to my newsletter </a>
					for notifications on future {post.type.slice(0, post.type.length - 1)}s and code snippets!
				</p>

				<div className="post-footer__actions">
					<TwitterShareButton {...post} />
					{post.type !== "projects" && <EditPostButton post={post} />}
				</div>
			</div>
		</div>
	);
};

export default postFooter;
