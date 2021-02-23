import Link from "next/link";

import IconGithub from "./icons/IconGithub";

const REPO_POSTS_URL = "https://github.com/dennyhong96/portfolio-2021/blob/master/_posts";
const POST_TYPE_PATH = {
	posts: "blog-posts",
	snippets: "code-snippets",
};

const EditPostButton = ({ post }) => {
	return (
		<div className="edit-post-btn">
			<Link href={`${REPO_POSTS_URL}/${POST_TYPE_PATH[post.type]}/${post.slug}.md`} passHref>
				<a
					data-gsap="reveal-bottom"
					className="btn"
					target="_blank"
					rel="noopener rereferrer"
				>
					Edit this {post.type.slice(0, post.type.length - 1)}{" "}
					<IconGithub width="2rem" height="2rem" />
				</a>
			</Link>
		</div>
	);
};

export default EditPostButton;
