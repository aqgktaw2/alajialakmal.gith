import { Fragment } from "react";
import dynamic from "next/dynamic";

import { getAllPosts } from "@/lib/api";
import generateRssFeed from "@/lib/rss";
import generateSitemap from "@/lib/sitemap";
import HeroBanner from "@/components/sections/heroBanner";
import Introduction from "@/components/sections/introduction";
import Meta from "@/components/meta";

const RecentPosts = dynamic(() => import("@/components/sections/recentPosts"));
const RecentSnippets = dynamic(() => import("@/components/sections/recentSnippets"));
const RecentProjects = dynamic(() => import("@/components/sections/recentProjects"));

// Test linting
const Home = ({ posts, projects, snippets }) => {
	return (
		<Fragment>
			<Meta />
			<HeroBanner />
			<Introduction />
			<RecentPosts posts={posts} />
			<RecentSnippets posts={snippets} />
			<RecentProjects projects={projects} />
		</Fragment>
	);
};

export default Home;

export async function getStaticProps() {
	// List all posts
	const posts = getAllPosts({
		fields: ["title", "date", "slug", "author", "coverImage", "excerpt", "type", "tags"],
		postType: "posts",
	}).slice(0, 3);

	const projects = getAllPosts({
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
	}).slice(0, 2);

	const snippets = getAllPosts({
		fields: ["title", "date", "slug", "author", "coverImage", "excerpt", "type", "tags"],
		postType: "snippets",
	}).slice(0, 3);

	// Generate RSS Feed and Sitemap
	await generateRssFeed();
	await generateSitemap();

	return {
		props: {
			posts,
			projects,
			snippets,
		},
		revalidate: 1,
	};
}
