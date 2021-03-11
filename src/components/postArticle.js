import { Fragment } from "react";

import PostBody from "@/components/postBody";
import PostHeader from "@/components/postHeader";
import PostFooter from "@/components/postFooter";
import Meta from "./meta";
import toReactComponent from "@/utils/toReactComponent";

const PostArticle = ({ post }) => {
	return (
		<Fragment>
			<Meta title={`${post.title} | Denny Hong`} description={post.excerpt} />

			<article>
				<PostHeader
					title={post.title}
					coverImage={post.coverImage}
					date={post.date}
					author={post.author}
					readTime={post.readTime}
					tags={post.tags}
					type={post.type}
				/>
				<PostBody content={toReactComponent(post.content)} />

				<PostFooter post={post} />
			</article>
		</Fragment>
	);
};

export default PostArticle;
