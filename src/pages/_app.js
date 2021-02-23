import { Router } from "next/router";
import NProgress from "nprogress";

import useMobileViewport from "@/hooks/useMobileViewport";
import useScrollReveal from "@/hooks/useScrollReveal";
import Layout from "@/components/layout";
import "../styles/main.scss";

// Progress bar
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function MyApp({ Component, pageProps }) {
	useScrollReveal();
	useMobileViewport();

	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}
