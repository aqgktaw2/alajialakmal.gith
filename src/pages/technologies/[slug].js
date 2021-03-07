import { useRouter } from "next/router";
import { Fragment } from "react";

import { getAllPosts } from "@/lib/api";
import ProjectCard from "@/components/projectCard";
import SEO from "@/components/SEO";

const Technologies = ({ projects }) => {
	const router = useRouter();

	return (
		<Fragment>
			<SEO
				title={`My web development projects with ${router.query.slug} | Denny Hong`}
				description={`View a list of web development projects by Denny Hong that uses ${router.query.slug}.`}
			/>
			<div className="page-projects-by-technology">
				<section className="page-projects-by-technology__header">
					<h1>My projects with {router.query.slug}</h1>
				</section>
				<section className="page-projects-by-technology__inner">
					{projects.map((project, idx) => (
						<ProjectCard project={project} key={idx} />
					))}
				</section>
			</div>
		</Fragment>
	);
};

export default Technologies;

export const getStaticProps = async ({ params }) => {
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
	const projects = allProjects.filter(project => project.tags.includes(params.slug));

	return {
		props: {
			projects,
		},
		revalidate: 1,
	};
};

export const getStaticPaths = async () => {
	const paths = getAllPosts({
		fields: ["tags"],
		postType: "projects",
	})
		.map(post => post.tags)
		.flat()
		.map(tag => ({ params: { slug: tag } }));

	return {
		paths,
		fallback: false,
	};
};
