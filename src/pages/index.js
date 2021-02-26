import { Fragment } from "react";

import { getAllPosts } from "../lib/api";
import HeroBanner from "@/components/sections/heroBanner";
import RecentPosts from "@/components/sections/recentPosts";
import Introduction from "@/components/sections/introduction";
import RecentSnippets from "@/components/sections/recentSnippets";
import RecentProjects from "@/components/sections/recentProjects";

// Test linting
const Home = ({ posts, projects, snippets }) => {
	return (
		<Fragment>
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
	});

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
	});

	const snippets = getAllPosts({
		fields: ["title", "date", "slug", "author", "coverImage", "excerpt", "type", "tags"],
		postType: "snippets",
	});

	return {
		props: {
			posts,
			projects,
			snippets,
		},
		revalidate: 1,
	};
}
