import Link from "@components/link";
import ProjectCard from "@components/projectCard";
import Heading from "@components/heading";
import Button from "@components/button";

import { RecentProjectsSection, RecentProjectsHeader, RecentProjectsInner } from "./styles";

const RecentProjects = ({ projects, showListingLink = true, headerText = "Projects" }) => {
	return (
		<RecentProjectsSection className="section-recent-projects">
			<RecentProjectsHeader className="section-recent-projects__header">
				<Heading level={2} data-gsap="reveal-bottom">
					{headerText}
				</Heading>

				{showListingLink && (
					<Link href="/projects" passHref data-gsap="reveal-bottom" underLine={false}>
						<Button as="span">View More Projects</Button>
					</Link>
				)}
			</RecentProjectsHeader>

			<RecentProjectsInner className="section-recent-projects__inner">
				{projects.map((project, idx) => (
					<ProjectCard project={project} key={idx} />
				))}
			</RecentProjectsInner>
		</RecentProjectsSection>
	);
};

export default RecentProjects;
