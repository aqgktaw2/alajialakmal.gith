import { Fragment } from "react";
import dynamic from "next/dynamic";

import { IconGrad, IconCode, IconJsWhite, IconWeb } from "@components/icons";
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

const BDMTechs = [
	"JavaScript",
	"HTML",
	"CSS",
	"Sass",
	"React",
	"NextJs",
	"Firebase",
	"Wordpress",
	"Hubspot",
];

const WRLDSTechs = [
	"JavaScript",
	"HTML",
	"CSS",
	"Sass",
	"React",
	"Redux",
	"NextJs",
	"NodeJs",
	"GraphQL",
	"AWS",
];

const HarmonizeTechs = ["JavaScript", "HTML", "CSS", "Sass", "React", "Redux", "NodeJs"];

const About = () => {
	return (
		<Fragment>
			<Meta title="About Me | Denny Hong" />

			<AboutPage as="div">
				<Introduction useHeading1 linkToEmbeded noBg />

				{/* TIMELINE */}
				<AboutPageInner>
					<StyledTimeline>
						<StyledTimeline.Item Icon={<IconWeb />}>
							<Heading level={3}>Web Developer @ Beacon Digital Marketing</Heading>
							<p>December 2020 - Present</p>
							<ul>
								<li>
									Developing customer-facing frontend UI for various web projects at scale using
									JavaScript, HTML, and CSS.
								</li>
								<li>
									Developing reusable components & implementing features for internal
									tools/applications using React, Next.js, and Styled Components.
								</li>
								<li>
									Explorations around DX optimizations, JAM Stack integrations, and Headless CMS.
								</li>
							</ul>
							<TechIcons>
								{BDMTechs.map(tech => (
									<StyledTechIcon key={tech} techName={tech} />
								))}
							</TechIcons>
						</StyledTimeline.Item>

						<StyledTimeline.Item Icon={<IconJsWhite />}>
							<Heading level={3}>JavaScript Developer @ WRLDS</Heading>
							<p>September 2020 - December 2020</p>
							<ul>
								<li>
									Developed reusable UI components for WRLDS&apos;s web application using React,
									Next.js, and Sass.
								</li>
								<li>
									Implemented customer-facing features such as user authentication, and email
									notification.
								</li>
								<li>Participated in deploying a Node.js-based GraphQL API server on AWS EC2.</li>
							</ul>
							<TechIcons>
								{WRLDSTechs.map(tech => (
									<StyledTechIcon key={tech} techName={tech} />
								))}
							</TechIcons>
						</StyledTimeline.Item>

						<StyledTimeline.Item Icon={<IconCode />}>
							<Heading level={3}>Fullstack Development Intern @ Harmonize</Heading>
							<p>June 2020 - September 2020</p>
							<ul>
								<li>
									Developed UI components for &quot;OrgChart&quot; - a web application that helps
									visualize organizational structures, using React, Redux, and Bootstrap.
								</li>
								<li>Developed CRUD API endpoints on a Node.js API server.</li>
								<li>Participated in deploying the Node.js API server to AWS Elastic Beanstalk.</li>
							</ul>
							<TechIcons>
								{HarmonizeTechs.map(tech => (
									<StyledTechIcon key={tech} techName={tech} />
								))}
							</TechIcons>
						</StyledTimeline.Item>

						<StyledTimeline.Item Icon={<IconGrad />}>
							<Heading level={3}>Graduated from University of Washington 🎉</Heading>
							<p>June 2020</p>
							<p>
								I graduated from the University of Washington with a bachelor&apos;s in Information
								Systems.
							</p>
							<p>
								Admittedly, 2020 might not be the greatest year to graduate, but it had made me much
								stronger mentally. I&apos;m glad I&apos;ve developed a passion for web development
								and made my first little steps into my career.
							</p>
						</StyledTimeline.Item>
					</StyledTimeline>
					{/* END TIMELINE */}

					<Embeded />
				</AboutPageInner>
			</AboutPage>
		</Fragment>
	);
};

export default About;
