import { FOOTER_SOCIAL_LINKS, NAV_ITEMS } from "@lib/constants";
import SubsribeForm from "@components/subscirbeForm";
import Heading from "@components/heading";
import SiteLogo from "@components/siteLogo";
import Link from "@components/link";
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
	FeedLink,
	StyledSocialLinkContent,
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
												<Heading level={3} as="span" noMargin>
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
								{FOOTER_SOCIAL_LINKS.map(({ href, icon, label }, idx) => (
									<li key={idx}>
										<Link href={href} passHref target="_blank" rel="noopener noreferrer">
											<StyledSocialLinkContent level={3} as="span">
												{icon} {label}
											</StyledSocialLinkContent>
										</Link>
									</li>
								))}
							</ul>
						</StyledSiteLinks>
					</StyledFooterRight>
				</StyledFooterTop>

				<StyledFooterBottom>
					<Link href="/" passHref underLine={false}>
						<SiteLogo width="8.5rem" height="8.5rem" />
					</Link>

					<p>© {new Date().getFullYear()} DENNY HONG | ALL RIGHTS RESERVED</p>

					<div>
						<ul>
							{FEED_LINKS.map(({ Icon, label, href }, idx) => (
								<li key={idx}>
									<FeedLink href={href} passHref target="_blank" rel="noopener noreferrer">
										{Icon} {label}
									</FeedLink>
								</li>
							))}
						</ul>
					</div>
				</StyledFooterBottom>
			</StyledFooterContent>
		</StyledFooter>
	);
}
