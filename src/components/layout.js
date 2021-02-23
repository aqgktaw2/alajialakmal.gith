import { Fragment } from "react";

import Footer from "./footer";
import Header from "./header";
import Meta from "./meta";

export default function Layout({ preview, children }) {
	return (
		<Fragment>
			<Meta />
			<Header />
			<main>{children}</main>
			<Footer />
		</Fragment>
	);
}
