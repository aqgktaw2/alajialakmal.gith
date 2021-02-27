import SEO from "@/components/SEO";
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
	IconPhp,
	IconNextjs,
	IconGraphql,
	IconSass,
	IconAws,
	IconRedux,
	IconNode,
} from "@/components/icons";
import Introduction from "@/components/sections/introduction";
import { Fragment } from "react";

const About = () => {
	return (
		<Fragment>
			<SEO title="About Me | Denny Hong" />
			<div className="page-about">
				<Introduction useHeading1 />
				<div className="page-about__inner">
					<Timeline>
						<Timeline.Item className="page-about__timeline" Icon={<IconWeb />}>
							<h3>Web Developer @ Beacon Digital Marketing</h3>
							<p>December 2020 - Present</p>
							<ul>
								<li>
									Developing and maintaining various web projects at scale on WordPress and Hubspot
									CMS.
								</li>
								<li>
									Developing and maintaining internal toolings/applications with React and Next.js.
								</li>
								<li>Explorations around Headless CMS and JAM Stack technologies/services.</li>
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
									<IconWordpress />
								</span>
								<span>
									<IconPhp />
								</span>
								<span>
									<IconHubspot />
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
								<li>Integrated AWS Cognito for authentication and DynamoDB for NoSQL Datastore.</li>
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
							<p>July 2020 - September 2020</p>
							<ul>
								<li>
									Developed and shipped an Organization Charts builder and visualiser webapp using
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
								They say the class of 2020 is &quot;cursed&quot;, but looking back at it, I
								wouldn&apos;t have it any other way.
							</p>
							<p>
								2020 had made me so much stronger mentally, and gave me the time I needed to gain
								knowledge and experience with all my favorite toolings and technologies that
								I&lsquo;m using every day on the job.
							</p>
						</Timeline.Item>
					</Timeline>
				</div>
			</div>
		</Fragment>
	);
};

export default About;
