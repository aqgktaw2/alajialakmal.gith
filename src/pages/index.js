import Head from "next/head";
import { Fragment } from "react";

import { getAllPosts } from "../lib/api";
import HeroBanner from "@/components/heroBanner";
import RecentPosts from "@/components/recentPosts";
import Introduction from "@/components/Introduction";
import RecentSnippets from "@/components/recentSnippets";
import RecentProjects from "@/components/recentProjects";

const Home = ({ allPosts }) => {
	return (
		<Fragment>
			<Head>
				<title>Next.js Blog Example</title>
			</Head>

			<HeroBanner />

			<Introduction />

			<RecentPosts posts={allPosts} />

			<RecentSnippets posts={allPosts} />

			<RecentProjects post={allPosts} />
		</Fragment>
	);
};

export default Home;

export async function getStaticProps() {
	// List all posts
	const allPosts = getAllPosts({
		fields: ["title", "date", "slug", "author", "coverImage", "excerpt", "type", "tags"],
		postType: "posts",
	});

	return {
		props: { allPosts },
	};
}
