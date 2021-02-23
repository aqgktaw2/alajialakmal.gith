import { Fragment } from "react";

import Footer from "./footer";
import Header from "./header";
import Meta from "@/components/meta";
import SkipLink from "@/components/skipLink";

export default function Layout({ children }) {
	return (
		<Fragment>
			<Meta />
			<SkipLink />
			<Header />
			<main id="main-content">{children}</main>
			<Footer />
		</Fragment>
	);
}
