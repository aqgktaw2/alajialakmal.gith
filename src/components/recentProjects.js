import Link from "next/link";
import Image from "next/image";

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

      <div data-gsap="reveal-bottom" className="section-recent-projects__inner">
        <div className="project-card">
          <div className="project-card__info">
            <h3 className="project-card__title">Signals Analytics</h3>
            <p>
              <Link href="https://www.signals-analytics.com/">
                <a target="_blank" rel="noopener noreferrer">
                  Signals Analytics
                </a>
              </Link>{" "}
              is a fast-growing business intelligence company that needs a new website with a modern
              design that fits its brand. Together with my teammates, we delivered and are actively
              maintaining a feature-complete website experience with futuristic looking UI elements.
            </p>
            <Link href={`/projects/signals-analytics`} passHref>
              <a className="btn">Read More</a>
            </Link>
          </div>
          <div className="project-card__image">
            <Image src="/signals.png" width={2256} height={9582} />
          </div>
        </div>

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
      </div>
    </section>
  );
};

export default RecentProjects;
