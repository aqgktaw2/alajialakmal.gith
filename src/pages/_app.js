import Layout from "src/components/layout";
import useScrollReveal from "src/hooks/useScrollReveal";
import "../styles/main.scss";

export default function MyApp({ Component, pageProps }) {
	useScrollReveal();

	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}
