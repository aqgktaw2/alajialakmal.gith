import Button from "@components/button";
import Link from "@components/link";
import IconGithub from "@components/icons/IconGithub";

const REPO_POSTS_URL = "https://github.com/dennyhong96/dennyh.me/blob/master/_posts";
const POST_TYPE_PATH = {
	posts: "posts",
	snippets: "snippets",
};

const EditPostButton = ({ post }) => {
	return (
		<Link
			href={`${REPO_POSTS_URL}/${POST_TYPE_PATH[post.type]}/${post.slug}.md`}
			passHref
			data-gsap="reveal-bottom"
			target="_blank"
			rel="noopener rereferrer"
		>
			<Button as="span">
				Edit this {post.type.slice(0, post.type.length - 1)} <IconGithub />
			</Button>
		</Link>
	);
};

export default EditPostButton;
