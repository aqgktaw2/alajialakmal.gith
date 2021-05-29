import Link from "@components/link";
import ProjectCard from "@components/projectCard";
import Heading from "@components/heading";
import Button from "@components/button";
import Section from "@components/section";

import { RecentProjectsHeader, RecentProjectsInner } from "./styles";

const RecentProjects = ({ projects, showListingLink = true, headerText = "Projects" }) => {
	return (
		<Section>
			<RecentProjectsHeader>
				<Heading level={2} data-gsap="reveal-bottom">
					{headerText}
				</Heading>

				{showListingLink && (
					<Link href="/projects" passHref data-gsap="reveal-bottom" underLine={false}>
						<Button as="span">View More Projects</Button>
					</Link>
				)}
			</RecentProjectsHeader>

			<RecentProjectsInner>
				{projects.map((project, idx) => (
					<ProjectCard project={project} key={idx} />
				))}
			</RecentProjectsInner>
		</Section>
	);
};

export default RecentProjects;
