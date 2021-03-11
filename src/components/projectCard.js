import Link from "next/link";

import { TECH_ICONS } from "@/lib/constants";
import useWindowResize from "@/hooks/useWindowResize";
import { IconExternal } from "./icons";

const ProjectCard = ({ project: { title, slug, coverImage, excerpt, clientUrl, tags } }) => {
	const {
		windowSize: { width },
	} = useWindowResize();
	return (
		<div data-gsap="reveal-bottom" className="project-card">
			<div className="project-card__info">
				<Link href={clientUrl} passHref>
					<a className="project-card__title" target="_blank" rel="noopener noreferrer">
						<h3>{title}</h3> <IconExternal />
					</a>
				</Link>

				{width > 768 ? <p>{excerpt}</p> : <p>{`${excerpt.slice(0, 100)}...`}</p>}

				<div className="project-card__actions">
					<div className="project-card__tech">
						{tags.map((tag, idx) => (
							<Link key={idx} href={`/technologies/${tag}`} passHref>
								<a aria-label={tag}>{TECH_ICONS[tag]}</a>
							</Link>
						))}
					</div>

					<Link href={`/projects/${slug}`} passHref>
						<a className="btn">Read More</a>
					</Link>
				</div>
			</div>

			<div className="project-card__image">
				<img loading="lazy" src={coverImage} alt={title} />
			</div>
		</div>
	);
};

export default ProjectCard;
