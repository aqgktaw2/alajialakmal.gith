import { Fragment } from "react";

import { listAllPosts } from "@lib/api";
import getherAllTags from "@utils/getherAllTags";
import ProjectCard from "@components/projectCard";
import Meta from "@components/meta";
import Heading from "@components/heading";

import {
	ProjectsListing,
	ProjectsListingHeader,
	ProjectsListingInner,
	PostListsingItems,
	ProjectsListingSidebar,
	ProjectsListingTags,
	TagLink,
} from "@styles/pages/projects";

const Projects = ({ allProjects }) => {
	return (
		<Fragment>
			<Meta
				title="My web development projects | Denny Hong"
				description="View a list of Denny Hong's projects on web development."
			/>

			<ProjectsListing as="div">
				<ProjectsListingHeader>
					<Heading level={1}>Commercial & Personal Projects</Heading>
				</ProjectsListingHeader>

				{/* Projects */}
				<ProjectsListingInner>
					<PostListsingItems>
						{allProjects.map((project, idx) => (
							<ProjectCard key={idx} project={project} />
						))}
					</PostListsingItems>

					{/* Sidebar */}
					<ProjectsListingSidebar>
						<Heading level={2}>Technologies:</Heading>
						<ProjectsListingTags>
							{getherAllTags(allProjects).map((tag, idx) => (
								<TagLink key={idx} href={`/technologies/${tag}`} passHref>
									#{tag}
								</TagLink>
							))}
						</ProjectsListingTags>
					</ProjectsListingSidebar>
				</ProjectsListingInner>
			</ProjectsListing>
		</Fragment>
	);
};

export default Projects;

export async function getStaticProps() {
	// List all posts
	const allProjects = listAllPosts({
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
			allProjects,
		},
		revalidate: 1,
	};
}
