import Head from "next/head";
import { Fragment } from "react";

import { getAllPosts } from "../lib/api";
import HeroBanner from "@/components/sections/heroBanner";
import RecentPosts from "@/components/sections/recentPosts";
import Introduction from "@/components/sections/introduction";
import RecentSnippets from "@/components/sections/recentSnippets";
import RecentProjects from "@/components/sections/recentProjects";

const Home = ({ allPosts, allProjects }) => {
	return (
		<Fragment>
			<Head>
				<title>Next.js Blog Example</title>
			</Head>

			<HeroBanner />

			<Introduction />

			<RecentPosts posts={allPosts} />

			<RecentSnippets posts={allPosts} />

			<RecentProjects projects={allProjects} />
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

	const allProjects = getAllPosts({
		fields: [
			"title",
			"date",
			"slug",
			"author",
			"coverImage",
			"excerpt",
			"type",
			"tags",
			"clientUrl",
		],
		postType: "projects",
	});

	return {
		props: {
			allPosts,
			allProjects,
		},
	};
}
