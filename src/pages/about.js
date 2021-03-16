import { Fragment } from "react";
import dynamic from "next/dynamic";

import Timeline from "@/components/timeline";
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
} from "@/components/icons";
import Introduction from "@/components/sections/introduction";
import Meta from "@/components/meta";

const Embeded = dynamic(() => import("@/components/sections/embeded"));

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
								<li>Developing and maintaining various web projects at scale for clients.</li>
								<li>
									Developing and maintaining internal tools and applications with React and Next.js.
								</li>
								<li>Explorations around Headless CMS and JAM Stack integrations/services.</li>
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
									Developed and shipped early iterations of WRLDS&apos; frontend website and webapp
									using React, and Nextjs.
								</li>
								<li>Developed WRLDS&apos; Node.js-based GraphQL API server on AWS EC2.</li>
								<li>Integrated AWS Cognito and DynamoDB for authentication and database.</li>
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
									Developed and shipped an Organizational Charts builder/visualiser webapp using
									React, and Node.js.
								</li>
								<li>
									Integrated Passport.js for user authentication, MongoDB and Mongoose to persist
									user&apos;s chart data.
								</li>
								<li>Deployed on AWS Elastic Beanstalk.</li>
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
								stronger mentally, and I&apos;m glad I&apos;ve developed a passion for web
								development and made my first little steps into my career.
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
