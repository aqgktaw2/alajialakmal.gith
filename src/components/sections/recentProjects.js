import Link from "next/link";

import ProjectCard from "@/components/projectCard";

const RecentProjects = ({ projects, showListingLink = true, headerText = "Lastest projects" }) => {
  return (
    <section className="section-recent-projects">
      <div className="section-recent-projects__header">
        <h2 data-gsap="reveal-bottom">{headerText}</h2>
        {showListingLink && (
          <Link href="/projects" passHref>
            <a data-gsap="reveal-bottom" className="btn">
              View More Projects
            </a>
          </Link>
        )}
      </div>

      <div className="section-recent-projects__inner">
        {projects.map((project, idx) => (
          <ProjectCard project={project} key={idx} />
        ))}
      </div>
    </section>
  );
};

export default RecentProjects;
