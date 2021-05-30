import { Fragment } from "react";
import dynamic from "next/dynamic";

import toReactComponent from "@utils/toReactComponent";
import { TIMELINE_ICONS } from "@lib/constants";
import { getPageBySlug } from "@lib/api";
import Introduction from "@components/sections/introduction";
import Meta from "@components/meta";
import Heading from "@components/heading";

import {
	AboutPage,
	StyledTimeline,
	AboutPageInner,
	TechIcons,
	StyledTechIcon,
} from "@styles/pages/about";

const Embeded = dynamic(() => import("@components/sections/embeded"));

const About = ({ pageContent }) => {
	console.log(pageContent);

	return (
		<Fragment>
			<Meta
				title={pageContent?.page_title}
				description={pageContent?.page_description}
				ogImage={pageContent?.page_description}
			/>

			<AboutPage as="div">
				{pageContent?.page_sections.map(section => {
					switch (section.template) {
						case "section-introduction": {
							return <Introduction key={section.template} content={section} noBg />;
						}
						case "section-timeline": {
							const { timeline_items } = section;
							return (
								<AboutPageInner key={section.template}>
									<StyledTimeline>
										{timeline_items.map(
											({ title, date, icon, content, enable_technologies, technologies }) => {
												return (
													<StyledTimeline.Item key={title} Icon={TIMELINE_ICONS[icon]}>
														{/* TITLE */}
														<Heading level={3}>{title}</Heading>

														{/* DATE */}
														<p>{date}</p>

														{/* TIMELINE CONTENT */}
														{toReactComponent(content)}

														{/* TECH ICONS */}
														{enable_technologies && (
															<TechIcons>
																{technologies.map(tech => (
																	<StyledTechIcon key={tech} techName={tech} />
																))}
															</TechIcons>
														)}
													</StyledTimeline.Item>
												);
											},
										)}
									</StyledTimeline>

									{/* TWITTER & SPOTIFY EMBEDS */}
									<Embeded />
								</AboutPageInner>
							);
						}
						default: {
							return null;
						}
					}
				})}

				{/* TIMELINE */}
			</AboutPage>
		</Fragment>
	);
};

export const getStaticProps = async () => {
	const pageContent = getPageBySlug({ slug: "about" });

	return {
		props: {
			pageContent,
		},
		revalidate: 1,
	};
};

export default About;
