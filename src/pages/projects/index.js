import Link from "next/link";
import { Fragment } from "react";

import { getAllPosts } from "@lib/api";
import getherAllTags from "@utils/getherAllTags";
import ProjectCard from "@components/projectCard";
import Meta from "@components/meta";

const Projects = ({ allProjects }) => {
	return (
		<Fragment>
			<Meta
				title="My web development projects | Denny Hong"
				description="View a list of Denny Hong's projects on web development."
			/>

			<div className="page-projects-listing">
				<div className="page-projects-listing__header">
					<h1>Commercial & Personal Projects</h1>
				</div>
				<div className="page-projects-listing__inner">
					{/* Projects */}
					<section className="page-projects-listing__posts">
						{allProjects.map((project, idx) => (
							<ProjectCard key={idx} project={project} />
						))}
					</section>

					{/* Sidebar */}
					<aside className="page-projects-listing__sidebar">
						<h2>Technologies:</h2>
						<div className="page-projects-listing__tags">
							{getherAllTags(allProjects).map((tag, idx) => (
								<Link key={idx} href={`/technologies/${tag}`} passHref>
									<a>#{tag}</a>
								</Link>
							))}
						</div>
					</aside>
				</div>
			</div>
		</Fragment>
	);
};

export default Projects;

export async function getStaticProps() {
	// List all posts
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
			allProjects,
		},
		revalidate: 1,
	};
}
