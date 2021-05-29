import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import ErrorPage from "next/error";
import { Fragment } from "react";

import { getPostBySlug, getAllPosts } from "@lib/api";
import markdownToHtml from "@lib/markdownToHtml";
import PostArticle from "@components/postArticle";
import BlogProgress from "@components/blogProgress";
import Heading from "@components/heading";

const RecentProjects = dynamic(() => import("@components/sections/recentProjects"));

const Project = ({ project, relatedProjects }) => {
	const router = useRouter();

	if (router.isFallback) {
		return <Heading level={1}>Loading...</Heading>;
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
			"excerpt",
			"type",
			"clientUrl",
			"readTime",
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
			"readTime",
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
