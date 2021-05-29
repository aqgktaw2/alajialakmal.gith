import Link from "next/link";

import IconGithub from "./icons/IconGithub";

const REPO_POSTS_URL = "https://github.com/dennyhong96/dennyh.me/blob/master/_posts";
const POST_TYPE_PATH = {
	posts: "posts",
	snippets: "snippets",
};

const EditPostButton = ({ post }) => {
	return (
		<Link href={`${REPO_POSTS_URL}/${POST_TYPE_PATH[post.type]}/${post.slug}.md`} passHref>
			<a
				data-gsap="reveal-bottom"
				className="btn edit-post-btn"
				target="_blank"
				rel="noopener rereferrer"
			>
				Edit this {post.type.slice(0, post.type.length - 1)}{" "}
				<IconGithub width="2rem" height="2rem" />
			</a>
		</Link>
	);
};

export default EditPostButton;
