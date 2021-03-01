import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { Fragment } from "react";

import { getPostBySlug, getAllPosts } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import PostArticle from "@/components/postArticle";
import RecentProjects from "@/components/sections/recentProjects";
import BlogProgress from "@/components/blogProgress";

const Project = ({ project, relatedProjects }) => {
	const router = useRouter();

	if (router.isFallback) {
		return <h1>Loading...</h1>;
	}

	if (!router.isFallback && !project?.slug) {
		return <ErrorPage statusCode={404} />;
	}

	return (
		<Fragment>
			<BlogProgress />

			{/* Project */}
			<PostArticle post={project} />

			{/* Related Projects */}
			<RecentProjects
				projects={relatedProjects}
				showListingLink={false}
				headerText="Similar Projects"
			/>
		</Fragment>
	);
};

export default Project;

export async function getStaticProps({ params }) {
	// Get the project
	const project = getPostBySlug({
		slug: params.slug,
		fields: [
			"title",
			"date",
			"slug",
			"author",
			"content",
			"ogImage",
			"coverImage",
			"tags",
			"type",
			"clientUrl",
		],
		postType: "projects",
	});
	const content = await markdownToHtml(project.content || "");

	// List at most 2 related projects
	const relatedProjects = getAllPosts({
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
	})
		.filter(
			otherProject =>
				otherProject.slug !== project.slug &&
				otherProject.tags.find(tag => otherProject.tags.includes(tag)),
		)
		.slice(0, 2);

	return {
		props: {
			project: {
				...project,
				content,
			},
			relatedProjects,
		},
		revalidate: 1,
	};
}

export async function getStaticPaths() {
	// List all posts' slugs
	const posts = getAllPosts({ fields: ["slug"], postType: "projects" });

	return {
		paths: posts.map(post => {
			return {
				params: {
					slug: post.slug,
				},
			};
		}),
		fallback: false,
	};
}
