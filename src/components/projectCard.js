import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import debounce from "@/utils/debounce";
import { TECH_ICONS } from "@/lib/constants";

const ProjectCard = ({ project: { title, slug, coverImage, excerpt, clientUrl, tags } }) => {
  const imageContainerRef = useRef();
  const projectCardRef = useRef();

  useEffect(() => {
    const matchHeight = debounce(function () {
      gsap.to(imageContainerRef.current, {
        height: imageContainerRef.current.getBoundingClientRect().width * 2,
      });
    }, 100);
    matchHeight();
    window.addEventListener("resize", matchHeight);
    return () => {
      window.removeEventListener("resize", matchHeight);
    };
  }, []);

  return (
    <div data-gsap="reveal-bottom" className="project-card">
      <div ref={projectCardRef} className="project-card__info">
        <Link href={clientUrl} passHref>
          <a className="project-card__title" target="_blank" rel="noopener noreferrer">
            <h3>{title}</h3>
          </a>
        </Link>

        <p>{excerpt}</p>

        <div className="project-card__actions">
          <div className="project-card__tech">
            {tags.map((tag, idx) => (
              <Link key={idx} href={`/tech/${tag}`} passHref>
                <a>{TECH_ICONS[tag]}</a>
              </Link>
            ))}
          </div>

          <Link href={`/projects/${slug}`} passHref>
            <a className="btn">Read More</a>
          </Link>
        </div>
      </div>

      <div ref={imageContainerRef} className="project-card__image">
        <img src={coverImage} alt={title} />
      </div>
    </div>
  );
};

export default ProjectCard;
