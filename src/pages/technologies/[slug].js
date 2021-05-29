import { useRouter } from "next/router";
import { Fragment } from "react";

import { getAllPosts } from "@lib/api";
import ProjectCard from "@components/projectCard";
import Meta from "@components/meta";
import Heading from "@components/heading";

import { TechContainer, TechHeader, TechPosts } from "@styles/pages/technologies";

const Technologies = ({ projects }) => {
	const router = useRouter();

	return (
		<Fragment>
			<Meta
				title={`My web development projects with ${router.query.slug} | Denny Hong`}
				description={`View a list of web development projects by Denny Hong that uses ${router.query.slug}.`}
			/>

			<TechContainer>
				<TechHeader>
					<Heading level={1}>My projects with {router.query.slug}</Heading>
				</TechHeader>

				<TechPosts>
					{projects.map((project, idx) => (
						<ProjectCard project={project} key={idx} />
					))}
				</TechPosts>
			</TechContainer>
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
