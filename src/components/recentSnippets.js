import Link from "next/link";

import SnippetCard from "./snippetCard";

const RecentSnippets = ({ posts }) => {
  return (
    <section className="section-recent-snippets">
      <div className="section-recent-snippets__header">
        <h2 data-gsap="reveal-bottom">Lastest code snippets</h2>
        <Link href="/posts" passHref>
          <a data-gsap="reveal-bottom" className="btn">
            View More Snippets
          </a>
        </Link>
      </div>
      <div className="section-recent-snippets__inner">
        {posts.map((post, idx) => (
          <SnippetCard post={post} key={idx} />
        ))}
      </div>
    </section>
  );
};

export default RecentSnippets;
