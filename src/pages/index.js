import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Layout from "../components/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import CodeBanner from "src/components/CodeBanner";
import RecentPosts from "src/components/recentPosts";
import Introduction from "src/components/Introduction";
import RecentSnippets from "src/components/recentSnippets";
import RecentProjects from "src/components/recentProjects";
import { Fragment } from "react";

export default function Index({ allPosts }) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <Fragment>
      <Head>
        <title>Next.js Blog Example with {CMS_NAME}</title>
      </Head>

      <CodeBanner />

      <Introduction />

      <RecentPosts posts={allPosts} />

      <RecentSnippets posts={allPosts} />

      <RecentProjects post={allPosts} />

      <Container>
        <Intro />
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </Fragment>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPosts({
    fields: ["title", "date", "slug", "author", "coverImage", "excerpt", "type", "tags"],
    postType: "posts",
  });

  return {
    props: { allPosts },
  };
}
