import { Fragment } from "react";
import dynamic from "next/dynamic";

import { listAllPosts, getPageBySlug } from "@lib/api";
import generateRssFeed from "@lib/rss";
import generateSitemap from "@lib/sitemap";
import HeroBanner from "@components/sections/heroBanner";
import Introduction from "@components/sections/introduction";
import Meta from "@components/meta";

const RecentPosts = dynamic(() => import("@components/sections/recentPosts"));
const RecentSnippets = dynamic(() => import("@components/sections/recentSnippets"));
const RecentProjects = dynamic(() => import("@components/sections/recentProjects"));

// Test linting
const Home = ({ posts, projects, snippets, pageContent }) => {
	return (
		<Fragment>
			<Meta
				title={pageContent?.page_title}
				description={pageContent?.page_description}
				ogImage={pageContent?.page_description}
			/>

			{pageContent?.page_sections.map(section => {
				switch (section.template) {
					case "section-hero-banner": {
						return <HeroBanner key={section.template} content={section} />;
					}
					case "section-introduction": {
						return <Introduction key={section.template} content={section} />;
					}
					case "section-posts-listing": {
						return <RecentPosts key={section.template} posts={posts} content={section} />;
					}
					case "section-snippets-listing": {
						return <RecentSnippets key={section.template} posts={snippets} content={section} />;
					}
					case "section-projects-listing": {
						return <RecentProjects key={section.template} projects={projects} content={section} />;
					}
					default: {
						return null;
					}
				}
			})}
		</Fragment>
	);
};

export default Home;

export async function getStaticProps() {
	// List all posts
	const posts = listAllPosts({
		fields: ["title", "date", "slug", "author", "coverImage", "excerpt", "type", "tags"],
		postType: "posts",
	}).slice(0, 3);

	const projects = listAllPosts({
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

	const snippets = listAllPosts({
		fields: ["title", "date", "slug", "author", "coverImage", "excerpt", "type", "tags"],
		postType: "snippets",
	}).slice(0, 3);

	const pageContent = getPageBySlug({ slug: "index" });

	// Generate RSS Feed and Sitemap
	await generateRssFeed();
	await generateSitemap();

	return {
		props: {
			posts,
			projects,
			snippets,
			pageContent,
		},
		revalidate: 1,
	};
}
