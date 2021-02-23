import { Fragment } from "react";

import Footer from "./footer";
import Header from "./header";
import Meta from "@/components/meta";

export default function Layout({ children }) {
	return (
		<Fragment>
			<Meta />
			<Header />
			<main>{children}</main>
			<Footer />
		</Fragment>
	);
}
