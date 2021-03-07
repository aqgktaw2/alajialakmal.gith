import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="en" prefix="og: https://ogp.me/ns#">
				<Head>
					{/* Global site tag (gtag.js) - Google Analytics */}
					<script async src="https://www.googletagmanager.com/gtag/js?id=G-HPQRKZ0NV1"></script>
					<script async src="/scripts/ga.js" />

					{/* Hotjar */}
					<script async src="/scripts/hotjar.js" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
