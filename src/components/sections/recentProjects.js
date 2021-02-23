import Link from "next/link";

import ProjectCard from "@/components/projectCard";

const RecentProjects = () => {
	return (
		<section className="section-recent-projects">
			<div className="section-recent-projects__header">
				<h2 data-gsap="reveal-bottom">Lastest projects</h2>
				<Link href="/projects" passHref>
					<a data-gsap="reveal-bottom" className="btn">
						View More Projects
					</a>
				</Link>
			</div>

			<div className="section-recent-projects__inner">
				<ProjectCard />
				<ProjectCard />
			</div>
		</section>
	);
};

export default RecentProjects;

/*
<div data-gsap="reveal-bottom" className="project-card">
  <div className="project-card__info">
    <h3>Cysiv</h3>
    <p>
      <Link href="https://mea.cysiv.com/">
        <a target="_blank" rel="noopener noreferrer">
          Cysiv
        </a>
      </Link>{" "}
      is a fast-growing cybersecurity company that needs a new multi-language website.
      Together with my teammates, we delivered and are actively maintaining a brand new
      content-rich website experience that spans more than 70 pages, along with resource
      center and blogging functionalities.
    </p>
    <Link href={`/projects/signals-analytics`} passHref>
      <a className="btn">Read More</a>
    </Link>
  </div>
  <div className="project-card__image">
    <Image src="/cysiv.png" width={2256} height={9208} />
  </div>
</div>
*/
