import Head from "next/head";
import { Fragment } from "react";
import { getAllPosts } from "../lib/api";
import { CMS_NAME } from "../lib/constants";

import CodeBanner from "src/components/CodeBanner";
import RecentPosts from "src/components/recentPosts";
import Introduction from "src/components/Introduction";
import RecentSnippets from "src/components/recentSnippets";
import RecentProjects from "src/components/recentProjects";

export default function Index({ allPosts }) {
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
