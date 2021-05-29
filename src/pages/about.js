import { Fragment } from "react";
import dynamic from "next/dynamic";

import Timeline from "@components/timeline";
import {
	IconGrad,
	IconCode,
	IconJsWhite,
	IconWeb,
	IconHtml,
	IconCss,
	IconJs,
	IconReact,
	IconWordpress,
	IconHubspot,
	IconNextjs,
	IconGraphql,
	IconSass,
	IconAws,
	IconRedux,
	IconNode,
	IconFirebase,
} from "@components/icons";
import Introduction from "@components/sections/introduction";
import Meta from "@components/meta";

const Embeded = dynamic(() => import("@components/sections/embeded"));

const About = () => {
	return (
		<Fragment>
			<Meta title="About Me | Denny Hong" />

			<div className="page-about">
				<Introduction useHeading1 linkToEmbeded noBg />

				<div className="page-about__inner">
					{/* TIMELINE */}
					<Timeline className="page-about__timeline">
						<Timeline.Item Icon={<IconWeb />}>
							<h3>Web Developer @ Beacon Digital Marketing</h3>
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
							<div className="page-about__timeline-tech">
								<span>
									<IconJs />
								</span>
								<span>
									<IconHtml />
								</span>
								<span>
									<IconCss />
								</span>
								<span>
									<IconSass />
								</span>
								<span>
									<IconReact />
								</span>
								<span>
									<IconNextjs />
								</span>
								<span>
									<IconFirebase />
								</span>
								<span>
									<IconHubspot />
								</span>
								<span>
									<IconWordpress />
								</span>
							</div>
						</Timeline.Item>
						<Timeline.Item Icon={<IconJsWhite />}>
							<h3>JavaScript Developer @ WRLDS</h3>
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
							<div className="page-about__timeline-tech">
								<span>
									<IconJs />
								</span>
								<span>
									<IconHtml />
								</span>
								<span>
									<IconCss />
								</span>
								<span>
									<IconSass />
								</span>
								<span>
									<IconReact />
								</span>
								<span>
									<IconRedux />
								</span>
								<span>
									<IconNextjs />
								</span>
								<span>
									<IconNode />
								</span>
								<span>
									<IconGraphql />
								</span>
								<span>
									<IconAws />
								</span>
							</div>
						</Timeline.Item>
						<Timeline.Item Icon={<IconCode />}>
							<h3>Fullstack Development Intern @ Harmonize</h3>
							<p>June 2020 - September 2020</p>
							<ul>
								<li>
									Developed UI components for &quot;OrgChart&quot; - a web application that helps
									visualize organizational structures, using React, Redux, and Bootstrap.
								</li>
								<li>Developed CRUD API endpoints on a Node.js API server.</li>
								<li>Participated in deploying the Node.js API server to AWS Elastic Beanstalk.</li>
							</ul>
							<div className="page-about__timeline-tech">
								<span>
									<IconJs />
								</span>
								<span>
									<IconHtml />
								</span>
								<span>
									<IconCss />
								</span>
								<span>
									<IconSass />
								</span>
								<span>
									<IconReact />
								</span>
								<span>
									<IconRedux />
								</span>
								<span>
									<IconNode />
								</span>
							</div>
						</Timeline.Item>
						<Timeline.Item Icon={<IconGrad />}>
							<h3>Graduated from University of Washington 🎉</h3>
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
						</Timeline.Item>
					</Timeline>
					{/* END TIMELINE */}

					<Embeded />
				</div>
			</div>
		</Fragment>
	);
};

export default About;
