import { Fragment } from "react";
import dynamic from "next/dynamic";

import Header from "./header/index";
import SkipLink from "@components/skipLink";
import BackToTop from "@components/backToTop";

const Footer = dynamic(() => import("./footer"));

export default function Layout({ children }) {
	return (
		<Fragment>
			<SkipLink />
			<Header>
				<Header.Alert linkHref="/snippets/mailchimp-subscribe">
					Setup your Mailchimp newsletter with my new code snippet!
				</Header.Alert>
			</Header>
			<main id="main-content">{children}</main>
			<Footer />
			<BackToTop />
		</Fragment>
	);
}
