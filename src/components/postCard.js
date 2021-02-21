import Image from "next/image";
import Link from "next/link";

const PostCard = ({ post }) => {
  return (
    <div data-gsap="reveal-bottom" className="post-card">
      <div className="post-card__image">
        <Image src={post.coverImage} width={556} height={278} />
      </div>
      <p>
        {new Date(post.date).toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
      <Link href={`/posts/${post.slug}`} passHref>
        <a className="h3">{post.title}</a>
      </Link>
      <p className="post-card__excerpt">{post.excerpt}</p>
      <Link href={`/posts/${post.slug}`} passHref>
        <a className="post-card__link">Read More</a>
      </Link>
    </div>
  );
};

export default PostCard;
