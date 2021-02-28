import { Fragment } from "react";

import Footer from "./footer";
import Header from "./header";
import Meta from "@/components/meta";
import SkipLink from "@/components/skipLink";
import BackToTop from "@/components/backToTop";

export default function Layout({ children }) {
	return (
		<Fragment>
			<Meta />
			<SkipLink />
			<Header>
				{/* <Header.Alert linkHref="/" linkLabel=" view it here!">
					New article is alive,
				</Header.Alert> */}
			</Header>
			<main id="main-content">{children}</main>
			<Footer />
			<BackToTop />
		</Fragment>
	);
}
