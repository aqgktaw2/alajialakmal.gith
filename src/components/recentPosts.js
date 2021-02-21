import Image from "next/image";
import Link from "next/link";

const RecentPosts = ({ posts }) => {
  console.log(posts);
  return (
    <section className="section-recent-posts">
      <div className="section-recent-posts__header">
        <h2 data-gsap="reveal-bottom">Lastest blog posts</h2>
        <Link href="/posts" passHref>
          <a data-gsap="reveal-bottom" className="btn">
            View More Articles
          </a>
        </Link>
      </div>
      <div className="section-recent-posts__inner">
        {posts.map((post, idx) => (
          <div key={idx} data-gsap="reveal-bottom" className="post-card">
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
        ))}
      </div>
    </section>
  );
};

export default RecentPosts;
