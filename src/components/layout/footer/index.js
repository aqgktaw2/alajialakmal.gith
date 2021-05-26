import Link from "next/link";

import { SOCIAL_ITEMS, NAV_ITEMS } from "@lib/constants";
import SubsribeForm from "@components/subscirbeForm";
import Heading from "@components/heading";
import SiteLogo from "@components/siteLogo";
import { IconRss, IconJson } from "@components/icons";

import {
	StyledFooter,
	StyledFooterWaves,
	StyledFooterContent,
	StyledFooterTop,
	StyledFooterLeft,
	StyledFooterRight,
	StyledSiteLinks,
	StyledFooterBottom,
} from "./styles";

const FEED_LINKS = [
	{
		href: "/rss/feed.xml",
		label: "RSS Feed",
		Icon: <IconRss />,
	},
	{
		href: "/rss/atom.xml",
		label: "Atom Feed",
		Icon: <IconRss />,
	},
	{
		href: "/rss/feed.json",
		label: "JSON Feed",
		Icon: <IconJson />,
	},
];

export default function Footer() {
	return (
		<StyledFooter>
			<StyledFooterWaves />

			<StyledFooterContent>
				<StyledFooterTop>
					<StyledFooterLeft>
						<SubsribeForm />
					</StyledFooterLeft>

					<StyledFooterRight>
						<StyledSiteLinks>
							<Heading level={2}>Site Links</Heading>
							<nav>
								<ul>
									{NAV_ITEMS.map(({ href, label }, idx) => (
										<li key={idx}>
											<Link href={href} passHref>
												<Heading level={3} as="a">
													{label}
												</Heading>
											</Link>
										</li>
									))}
								</ul>
							</nav>
						</StyledSiteLinks>

						<StyledSiteLinks>
							<Heading level={2}>Get in touch</Heading>
							<ul>
								{SOCIAL_ITEMS.map(({ href, icon, label }, idx) => (
									<li key={idx}>
										<Link href={href} passHref>
											<Heading level={3} as="a" target="_blank" rel="noopener noreferrer">
												{icon} {label}
											</Heading>
										</Link>
									</li>
								))}
							</ul>
						</StyledSiteLinks>
					</StyledFooterRight>
				</StyledFooterTop>

				<StyledFooterBottom>
					<Link href="/" passHref>
						<a>
							<SiteLogo width="8.5rem" height="8.5rem" />
						</a>
					</Link>

					<p>© {new Date().getFullYear()} DENNY HONG | ALL RIGHTS RESERVED</p>

					<div>
						<ul>
							{FEED_LINKS.map(({ Icon, label, href }, idx) => (
								<li key={idx}>
									<Link href={href} passHref>
										<a target="_blank" rel="noopener noreferrer">
											{Icon} {label}
										</a>
									</Link>
								</li>
							))}
						</ul>
					</div>
				</StyledFooterBottom>
			</StyledFooterContent>
		</StyledFooter>
	);
}
