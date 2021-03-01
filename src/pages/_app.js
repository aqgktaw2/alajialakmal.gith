import { Router } from "next/router";
import NProgress from "nprogress";

import useMobileViewport from "@/hooks/useMobileViewport";
import useScrollReveal from "@/hooks/useScrollReveal";
import Layout from "@/components/layout";
import "../styles/main.scss";

// Progress bar
Router.events.on("routeChangeStart", () => {
	document.documentElement.style.scrollBehavior = "initial";
	NProgress.start();
});
Router.events.on("routeChangeComplete", () => {
	document.documentElement.style.scrollBehavior = "smooth";
	NProgress.done();
});
Router.events.on("routeChangeError", () => {
	document.documentElement.style.scrollBehavior = "smooth";
	NProgress.done();
});

export default function MyApp({ Component, pageProps }) {
	useScrollReveal();
	useMobileViewport();

	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}
