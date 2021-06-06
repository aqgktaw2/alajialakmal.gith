import useWindowResize from "@hooks/useWindowResize";
import Link from "@components/link";
import Heading from "@components/heading";
import Button from "@components/button";
import TechIcon from "@components/techIcon";
import InvisibleText from "@components/invisibleText";
import { IconExternal } from "@components/icons";

import {
	StyledProjectCard,
	StyledProjectInfo,
	StyledProjectActions,
	StyledProjectTech,
	StyledProjectImage,
	InfoLink,
	TechLink,
} from "./styles";

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
								<TechIcon techName={tag} />
							</TechLink>
						))}
					</StyledProjectTech>

					<Link href={`/projects/${slug}`} passHref underLine={false}>
						<Button as="span">
							Read More <InvisibleText>about ${title}</InvisibleText>
						</Button>
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
