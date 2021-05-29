import Link from "@components/link";

import { TECH_ICONS } from "@lib/constants";
import useWindowResize from "@hooks/useWindowResize";
import { IconExternal } from "@components/icons";

import {
	StyledProjectCard,
	StyledProjectInfo,
	StyledProjectActions,
	StyledProjectTech,
	TechIconWrapper,
	StyledProjectImage,
	InfoLink,
	TechLink,
} from "./styles";
import Heading from "@components/heading";
import Button from "@components/button";

const ProjectCard = ({ project: { title, slug, coverImage, excerpt, clientUrl, tags } }) => {
	const {
		windowSize: { width },
	} = useWindowResize();

	return (
		<StyledProjectCard data-gsap="reveal-bottom">
			<StyledProjectInfo>
				<InfoLink href={clientUrl} passHref target="_blank" rel="noopener noreferrer">
					<Heading as="span" level={3}>
						{title}
					</Heading>
					<IconExternal />
				</InfoLink>

				{width > 768 ? <p>{excerpt}</p> : <p>{`${excerpt.slice(0, 100)}...`}</p>}

				<StyledProjectActions>
					<StyledProjectTech>
						{tags.map((tag, idx) => (
							<TechLink
								key={idx}
								href={`/technologies/${tag}`}
								passHref
								aria-label={tag}
								underLine={false}
							>
								<TechIconWrapper>{TECH_ICONS[tag]}</TechIconWrapper>
							</TechLink>
						))}
					</StyledProjectTech>

					<Link href={`/projects/${slug}`} passHref underLine={false}>
						<Button as="span">Read More</Button>
					</Link>
				</StyledProjectActions>
			</StyledProjectInfo>

			<StyledProjectImage>
				<img loading="lazy" src={coverImage} alt={title} />
			</StyledProjectImage>
		</StyledProjectCard>
	);
};

export default ProjectCard;
