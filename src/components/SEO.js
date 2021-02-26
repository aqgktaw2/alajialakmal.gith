import Head from "next/head";
import { Fragment } from "react";

const SEO = ({ title = "", description = "", ogImage = "" }) => {
	return (
		<Head>
			{title && (
				<Fragment>
					<title>{title}</title>
					<meta property="og:title" content={title} />
				</Fragment>
			)}

			{description && (
				<Fragment>
					<meta name="description" content={description} />
					<meta property="og:description" content={description} />
				</Fragment>
			)}

			{ogImage && (
				<Fragment>
					<meta property="og:image" content={`${process.env.NEXT_PUBLIC_DOMAIN}${ogImage}`} />
					<meta
						property="og:image:secure_url"
						content={`${process.env.NEXT_PUBLIC_DOMAIN}${ogImage}`}
					/>
				</Fragment>
			)}
		</Head>
	);
};

export default SEO;
