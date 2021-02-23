import Head from "next/head";

import PostBody from "@/components/postBody";
import PostHeader from "@/components/postHeader";

const PostArticle = ({ post }) => {
  return (
    <article>
      <Head>
        <title>{post.title} | Next.js Blog Example</title>
        <meta property="og:image" content={post.ogImage.url} />
      </Head>
      <PostHeader
        title={post.title}
        coverImage={post.coverImage}
        date={post.date}
        author={post.author}
      />
      <PostBody content={post.content} />
    </article>
  );
};

export default PostArticle;
