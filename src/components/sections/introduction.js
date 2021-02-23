import Link from "next/link";

const Introduction = () => {
  return (
    <section className="section-introduction">
      <div className="section-introduction__header">
        <h2 data-gsap="reveal-bottom">Who am I? (the TL;DR version)</h2>
      </div>
      <div className="section-introduction__inner">
        <p data-gsap="reveal-bottom">
          I am a web & JavaScript developer based in Seattle, WA. I'm currently focusing on
          delivering{" "}
          <Link href="/projects" passHref>
            <a>rich & responsive UI experiences</a>
          </Link>{" "}
          for web projects across all scales. In my free time, I enjoy{" "}
          <Link href="/posts" passHref>
            <a>writing technical articles</a>
          </Link>{" "}
          and{" "}
          <Link href="/posts" passHref>
            <a>sharing useful code snippets</a>
          </Link>{" "}
          to help out the community.
        </p>

        {/* More about me button */}
        <Link href="/about" passHref>
          <a data-gsap="reveal-bottom" className="btn">
            More About Me
          </a>
        </Link>
      </div>
    </section>
  );
};

export default Introduction;
